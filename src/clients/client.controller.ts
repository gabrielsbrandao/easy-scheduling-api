import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { ClientDTO, CreateClientDTO } from './client.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Client')
@Controller('client')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll() {
    return await this.clientService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.clientService.findOne(id);
  }

  @Post()
  async create(@Body() createClientDTO: CreateClientDTO) {
    return await this.clientService.create(createClientDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() clientDTO: CreateClientDTO) {
    return await this.clientService.update(id, clientDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.clientService.delete(id);
    return { message: `Client with ID ${id} deleted successfully` };
  }

  @Get('clientSchedule')
  async clinicSchedule() {
    return await this.clientService.findAll();
  }
}
