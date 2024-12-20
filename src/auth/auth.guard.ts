import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { Inject } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers["authorization"]?.split(" ")[1];

    if (!accessToken) {
      return false;
    }

    const { data: data, error } = await this.supabase.auth.getUser(accessToken);

    if (error || !data) {
      return false;
    }

    request.user = data.user;
    return true;
  }
}
