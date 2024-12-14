import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Aqui você especifica a URL do seu frontend Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept, Authorization', // Cabeçalhos permitidos
    credentials: true, // Permite o envio de cookies e autenticação
  });

  // Swagger API Docs
  const config = new DocumentBuilder()
    .setTitle('API de Exemplo')
    .setDescription('Descrição da API')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona a autenticação por Bearer token, se necessário
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000); // Inicializa a API na porta 3000
}
bootstrap();
