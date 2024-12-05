import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { SymptomService } from './symptom.service';

class symptomDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('symptom')
export class SymptomController {
  constructor(private readonly symptomService: SymptomService) {}

}
