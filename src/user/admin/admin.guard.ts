import { Role, UsersEntity } from "@/entities/user.entity";
import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SupabaseClient } from "@supabase/supabase-js";
import { Repository } from "typeorm";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    @Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient,
    @InjectRepository(UsersEntity) private readonly userRepository: Repository<UsersEntity>
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers["authorization"]?.split(" ")[1];

    if (!accessToken) {
      return false;
    }

    const { data: supabaseUser, error } = await this.supabase.auth.getUser(accessToken);
    const user = await this.userRepository.findOne({
      where: {
        supabaseId: supabaseUser.user.id
      }
    });

    if (error || !user) {
      return false;
    }

    if (user.role == Role.ADMIN) {
      request.user = user;
      return true;
    }

    return false;
  }
}
