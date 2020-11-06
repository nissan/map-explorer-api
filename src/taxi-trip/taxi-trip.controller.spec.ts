import { Test, TestingModule } from '@nestjs/testing';
import { TaxiTripController } from './taxi-trip.controller';

describe('TaxiTripController', () => {
  let controller: TaxiTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxiTripController],
    }).compile();

    controller = module.get<TaxiTripController>(TaxiTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
