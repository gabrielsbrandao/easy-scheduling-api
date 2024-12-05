import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { DiseaseReportService } from './disease-report.service';

class diseaseReportDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('disease-reports')
export class DiseaseReportController {
  constructor(private readonly userService: DiseaseReportService) {}

}
