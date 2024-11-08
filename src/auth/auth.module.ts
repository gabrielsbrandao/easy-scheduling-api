// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt-auth.strategy';  // Importando a estratégia JWT

@Module({
  imports: [
    PassportModule,  // Passport deve estar incluído
    ConfigModule.forRoot(),  // Carregar variáveis de ambiente
    JwtModule.registerAsync({
      imports: [ConfigModule],  // Importando ConfigModule para usar variáveis de ambiente
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),  // Obtendo a chave secreta do .env
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],  // Injetando ConfigService
    }),
  ],
  providers: [AuthService, JwtStrategy],  // Certifique-se de registrar a estratégia aqui
  controllers: [AuthController],
})
export class AuthModule {}
