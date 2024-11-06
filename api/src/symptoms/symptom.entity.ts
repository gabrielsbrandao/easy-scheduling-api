// src/symptoms/symptom.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { SymptomReport } from '../symptom-reports/symptom-report.entity';

@Entity('symptoms')
export class Symptom {
  @PrimaryColumn({name:'id'})
  Id: number;

  @Column({name: 'name', type: 'varchar', length: 100 })
  Nome: string;

  @Column({name: 'description', type: 'text', nullable: true })
  Descricao?: string;

  @OneToMany(() => SymptomReport, symptomReport => symptomReport.symptom)
  symptomReports: SymptomReport[];
}
