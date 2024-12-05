// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialization } from './specialization.entity';

@Injectable()
export class SpecializationService {
    constructor(
        @InjectRepository(Specialization) private specializationRepository: Repository<Specialization>,
      ) {}
    }
    