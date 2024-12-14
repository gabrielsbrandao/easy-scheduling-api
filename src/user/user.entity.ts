// src/entities/user.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Client } from 'src/clients/client.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { UserPermission } from 'src/user-permissions/user_permission.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';


@Entity('users')
@Unique(['email'])  // Garantindo que o 'email' seja único
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password_hash: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'editor', 'viewer', 'client'],
    default: 'viewer',
  })
  role: 'admin' | 'editor' | 'viewer' | 'client';

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  last_login: Date;

  @OneToMany(() => UserPermission, (userPermission) => userPermission.user)
  user_permissions: UserPermission[];

}

export class CreateUserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
  
    @ApiProperty()
    name?: string;
  
    @ApiProperty()
    role: Role;
  }
  export enum Role {
    Admin = 'admin',
    Editor = 'editor',
    Viewer = 'viewer',
    Client = 'client',

  }