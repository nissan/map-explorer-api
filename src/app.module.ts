import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxiTripModule } from './taxi-trip/taxi-trip.module';
import { FileModule } from './file/file.module';
import { MapModule } from './map/map.module';
import configuration from './config/configuration';

@Module({
  imports: [
    TaxiTripModule,
    ConfigModule.forRoot({
      isGlobal:true,
      load:[configuration]
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: process.env.DB_HOST, // database host
      port: parseInt(process.env.DB_PORT)|5432, // database host
      username: process.env.DB_USER, // username
      password: process.env.DB_PASSWORD, // user password
      database: process.env.DB_DATABASE_NAME, // name of our database,
      autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
      synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
    }),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: 'uploads/',
      })}),
    FileModule,
    MapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
