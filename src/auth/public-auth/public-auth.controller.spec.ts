import { Test, TestingModule } from '@nestjs/testing';
import { PublicAuthController } from './public-auth.controller';

describe('PublicAuthController', () => {
  let controller: PublicAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicAuthController],
    }).compile();

    controller = module.get<PublicAuthController>(PublicAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
