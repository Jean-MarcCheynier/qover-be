import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder/seeder.module';
import { SeederService } from './seeder/seeder.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeederModule);

  const seederService = await appContext.resolve<SeederService>(SeederService);
  setTimeout(() => {
    seederService
      .seed()
      .then(() => {
        console.debug('Seeding complete!');
      })
      .catch((error) => {
        console.error('Seeding failed!');
        throw error;
      })
      .finally(() => appContext.close());
  }, 3000);
}

bootstrap();
