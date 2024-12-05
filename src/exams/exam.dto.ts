import { ApiProperty } from '@nestjs/swagger';
import { ClientDTO } from 'src/clients/client.dto';
import { ClinicDTO } from 'src/clinics/clinic.dto';

export class ExamDTO {
  @ApiProperty({ description: 'Identificador único do exame' })
  Id: number;

  @ApiProperty({ description: 'Cliente associado ao exame', type: () => ClientDTO, nullable: true })
  client?: ClientDTO;

  @ApiProperty({ description: 'Clínica associada ao exame', type: () => ClinicDTO, nullable: true })
  clinic?: ClinicDTO;

  @ApiProperty({ description: 'Data de agendamento do exame', type: String, format: 'date-time', nullable: true })
  DataAgendamento?: Date;

  @ApiProperty({ description: 'Tipo de exame realizado', maxLength: 100, nullable: true })
  TipoExame?: string;

  @ApiProperty({ description: 'Status atual do exame', maxLength: 50, nullable: true })
  Status?: string;
}
