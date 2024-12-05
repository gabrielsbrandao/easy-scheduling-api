// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clinic } from './clinic.entity';

@Injectable()
export class ClinicService {
    constructor(
        @InjectRepository(Clinic) private clinicRepository: Repository<Clinic>,
      ) {}
    }
    