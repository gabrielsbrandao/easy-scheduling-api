import { ApiProperty } from '@nestjs/swagger';
import { PermissionDTO } from 'src/permission/permission.dto';
import { UserDTO } from 'src/user/user.dto';

export class UserPermissionDTO {
  @ApiProperty({ description: 'Identificador único da associação entre usuário e permissão' })
  user_permission_id: number;

  @ApiProperty({ description: 'Usuário associado à permissão', type: () => UserDTO })
  user: UserDTO;

  @ApiProperty({ description: 'Permissão associada ao usuário', type: () => PermissionDTO })
  permission: PermissionDTO;
}
