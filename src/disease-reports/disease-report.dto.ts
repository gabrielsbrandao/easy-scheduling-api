import { ApiProperty } from '@nestjs/swagger';
import { ClientDTO, CreateClientDTO } from 'src/clients/client.dto';
import { DiseaseDTO } from 'src/diseases/disease.dto';

export class DiseaseReportDTO {
  @ApiProperty({ description: 'Identificador único do relatório de doenças' })
  Id: number;

  @ApiProperty({ description: 'Cliente associado ao relatório de doenças', type: () => CreateClientDTO, nullable: true })
  client?: CreateClientDTO;

  @ApiProperty({ description: 'Doença relatada', type: () => DiseaseDTO, nullable: true })
  disease?: DiseaseDTO;

  @ApiProperty({ description: 'Data do relatório de doenças', type: String, format: 'date-time', nullable: true })
  Data?: Date;

  @ApiProperty({ description: 'Descrição do relatório', type: String, nullable: true })
  Descricao?: string;
}
