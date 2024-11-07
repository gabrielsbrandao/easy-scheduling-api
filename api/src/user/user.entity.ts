// src/entities/user.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { UserPermission } from 'src/user-permissions/user_permission.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany } from 'typeorm';


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
  first_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  last_name: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'editor', 'viewer'],
    default: 'viewer',
  })
  role: 'admin' | 'editor' | 'viewer';

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
    firstName?: string;
  
    @ApiProperty()
    lastName?: string;

    @ApiProperty()
    role: Role;
  }
  export enum Role {
    Admin = 'admin',
    Editor = 'editor',
    Viewer = 'viewer',
  }