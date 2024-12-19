import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SupabaseClient } from "@supabase/supabase-js";
import { UsersEntity } from "@/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    @Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient,
    @InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers["authorization"]?.split(" ")[1];

    if (!accessToken) {
      return false;
    }

    const { data: supabaseUser, error } = await this.supabase.auth.getUser(accessToken);

    if (error) {
      return false;
    }

    const user = await this.usersRepository.findOne({
      where: {
        supabaseId: supabaseUser.user.id,
      },
    });

    if (user) {
      request.user = user;
      return true;
    }

    return false;
  }
}
