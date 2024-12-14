import { ApiProperty } from '@nestjs/swagger';
import { SymptomReportDTO } from 'src/symptom-reports/sympton-report.dto';

export class SymptomDTO {
  @ApiProperty({ description: 'Identificador único do sintoma' })
  Id: number;

  @ApiProperty({ description: 'Nome do sintoma', maxLength: 100 })
  Nome: string;

  @ApiProperty({ description: 'Descrição do sintoma', nullable: true })
  Descricao?: string;

  @ApiProperty({ description: 'Relatórios associados ao sintoma', type: () => [SymptomReportDTO], nullable: true })
  symptomReports?: SymptomReportDTO[];
}
