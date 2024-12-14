// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disease } from './disease.entity';

@Injectable()
export class DiseaseService {
    constructor(
        @InjectRepository(Disease) private diseaseRepository: Repository<Disease>,
      ) {}

      async findAll(): Promise<Disease[]> {
        return await this.diseaseRepository.find();
      }
    }
    
    