import { ApiProperty } from '@nestjs/swagger';
import { ClientDTO } from 'src/clients/client.dto';

export class SymptomReportDTO {
  @ApiProperty({ description: 'Identificador único do relatório de sintomas' })
  Id: number;

  @ApiProperty({ description: 'Cliente associado ao relatório de sintomas', type: () => ClientDTO, nullable: true })
  client?: ClientDTO;

  @ApiProperty({ description: 'Sintoma relatado', type: () => SymptomReportDTO, nullable: true })
  symptom?: SymptomReportDTO;

  @ApiProperty({ description: 'Data do relatório de sintomas', type: String, format: 'date-time', nullable: true })
  Data?: Date;

  @ApiProperty({ description: 'Descrição do relatório', type: String, nullable: true })
  Descricao?: string;
}
