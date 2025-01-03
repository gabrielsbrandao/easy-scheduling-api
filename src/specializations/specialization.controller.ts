import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { SpecializationService} from './specialization.service';

class specializationDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('specialization')
export class SpecializationController {
  constructor(private readonly specializationService: SpecializationService) {}
  @Get()
  async findAll() {
    return await this.specializationService.findAll();
  }
}
