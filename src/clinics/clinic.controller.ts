import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ClinicService } from './clinic.service';
import { AuthGuard } from '@nestjs/passport';

class clinicDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('clinic')
@ApiBearerAuth()
@ApiTags('Clinic')
@UseGuards(AuthGuard('jwt'))
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Get()
  async findAll() {
    // return await this.clientService.findAll();
  }
  @Get(':id')
  async findOne() {
    //return await this.clientService.findOne(id);
  }

  @Post()
  async create() {
    //return await this.clientService.create(createClientDTO);
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
