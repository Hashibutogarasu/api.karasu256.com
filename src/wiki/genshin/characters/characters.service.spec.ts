import { Test, TestingModule } from '@nestjs/testing';
import { CharactersService } from './characters.service';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CharactersService', () => {
  let service: CharactersService;
  let mockRepository: Repository<GICharacter>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CharactersService,
          useFactory: () => ({
            create: jest.fn((dto) => dto),
            get: jest.fn((params) => params),
            import: jest.fn((params) => params),
          }),
        },
        {
          provide: getRepositoryToken(GICharacter),
          useClass: Repository
        }
      ],
    }).compile();

    mockRepository = module.get<Repository<GICharacter>>(getRepositoryToken(GICharacter));
    jest.spyOn(mockRepository, 'findOne').mockImplementation(jest.fn());

    service = module.get<CharactersService>(CharactersService);
  });

  it('create a character', async () => {
    const character = await service.create({
      name: 'Test GICharacter',
      description: 'Test Description',
      element: 'Test Element',
      icon_url: 'https://example.com/icon.png',
      header_img_url: 'https://example.com/header.png',
      rarity: 5,
    });

    const { ...rest } = character;

    expect(await service.get({ ...rest })).toEqual(rest);
  });

  it('import a character from hoyolab', async () => {
    const data = await fetch("https://sg-wiki-api-static.hoyolab.com/hoyowiki/genshin/wapi/entry_page?entry_page_id=20", {
      "credentials": "omit",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "ja,en-US;q=0.7,en;q=0.3",
        "x-rpc-language": "ja-jp",
        "x-rpc-wiki_app": "genshin",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site"
      },
      "referrer": "https://wiki.hoyolab.com/",
      "method": "GET",
      "mode": "cors"
    });

    const json = (await data.json()).data.page;

    const character = await service.import({
      ...json,
    });

    const { ...rest } = character;

    expect(await service.get({ ...rest })).toEqual(rest);
  });
});
