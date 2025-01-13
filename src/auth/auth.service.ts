import { Injectable, Inject, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { Repository } from "typeorm";
import {
  PasswordLessSignInDto,
  SignInDto,
  SignInOtpDto,
  SignUpDto,
  VerifyOtpDto,
} from "./auth.dto";

@Injectable()
export class AuthService {
  constructor(@Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient) {}

  async signUp({ email, password }: SignUpDto) {
    let user: User;

    const _data = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (_data.data.user) {
      user = _data.data.user;
    } else {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        throw new UnauthorizedException(error.message);
      }

      user = data.user;
    }

    return user;
  }

  async signIn({ email, password }: SignInDto) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return data.session.access_token;
  }

  async checkSession(token: string): Promise<boolean> {
    if (!token) {
      throw new UnauthorizedException("Token not found");
    }

    const { data, error } = await this.supabase.auth.getUser(token);
    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return !data;
  }

  async signInWithOtp({ email }: PasswordLessSignInDto, redirectTo: string) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return {
      message: "OTP sent to email. Check your email box.",
    };
  }

  async confirm(dto: VerifyOtpDto) {
    const { data, error } = await this.supabase.auth.verifyOtp({
      token_hash: dto.token_hash,
      type: dto.type as any,
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return {
      message: "Successfully logged in",
      token: data.session.access_token,
    };
  }
}
