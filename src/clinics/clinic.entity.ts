// src/clinics/clinic.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ClinicSpecialization } from '../clinic-specializations/clinic-specialization.entity';
import { Exam } from '../exams/exam.entity';

@Entity('clinics')
export class Clinic {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @Column({name: 'name', type: 'varchar', length: 100 })
  Nome: string;

  @Column({name: 'address', type: 'varchar', length: 255, nullable: true })
  Endereco?: string;

  @Column({name: 'telephone', type: 'varchar', length: 15, nullable: true })
  Telefone?: string;

  @OneToMany(() => ClinicSpecialization, ClinicaEspecializacao => ClinicaEspecializacao.Clinica)
  ClinicaEspecializacao: ClinicSpecialization[];

  @OneToMany(() => Exam, Exame => Exame.clinic)
  Exame: Exam[];
}
