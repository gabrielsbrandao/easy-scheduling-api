// src/clients/client.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DiseaseReport } from '../disease-reports/disease-report.entity';
import { SymptomReport } from '../symptom-reports/symptom-report.entity';
import { Exam } from '../exams/exam.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @Column({name: 'name', type: 'varchar', length: 100 })
  Nome: string;

  @Column({name:'date_birth'})
  DataNascimento: Date;

  @Column({name:'telephone', type: 'varchar', length: 15, nullable: true })
  Telefone?: string;

  @Column({name: 'email', type: 'varchar', length: 100, nullable: true })
  Email?: string;

  @Column({name: 'address', type: 'varchar', length: 255, nullable: true })
  Endereco?: string;

  @OneToMany(() => DiseaseReport, diseaseReport => diseaseReport.client)
  diseaseReports: DiseaseReport[];

  @OneToMany(() => SymptomReport, symptomReport => symptomReport.client)
  symptomReports: SymptomReport[];

  @OneToMany(() => Exam, Exame => Exame.client)
  Exame: Exam[];
}
