import { Test, TestingModule } from '@nestjs/testing';
import { MapDataController } from './map-data.controller';

describe('MapDataController', () => {
  let controller: MapDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapDataController],
    }).compile();

    controller = module.get<MapDataController>(MapDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
