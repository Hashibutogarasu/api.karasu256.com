import { Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { GenshinService } from './genshin.service';

@Controller('wiki/genshin')
export class GenshinController {
  constructor(
    private readonly genshinService: GenshinService
  ) { }
}
