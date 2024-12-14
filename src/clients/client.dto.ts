import { ApiProperty } from '@nestjs/swagger';
import { DiseaseReportDTO } from 'src/disease-reports/disease-report.dto';
import { SymptomReportDTO } from 'src/symptom-reports/sympton-report.dto';
import { ExamDTO } from 'src/exams/exam.dto';
import { UserDTO } from 'src/user/user.dto';

export class ClientDTO {
  @ApiProperty({ description: 'Identificador único do cliente' })
  Id: number;

  @ApiProperty({ description: 'Nome do cliente', maxLength: 100 })
  Nome: string;

  @ApiProperty({ description: 'Data de nascimento do cliente', type: String, format: 'date' })
  DataNascimento: Date;

  @ApiProperty({ description: 'Número de telefone do cliente', maxLength: 15, nullable: true })
  Telefone?: string;

  @ApiProperty({ description: 'Email do cliente', maxLength: 100, nullable: true })
  Email?: string;

  @ApiProperty({ description: 'Endereço do cliente', maxLength: 255, nullable: true })
  Endereco?: string;

  @ApiProperty({ description: 'Numero do endereço do cliente', maxLength: 255, nullable: true })
  Numero?: string;

  @ApiProperty({ description: 'Lista de relatórios de doenças do cliente', type: () => [DiseaseReportDTO], nullable: true })
  diseaseReports?: DiseaseReportDTO[];

  @ApiProperty({ description: 'Lista de relatórios de sintomas do cliente', type: () => [SymptomReportDTO], nullable: true })
  symptomReports?: SymptomReportDTO[];

  @ApiProperty({ description: 'Lista de exames do cliente', type: () => [ExamDTO], nullable: true })
  Exame?: ExamDTO[];
}

export class CreateClientDTO
{
  @ApiProperty({ description: 'Nome do cliente', maxLength: 100 })
  Nome: string;

  @ApiProperty({ description: 'Data de nascimento do cliente', type: String, format: 'date' })
  DataNascimento: Date;

  @ApiProperty({ description: 'Número de telefone do cliente', maxLength: 15, nullable: true })
  Telefone?: string;

  @ApiProperty({ description: 'Email do cliente', maxLength: 100, nullable: true })
  Email?: string;

  @ApiProperty({ description: 'Endereço do cliente', maxLength: 255, nullable: true })
  Endereco?: string;

  @ApiProperty({ description: 'Numero do endereço do cliente', maxLength: 255, nullable: true })
  Numero?: string;

  @ApiProperty({ description: 'Lista de relatórios de doenças do cliente', type: () => [DiseaseReportDTO], nullable: true })
  diseaseReports?: DiseaseReportDTO[];

  @ApiProperty({ description: 'Usuário', maxLength: 255, nullable: true })
  User?: UserDTO;

  @ApiProperty({ description: 'Id do Usuário', maxLength: 255, nullable: true })
  UserId?: number;

  @ApiProperty({ description: 'Cep do cliente', maxLength: 255, nullable: true })
  Cep?: string;

}