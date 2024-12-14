// src/clients/client.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { DiseaseReport } from '../disease-reports/disease-report.entity';
import { SymptomReport } from '../symptom-reports/symptom-report.entity';
import { Exam } from '../exams/exam.entity';
import { User } from 'src/user/user.entity';

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

  @Column({name: 'number', type: 'varchar', length: 255, nullable: true })
  Numero?: string;

  @Column({name: 'user_id', type: 'number', nullable: true })
  UserId?: number;
  
  @Column('decimal', { precision: 9, scale: 6 })
  longitude: number;

  @Column('decimal', { precision: 9, scale: 6 })
  latitude: number;
  
 @Column({name: 'cep', type: 'varchar', length: 255, nullable: true })
  cep?: string;

  @OneToMany(() => DiseaseReport, diseaseReport => diseaseReport.client)
  diseaseReports: DiseaseReport[];

  @OneToMany(() => SymptomReport, symptomReport => symptomReport.client)
  symptomReports: SymptomReport[];

  @OneToMany(() => Exam, Exame => Exame.client)
  Exame: Exam[];

  @OneToOne(() => User, { nullable: false }) 
  @JoinColumn({ name: 'user_id' }) // Especifica que 'user_id' é a chave estrangeira
  user: User;
}
