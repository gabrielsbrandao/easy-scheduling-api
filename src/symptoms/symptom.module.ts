// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermission } from '../user-permissions/user_permission.entity';
import { PermissionsModule } from '../permission/permission.module';
import { Symptom } from './symptom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Symptom])],
  providers: [],
  exports: [TypeOrmModule],
})
export class SymptomModule {}
