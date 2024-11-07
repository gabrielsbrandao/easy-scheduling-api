import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';

class CreateDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() body: CreateDTO) {
    return body;
  }
}
