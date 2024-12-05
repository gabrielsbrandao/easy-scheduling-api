import { ApiProperty } from '@nestjs/swagger';
import { Clinic } from '../clinics/clinic.entity';
import { Specialization } from '../specializations/specialization.entity';

export class ClinicSpecializationDTO {
  @ApiProperty({ description: 'Identificador do cliente associado à especialização' })
  ClientId: number;

  @ApiProperty({ description: 'Identificador da especialização' })
  SpecializationId: number;

  @ApiProperty({ description: 'Clínica associada', type: () => Clinic })
  Clinica: Clinic;

  @ApiProperty({ description: 'Especialização associada', type: () => Specialization })
  Especializacao: Specialization;
}
