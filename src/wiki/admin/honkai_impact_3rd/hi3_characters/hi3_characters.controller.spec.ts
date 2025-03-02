import { Test, TestingModule } from '@nestjs/testing';
import { Hi3CharactersController } from './hi3_characters.controller';

describe('Hi3CharactersController', () => {
  let controller: Hi3CharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Hi3CharactersController],
    }).compile();

    controller = module.get<Hi3CharactersController>(Hi3CharactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
