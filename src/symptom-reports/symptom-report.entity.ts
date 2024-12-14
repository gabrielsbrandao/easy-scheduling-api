// src/symptom-reports/symptom-report.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from '../clients/client.entity';
import { Symptom } from '../symptoms/symptom.entity';

@Entity('symptom_reports')
export class SymptomReport {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @ManyToOne(() => Client, client => client.symptomReports, { nullable: true })
  client?: Client;

  @ManyToOne(() => Symptom, symptom => symptom.symptomReports, { nullable: true })
  symptom?: Symptom;

  @Column({name: 'date', type: 'datetime', nullable: true })
  Data?: Date;

  @Column({name: 'description', type: 'text', nullable: true })
  Descricao?: string;
}
