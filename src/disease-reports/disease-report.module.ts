import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiseaseReport } from './disease-report.entity';
import { Client } from '../clients/client.entity';
import { Disease } from '../diseases/disease.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DiseaseReport, Client, Disease]), // Inclui repositórios relacionados
  ],
  exports: [TypeOrmModule], // Exporta os repositórios se necessário
})
export class DiseaseReportModule {}
