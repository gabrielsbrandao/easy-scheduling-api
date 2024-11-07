// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserPermission } from '../user-permissions/user_permission.entity';
import { PermissionsModule } from '../permission/permission.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserPermission]), PermissionsModule],
  providers: [],
  exports: [TypeOrmModule],
})
export class UsersModule {}
