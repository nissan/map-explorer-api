import { NestFactory } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'))||4001;
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform: true,
    transformOptions: {
      enableImplicitConversion:true
    }
  }));
  const options = new DocumentBuilder()
    .setTitle('Map Explorer')
    .setDescription('The Map Explorer API')
    .setVersion('0.1')
    .addTag('maps')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
