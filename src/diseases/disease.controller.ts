import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { DiseaseService } from './disease.service';

class diseaseDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('disease')
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}
  @Get()
  async findAll() {
    return await this.diseaseService.findAll();
  }
}
