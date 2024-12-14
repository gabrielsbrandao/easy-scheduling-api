import { ApiProperty } from '@nestjs/swagger';
import { UserPermissionDTO } from 'src/user-permissions/user_permission.dto';
import { UserPermission } from 'src/user-permissions/user_permission.entity';

export enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Viewer = 'viewer',
}
export class UserDTO{
    @ApiProperty({ description: 'Email do usuário', maxLength: 255 })
    email: string;

    @ApiProperty({ description: 'Primeiro nome do usuário', maxLength: 100, nullable: true })
    name?: string;

    @ApiProperty({ description: 'Id do usuário', maxLength: 100, nullable: true })
    id?: number;

    @ApiProperty({ description: 'Papel do usuário no sistema', enum: Role, default: Role.Viewer })
    role: Role;
}
export class CreateUserDto {
  @ApiProperty({ description: 'Email do usuário', maxLength: 255 })
  email: string;

  @ApiProperty({ description: 'Senha do usuário', maxLength: 255 })
  password: string;

  @ApiProperty({ description: 'Primeiro nome do usuário', maxLength: 100, nullable: true })
  name?: string;

  @ApiProperty({ description: 'Papel do usuário no sistema', enum: Role, default: Role.Viewer })
  role: Role;
}

export class UserResponseDto {
  @ApiProperty({ description: 'Identificador único do usuário' })
  id: number;

  @ApiProperty({ description: 'Email do usuário', maxLength: 255 })
  email: string;

  @ApiProperty({ description: 'Hash da senha do usuário (somente para backend)', maxLength: 255 })
  password_hash: string;

  @ApiProperty({ description: 'Primeiro nome do usuário', maxLength: 100, nullable: true })
  first_name?: string;

  @ApiProperty({ description: 'Último nome do usuário', maxLength: 100, nullable: true })
  last_name?: string;

  @ApiProperty({ description: 'Papel do usuário no sistema', enum: Role })
  role: Role;

  @ApiProperty({ description: 'Data de criação do registro' })
  created_at: Date;

  @ApiProperty({ description: 'Data da última atualização do registro' })
  updated_at: Date;

  @ApiProperty({ description: 'Data do último login', nullable: true })
  last_login?: Date;

  @ApiProperty({ description: 'Associações entre o usuário e permissões', type: () => [UserPermissionDTO], nullable: true })
  user_permissions?: UserPermissionDTO[];
}
