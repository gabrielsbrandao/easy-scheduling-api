import { UserPermission } from 'src/user-permissions/user_permission.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique, OneToMany } from 'typeorm';

@Entity('permissions')
@Unique(['permission_name']) // Garantindo que o 'permission_name' seja único
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  permission_name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @OneToMany(() => UserPermission, (userPermission) => userPermission.permission)
  user_permissions: UserPermission[];
}
