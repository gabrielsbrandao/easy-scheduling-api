// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DiseaseReport } from './disease-report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiseaseReportService {
    constructor(
        @InjectRepository(DiseaseReport) private diseaseReportRepository: Repository<DiseaseReport>,
      ) {}
    }
    