import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { customOptions } from './swagger/options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  /** Add swagger doc with nesjs/swagger */
  const config = new DocumentBuilder()
    .setTitle('Qover test OAS')
    .setDescription('Simple API')
    .setVersion('2.0')
    .addSecurity('bearerAuth', {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: '{{ JWT }}',
    })
    .addSecurityRequirements('bearerAuth', [])
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, customOptions);

  await app.listen(process.env.PORT);
}

bootstrap();
