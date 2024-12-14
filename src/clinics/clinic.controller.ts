import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ClinicService } from './clinic.service';
import { AuthGuard } from '@nestjs/passport';
import { ClinicDTO } from './clinic.dto';

class clinicDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
@Controller('clinic')
@ApiTags('Clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) { }

  @Post(':userId')
  async findAll(@Param('id') userId: number) {
    return await this.clinicService.find(userId);
  }
  @Get(':id')
  async findOne() {
    //return await this.clientService.findOne(id);
  }

  @Post()
  async create(@Body() createClientDTO: ClinicDTO) {
    
    return await this.clinicService.create(createClientDTO);
  }

  @Put(':id')
  async update() {
    //return await this.clientService.update(id, clientDTO);
  }

  @Delete(':id')
  async delete() {
    //await this.clientService.delete(id);
    //return { message: `Client with ID ${id} deleted successfully` };
  }

  @Get('clinicSchedule')
  async clinicSchedule() {
    //return await this.clientService.findAll();
  }
}
