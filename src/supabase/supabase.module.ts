import { Global, Module } from "@nestjs/common";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

@Global()
@Module({
  providers: [
    {
      provide: "SUPABASE_CLIENT",
      useFactory: (): SupabaseClient => {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        return createClient(supabaseUrl, supabaseServiceRoleKey);
      },
    },
  ],
  exports: ["SUPABASE_CLIENT"],
})
export class SupabaseModule {}
