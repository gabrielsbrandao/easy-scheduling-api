import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { SymptomReportService} from './symptom-report.service';

class symptomDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('symptom-report')
export class SymptomReportController {
  constructor(private readonly userService: SymptomReportService) {}

}
