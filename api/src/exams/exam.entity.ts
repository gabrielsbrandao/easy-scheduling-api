// src/exams/exam.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from '../clients/client.entity';
import { Clinic } from '../clinics/clinic.entity';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @ManyToOne(() => Client, client => client.Exame, { nullable: true })
  client?: Client;

  @ManyToOne(() => Clinic, clinic => clinic.Exame, { nullable: true })
  clinic?: Clinic;

  @Column({name: 'date_scheduling', type: 'datetime', nullable: true })
  DataAgendamento?: Date;

  @Column({name: 'exam_type', type: 'varchar', length: 100, nullable: true })
  TipoExame?: string;

  @Column({name: 'status', type: 'varchar', length: 50, nullable: true })
  Status?: string;
}
