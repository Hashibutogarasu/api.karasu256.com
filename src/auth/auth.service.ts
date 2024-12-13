import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) { }

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return data.user;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return data.session.access_token;
  }

  async verifyOTPhash({ tokenhash }: { tokenhash: string }) {
    const { data, error } = await this.supabase.auth.verifyOtp({
      token_hash: tokenhash,
      type: 'magiclink'
    });
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return data.session.access_token;
  }

  async verifyOTP({ email, token }: { email: string; token: string }) {
    const { data, error } = await this.supabase.auth.verifyOtp({
      email: email,
      token: token,
      type: 'magiclink',
    });
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return data.session.access_token;
  }

  async checkSession(token: string): Promise<boolean> {
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    const { data, error } = await this.supabase.auth.getUser(token);
    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return !data;
  }

  async signInWithOtp({ email, redirectTo }: { email: string; redirectTo: string | undefined; }) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectTo
      }
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return {
      message: 'OTP sent to email. Check your email box.',
    };
  }
}
