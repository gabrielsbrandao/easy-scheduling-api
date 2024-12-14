// clinic-specialization.entity.ts
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Clinic } from '../clinics/clinic.entity';
import { Specialization } from '../specializations/specialization.entity';

@Entity('clinic_specializations')
export class ClinicSpecialization {
  @PrimaryColumn({name:'client_id'})
  ClientId: number;

  @PrimaryColumn({name:'specialization_id'})
  SpecializationId: number;

  @ManyToOne(() => Clinic, Clinica => Clinica.ClinicaEspecializacao)
  @JoinColumn({ name: 'clinic_id' })
  Clinica: Clinic;

  @ManyToOne(() => Specialization, Especializacao => Especializacao.clinicSpecializations)
  @JoinColumn({ name: 'specialization_id' })
  Especializacao: Specialization;
}
