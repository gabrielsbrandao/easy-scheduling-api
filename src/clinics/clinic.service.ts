// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clinic } from './clinic.entity';
import { ClinicDTO } from './clinic.dto';
import { GeolocationService } from 'src/geolocatilization/geolocalization.service';
import { ClientService } from 'src/clients/client.service';

@Injectable()
export class ClinicService {
  constructor(
    @InjectRepository(Clinic) private clinicRepository: Repository<Clinic>,
    private readonly geolocationService: GeolocationService,
    private readonly clientService: ClientService
  ) { }

  async find(userId : number | null): Promise<Clinic[]> {
    const itens = [];
    const clinics = await this.clinicRepository.createQueryBuilder('clinic')
    .getMany();
    console.log(clinics);
    const client = await this.clientService.findOne(userId);
    console.log(client);
    clinics.forEach(item => {
      const clinicInfo = {
        Id: item.Id,
        Nome: item.Nome,
        Distancia: this.haversine(item.latitude, item.longitude, client.latitude, client.longitude).toFixed(1),
      };
      itens.push(clinicInfo);
    });
    return itens
  }
  async create(clinicDTO: ClinicDTO): Promise<Clinic> {
    const clinic = this.clinicRepository.create(clinicDTO);
    const { lat, lng } = await this.geolocationService.getGeolocationFromOpenCage(clinicDTO.Endereco);
    clinic.latitude = lat;
    clinic.longitude = lng;

    return await this.clinicRepository.save(clinic);
  }
  private haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Raio da Terra em km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Retorna a distância em km
  }

  async findClosestClinic(patientLat: number, patientLon: number): Promise<Clinic> {
    const clinics = await this.find(null);
    let closestClinic = null;
    let minDistance = Infinity;

    clinics.forEach(clinic => {
      const distance = this.haversine(patientLat, patientLon, clinic.latitude, clinic.longitude);
      if (distance < minDistance) {
        minDistance = distance;
        closestClinic = clinic;
      }
    });

    return closestClinic;
  }
  private toRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
