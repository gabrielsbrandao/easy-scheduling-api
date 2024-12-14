// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disease } from './disease.entity';
import { UserPermission } from '../user-permissions/user_permission.entity';
import { PermissionsModule } from '../permission/permission.module';

@Module({
  imports: [TypeOrmModule.forFeature([Disease])],
  providers: [],
  exports: [TypeOrmModule],
})
export class DiseaseModule {}
