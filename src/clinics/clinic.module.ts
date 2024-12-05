// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinic } from './clinic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clinic])],
  providers: [],
  exports: [TypeOrmModule],
})
export class ClinicModule {}
