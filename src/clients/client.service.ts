import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { ClientDTO, CreateClientDTO } from './client.dto';
import { GeolocationService } from 'src/geolocatilization/geolocalization.service';

@Injectable()
export class ClientService {
  constructor(
    private readonly geolocationService: GeolocationService,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find({ relations: ['diseaseReports', 'symptomReports', 'Exame', 'user'] });
  }

  async findOne(id: number): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: { UserId: id },
      relations: ['diseaseReports', 'symptomReports', 'Exame', 'user'],
    });

    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }

    return client;
  }

  async create(clientDTO: CreateClientDTO): Promise<Client> {
    const client = this.clientRepository.create(clientDTO);
    const { lat, lng } = await this.geolocationService.getGeolocationFromOpenCage(clientDTO.Endereco);
    client.latitude = lat;
    client.longitude = lng;
    
    return await this.clientRepository.save(client);
  }

  async update(id: number, clientDTO: CreateClientDTO): Promise<Client> {
    const client = await this.findOne(id);
    Object.assign(client, clientDTO);
    return await this.clientRepository.save(client);
  }

  async delete(id: number): Promise<void> {
    const client = await this.findOne(id);
    await this.clientRepository.remove(client);
  }
}
