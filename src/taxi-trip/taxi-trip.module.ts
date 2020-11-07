import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxiTrip } from './entities/taxi-trip.entity';
import { TaxiTripController } from './taxi-trip.controller';
import { TaxiTripService } from './taxi-trip.service';

@Module({
  imports:[TypeOrmModule.forFeature([TaxiTrip])],
  controllers: [TaxiTripController],
  providers: [TaxiTripService]
})
export class TaxiTripModule {}
