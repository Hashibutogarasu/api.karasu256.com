import { GoogleGuard } from "@/auth/google/google.guard";

describe("GoogleGuard", () => {
  it("should be defined", () => {
    expect(new GoogleGuard()).toBeDefined();
  });
});
