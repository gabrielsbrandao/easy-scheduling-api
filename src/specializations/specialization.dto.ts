import { ApiProperty } from '@nestjs/swagger';
import { ClinicSpecializationDTO } from 'src/clinic-specializations/clinic-specialization.dto';

export class SpecializationDTO {
  @ApiProperty({ description: 'Identificador único da especialização' })
  Id: number;

  @ApiProperty({ description: 'Nome da especialização', maxLength: 100 })
  Nome: string;

  @ApiProperty({ description: 'Descrição da especialização', nullable: true })
  Descricao?: string;

  @ApiProperty({ description: 'Associações da especialização com clínicas', type: () => [ClinicSpecializationDTO], nullable: true })
  clinicSpecializations?: ClinicSpecializationDTO[];
}
