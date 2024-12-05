// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SymptomReport } from './symptom-report.entity';

@Injectable()
export class SymptomReportService {
    constructor(
        @InjectRepository(SymptomReport) private symptomReportRepository: Repository<SymptomReport>,
      ) {}
    }
    