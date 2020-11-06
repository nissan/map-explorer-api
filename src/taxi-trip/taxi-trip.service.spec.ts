import { Test, TestingModule } from '@nestjs/testing';
import { TaxiTripService } from './taxi-trip.service';

describe('TaxiTripService', () => {
  let service: TaxiTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxiTripService],
    }).compile();

    service = module.get<TaxiTripService>(TaxiTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
