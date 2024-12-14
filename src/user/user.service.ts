import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class UserService {
  constructor(@Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient) { }

  async createUser({ display_name, prismaUserId, email, full_name, avatar_url }: { display_name: string, prismaUserId: string, email: string, full_name: string, avatar_url: string }): Promise<{ message: string }> {
    const { data: users } = await this.supabase.from("users").select().eq("display_name", display_name);

    if (users && users.length > 0) {
      return {
        message: `The user with display name ${display_name} already exists. Please use a different display name.`,
      }
    }

    const { data, error } = await this.supabase.from("users").upsert({
      display_name: display_name,
      prismaUserId: prismaUserId,
      email: email,
      full_name: full_name,
      avatar_url: avatar_url,
    });
    if (error) {
      throw error;
    }

    return {
      message: "User created successfully",
    }
  }

  async updateUser({ display_name, prismaUserId, email, full_name, avatar_url }: { display_name: string, prismaUserId: string, email: string, full_name: string, avatar_url: string }): Promise<{ message: string }> {
    const { data, error } = await this.supabase.from("users").upsert({
      display_name: display_name,
      prismaUserId: prismaUserId,
      email: email,
      full_name: full_name,
      avatar_url: avatar_url,
    });
    if (error) {
      throw error;
    }

    return {
      message: "User updated successfully",
    }
  }
}
