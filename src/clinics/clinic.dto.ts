import { ApiProperty } from '@nestjs/swagger';
import { ClinicSpecializationDTO } from 'src/clinic-specializations/clinic-specialization.dto';
import { ExamDTO } from 'src/exams/exam.dto';

export class ClinicDTO {
  @ApiProperty({ description: 'Identificador único da clínica' })
  Id: number;

  @ApiProperty({ description: 'Nome da clínica', maxLength: 100 })
  Nome: string;

  @ApiProperty({ description: 'Endereço da clínica', maxLength: 255, nullable: true })
  Endereco?: string;

  @ApiProperty({ description: 'Endereço da clínica', maxLength: 255, nullable: true })
  Numero?: string;

  @ApiProperty({ description: 'Telefone da clínica', maxLength: 15, nullable: true })
  Telefone?: string;

  @ApiProperty({ description: 'Especializações da clínica', type: () => [ClinicSpecializationDTO], nullable: true })
  ClinicaEspecializacao?: ClinicSpecializationDTO[];

  @ApiProperty({ description: 'Exames realizados na clínica', type: () => [ExamDTO], nullable: true })
  Exame?: ExamDTO[];
}
