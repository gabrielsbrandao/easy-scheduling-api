import { ApiProperty } from '@nestjs/swagger';
import { DiseaseReportDTO } from 'src/disease-reports/disease-report.dto';

export class DiseaseDTO {
  @ApiProperty({ description: 'Identificador único da doença' })
  Id: number;

  @ApiProperty({ description: 'Nome da doença', maxLength: 100 })
  Nome: string;

  @ApiProperty({ description: 'Descrição da doença', nullable: true })
  Descricao?: string;

  @ApiProperty({ description: 'Relatórios associados à doença', type: () => [DiseaseReportDTO], nullable: true })
  diseaseReports?: DiseaseReportDTO[];
}
