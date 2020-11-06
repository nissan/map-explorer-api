import { Test, TestingModule } from '@nestjs/testing';
import { MapDataService } from './map-data.service';

describe('MapDataService', () => {
  let service: MapDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapDataService],
    }).compile();

    service = module.get<MapDataService>(MapDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
