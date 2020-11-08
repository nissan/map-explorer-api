import { Module } from '@nestjs/common';
import { TaxiFeatureService } from './taxi-feature.service';

@Module({
  providers: [TaxiFeatureService]
})
export class TaxiFeatureModule {}
