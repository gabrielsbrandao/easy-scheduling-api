// src/disease-reports/disease-report.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Client } from '../clients/client.entity';
import { Disease } from '../diseases/disease.entity';

@Entity('disease_reports')
export class DiseaseReport {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @ManyToOne(() => Client, client => client.diseaseReports, { nullable: true })
  client?: Client;

  @ManyToOne(() => Disease, disease => disease.diseaseReports, { nullable: true })
  disease?: Disease;

  @Column({name:'date', type: 'datetime', nullable: true })
  Data?: Date;

  @Column({name: 'description', type: 'text', nullable: true })
  Descricao?: string;
}
