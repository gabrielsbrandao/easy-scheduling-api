// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SymptomReport } from './symptom-report.entity';
import { Symptom } from 'src/symptoms/symptom.entity';
import { Client } from 'src/clients/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SymptomReport, Symptom, Client])],
  providers: [],
  exports: [TypeOrmModule],
})
export class SymptomReportModule {}
