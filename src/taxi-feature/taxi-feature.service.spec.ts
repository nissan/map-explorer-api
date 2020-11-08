import { Test, TestingModule } from '@nestjs/testing';
import { TaxiFeatureService } from './taxi-feature.service';

describe('TaxiFeatureService', () => {
  let service: TaxiFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxiFeatureService],
    }).compile();

    service = module.get<TaxiFeatureService>(TaxiFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
