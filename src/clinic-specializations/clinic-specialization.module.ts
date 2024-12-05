// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicSpecialization } from './clinic-specialization.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { Specialization } from 'src/specializations/specialization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicSpecialization, Clinic, Specialization])],
  providers: [],
  exports: [TypeOrmModule],
})
export class ClinicSpecializationModule {}
