// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Symptom } from './symptom.entity';

@Injectable()
export class SymptomService {
    constructor(
        @InjectRepository(Symptom) private symptomRepository: Repository<Symptom>,
      ) {}
    }
    