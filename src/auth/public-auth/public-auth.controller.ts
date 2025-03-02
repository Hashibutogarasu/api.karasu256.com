import { Body, Controller, Get, Post, Query, Req, Request, Response, UseGuards } from "@nestjs/common";
import { PublicAuthService } from "./public-auth.service";
import {
  SignInDto,
  signInSchema,
  SignUpDto,
  signUpSchema,
  accessTokenSchema,
  ActionQueryParamDto,
  actionQueryModeSchema,
  actionQueryoobCodeSchema,
  actionQueryApiKeySchema,
  actionQueryContinueUrlSchema,
  actionQueryLangSchema,
  userSchema,
  UserRecord,
} from "./public-auth.dto";
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiQuery, ApiResponse } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { UserCredential } from "firebase/auth";
import { AuthGuard } from "@nestjs/passport";
import { Response as ExResponse } from "express";
import { GoogleOAuthGuard } from "../google/google.guard";

@Controller("auth/public")
export class PublicAuthController {
  constructor(
    private readonly publicAuthService: PublicAuthService,
  ) { }

  @ApiOkResponse({
    description: "The user has been successfully signed in.",
    schema: zodToOpenAPI(accessTokenSchema),
  })
  @ApiBody({
    schema: zodToOpenAPI(signInSchema),
  })
  @Post("signin")
  async signin(@Body() dto: SignInDto) {
    return await this.publicAuthService.signin(dto);
  }

  @ApiResponse({
    status: 201,
    description: "The user has been successfully created.",
    schema: zodToOpenAPI(accessTokenSchema),
  })
  @ApiBody({
    schema: zodToOpenAPI(signUpSchema),
  })
  @Post("signup")
  async signup(@Body() dto: SignUpDto): Promise<UserCredential> {
    return await this.publicAuthService.signup(dto);
  }

  @ApiOkResponse({
    description: "The user has been successfully retrieved.",
    schema: zodToOpenAPI(userSchema),
  })
  @UseGuards(AuthGuard("firebase-auth"))
  @ApiBearerAuth()
  @Get("me")
  async me(@Request() req) {
    return req.user;
  }

  @UseGuards(GoogleOAuthGuard)
  @Get("signin/google")
  async google(@Request() req, @Response() res: ExResponse) {
    return await this.publicAuthService.googleCallback(req, res);
  }

  @ApiResponse({
    description: "The user has been successfully retrieved.",
    schema: zodToOpenAPI(userSchema),
  })
  @Get("callback/google")
  @UseGuards(GoogleOAuthGuard)
  async googleCallback(@Request() req, @Response() res: ExResponse) {
    return await this.publicAuthService.googleCallback(req, res);
  }

  @ApiQuery({
    name: "mode",
    schema: zodToOpenAPI(actionQueryModeSchema),
  })
  @ApiQuery({
    name: "oobCode",
    schema: zodToOpenAPI(actionQueryoobCodeSchema),
  })
  @ApiQuery({
    name: "apiKey",
    schema: zodToOpenAPI(actionQueryApiKeySchema),
  })
  @ApiQuery({
    name: "continueUrl",
    schema: zodToOpenAPI(actionQueryContinueUrlSchema),
  })
  @ApiQuery({
    name: "lang",
    schema: zodToOpenAPI(actionQueryLangSchema),
  })
  @Get("action")
  async action(@Response() res: ExResponse, @Query() query: ActionQueryParamDto) {
    return await this.publicAuthService.action(res, query);
  }
}
