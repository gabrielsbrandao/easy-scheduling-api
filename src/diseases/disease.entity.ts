// src/diseases/disease.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { DiseaseReport } from '../disease-reports/disease-report.entity';

@Entity('diseases')
export class Disease {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @Column({name: 'name', type: 'varchar', length: 100 })
  Nome: string;

  @Column({name:'description', type: 'text', nullable: true })
  Descricao?: string;

  @OneToMany(() => DiseaseReport, diseaseReport => diseaseReport.disease)
  diseaseReports: DiseaseReport[];
}
