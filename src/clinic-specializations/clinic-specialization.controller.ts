import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ClinicSpecializationService } from './clinic-specialization.service';

class ClinicSpecializationDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('clinic-scpecialization')
export class ClinicSpecializationController {
  constructor(private readonly clinicSpecializationService: ClinicSpecializationService) {}

}
