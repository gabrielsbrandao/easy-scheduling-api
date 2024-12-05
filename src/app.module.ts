import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/client.entity';
import { Clinic } from './clinics/clinic.entity';
import { Disease } from './diseases/disease.entity';
import { ClinicSpecialization } from './clinic-specializations/clinic-specialization.entity';
import { DiseaseReport } from './disease-reports/disease-report.entity';
import { Exam } from './exams/exam.entity';
import { Specialization } from './specializations/specialization.entity';
import { Symptom } from './symptoms/symptom.entity';
import { SymptomReport } from './symptom-reports/symptom-report.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt-auth.strategy';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { Permission } from './permission/permission.entity';
import { UserPermission } from './user-permissions/user_permission.entity';
import { UserPermissionService } from './user-permissions/user_permission.service';
import { PermissionService } from './permission/permission.service';
import { UsersModule } from './user/user.module';
import { PermissionsModule } from './permission/permission.module';
import { UserPermissionsModule } from './user-permissions/user_permissions.module';
import { ClientController } from './clients/client.controller';
import { ClientService } from './clients/client.service';
import { ClientModule } from './clients/client.module';
import { DiseaseController } from './diseases/disease.controller';
import { DiseaseService } from './diseases/disease.service';
import { DiseaseModule } from './diseases/disease.module';
import { ClinicModule } from './clinics/clinic.module';
import { ClinicController } from './clinics/clinic.controller';
import { ClinicService } from './clinics/clinic.service';

@Module({
  imports: [
    
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',  // Tipo de banco de dados mysql
      host: process.env.DATABASE_HOST,  // Host local da conexão mysql
      port: parseInt(process.env.DATABASE_PORT),  // Porta MySQL
      username: process.env.DATABASE_USERNAME,  // Usuário
      password: process.env.DATABASE_PASSWORD,  // Senha
      database: process.env.DATABASE_NAME,  // Banco de dados
      entities: [Client, ClinicSpecialization, Clinic, DiseaseReport, Disease, Exam, Specialization, SymptomReport, Symptom, User, Permission, UserPermission],  // Entidades
    }),  
    UsersModule,
    PermissionsModule,
    UserPermissionsModule,
    ClientModule,
    ClinicModule,
    DiseaseModule
    
  ],
  controllers: [AppController, AuthController, ClientController, ClinicController, DiseaseController],
  providers: [AppService, AuthService, JwtService, JwtStrategy, ConfigService, UserService, UserPermissionService, PermissionService, ClientService, DiseaseService, ClinicService],
})
export class AppModule {}
