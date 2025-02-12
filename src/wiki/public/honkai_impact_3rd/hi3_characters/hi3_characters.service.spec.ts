import { Test, TestingModule } from '@nestjs/testing';
import { Hi3CharactersService } from './hi3_characters.service';

describe('Hi3CharactersService', () => {
  let service: Hi3CharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hi3CharactersService],
    }).compile();

    service = module.get<Hi3CharactersService>(Hi3CharactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
