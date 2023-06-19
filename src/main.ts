import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const configService = app.get(ConfigService);

  app.enableCors(CORS);

  const config = new DocumentBuilder()
    .setTitle('API REST clases-estudiantes')
    .setDescription('API REST para el manejo de estudiantes y clases')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.use(express.json());

  await app.listen(configService.get('PORT'));

  console.log(`Application running on: ${await app.getUrl()}`);
}
bootstrap();
