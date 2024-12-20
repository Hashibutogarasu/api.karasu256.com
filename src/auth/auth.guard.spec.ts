import { SupabaseClient } from "@supabase/supabase-js";
import { AuthGuard } from "@/auth/auth.guard";

describe("AuthGuard", () => {
  it("should be defined", () => {
    const supabaseClientMock = {} as SupabaseClient;
    expect(new AuthGuard(supabaseClientMock)).toBeDefined();
  });
});
