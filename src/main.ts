import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  //   .setTitle('Jobbar API')
  //   .setDescription(
  //     'The Nest.js API backend for Jobbar, the AI job applying service.',
  //   )
  //   .setVersion('0.1')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
