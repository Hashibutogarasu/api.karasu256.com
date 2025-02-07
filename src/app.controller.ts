import { Controller, Get } from "@nestjs/common";
import { AppService } from "@/app.service";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Authorization } from "@nestjs-cognito/auth";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
}
