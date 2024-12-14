// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClinicSpecialization } from './clinic-specialization.entity';

@Injectable()
export class ClinicSpecializationService {
    constructor(
        @InjectRepository(ClinicSpecialization) private clinicEspecializationRepository: Repository<ClinicSpecialization>,
      ) {}
    }
    