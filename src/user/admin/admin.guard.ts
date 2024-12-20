import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(@Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers["authorization"]?.split(" ")[1];

    if (!accessToken) {
      return false;
    }

    const { data: supabaseUser, error } = await this.supabase.auth.getUser(accessToken);
    const { data, error: userError } = await this.supabase
      .from("users")
      .select()
      .eq("supabaseUserId", supabaseUser.user.id)
      .single();

    if (error || !data) {
      return false;
    }

    if (data.user.role == "ADMIN") {
      request.user = data.user;
      return true;
    }

    return false;
  }
}
