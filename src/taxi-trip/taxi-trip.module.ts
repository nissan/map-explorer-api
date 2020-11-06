import { Module } from '@nestjs/common';
import { TaxiTripController } from './taxi-trip.controller';
import { TaxiTripService } from './taxi-trip.service';

@Module({
  controllers: [TaxiTripController],
  providers: [TaxiTripService]
})
export class TaxiTripModule {}
