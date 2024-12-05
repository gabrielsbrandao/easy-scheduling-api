// src/clinics/clinic.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { ClinicSpecialization } from '../clinic-specializations/clinic-specialization.entity';
import { Exam } from '../exams/exam.entity';
import { User } from 'src/user/user.entity';

@Entity('clinics')
export class Clinic {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @Column({name: 'name', type: 'varchar', length: 100 })
  Nome: string;

  @Column({name: 'address', type: 'varchar', length: 255, nullable: true })
  Endereco?: string;

  @Column({name: 'number', type: 'varchar', length: 255, nullable: true })
  Numero?: string;

  @Column({name: 'telephone', type: 'varchar', length: 15, nullable: true })
  Telefone?: string;

  @OneToMany(() => ClinicSpecialization, ClinicaEspecializacao => ClinicaEspecializacao.Clinica)
  ClinicaEspecializacao: ClinicSpecialization[];

  @OneToMany(() => Exam, Exame => Exame.clinic)
  Exame: Exam[];

  @OneToOne(() => User, { nullable: false }) 
  @JoinColumn({ name: 'user_id' }) // Especifica que 'user_id' é a chave estrangeira
  user: User;
}
