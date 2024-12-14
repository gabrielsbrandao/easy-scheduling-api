import { ApiProperty } from '@nestjs/swagger';
import { UserPermissionDTO } from 'src/user-permissions/user_permission.dto';

export class PermissionDTO {
  @ApiProperty({ description: 'Identificador único da permissão' })
  id: number;

  @ApiProperty({ description: 'Nome da permissão', maxLength: 100 })
  permission_name: string;

  @ApiProperty({ description: 'Descrição da permissão', nullable: true })
  description?: string;

  @ApiProperty({ description: 'Data de criação da permissão' })
  created_at: Date;

  @ApiProperty({ description: 'Associações entre usuários e permissões', type: () => [UserPermissionDTO], nullable: true })
  user_permissions?: UserPermissionDTO[];
}
