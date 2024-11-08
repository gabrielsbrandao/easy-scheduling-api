// src/specializations/specialization.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ClinicSpecialization } from '../clinic-specializations/clinic-specialization.entity';

@Entity('specializations')
export class Specialization {
  @PrimaryGeneratedColumn({name:'id'})
  Id: number;

  @Column({name:'name', type: 'varchar', length: 100 })
  Nome: string;

  @Column({name: 'description', type: 'text', nullable: true })
  Descricao?: string;

  @OneToMany(() => ClinicSpecialization, clinicSpecialization => clinicSpecialization.Especializacao)
  clinicSpecializations: ClinicSpecialization[];
}
