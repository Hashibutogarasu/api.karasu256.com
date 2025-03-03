import { Test, TestingModule } from "@nestjs/testing";
import { GameCharactersController } from "./game_characters.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gallery } from "@/entities/common/galleries.entity";
import { GameCharacter } from "@/entities/wiki/game_character";
import { GameCharactersService } from "./game_characters.service";
import { ConfigModule } from "@nestjs/config";
import { validate } from "@/env-validator";
import { TypeormConnectionModule } from "@/typeorm-connection/typeorm-connection.module";
import { CreateCharacterDto, UpdateCharacterDto } from "@/wiki/wiki.dto";

describe("GameCharactersController", () => {
  let controller: GameCharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `.env.${process.env.NODE_ENV}`,
          validate,
        }),
        TypeOrmModule.forFeature([Gallery, GameCharacter]),
        TypeormConnectionModule,
      ],
      controllers: [GameCharactersController],
      providers: [GameCharactersService]
    }).compile();

    controller = module.get<GameCharactersController>(GameCharactersController);
  });

  it("should create item of genshin_impact", async () => {
    const character: CreateCharacterDto = {
      name: "Test character",
      rarity: 5,
      game: "genshin_impact",
      description: "Test description",
      header_image: "https://example.com/image.jpg",
      cv: [{
        name: "Test CV",
        language: "ja",
      }],
      images: [],
      tags: [],
      element: "anemo",
      weaponType: "sword",
      artifactSets: {
        twoPiecesEffect: "Test effect",
        fourPiecesEffect: "Test effect",
        icons: [],
      },
      constellation: {
        name: "Test constellation",
        effects: [{
          name: "Test effect",
          description: "Test description",
          icon: "https://example.com/image.jpg",
        }],
      },
      talents: [{
        name: "Test talent",
        description: "Test description",
        image: "https://example.com/image.jpg",
      }],
    };

    const createdCharacter = await controller.create(character);

    console.log(`[${character.game}] Character ${character.name} created with id ${createdCharacter.id}`);

    expect(createdCharacter).toBeDefined();
  });

  it("should update item of genshin_impact", async () => {
    const createCharacter: CreateCharacterDto = {
      name: "Test character",
      rarity: 5,
      game: "genshin_impact",
      description: "Test description",
      header_image: "https://example.com/image.jpg",
      cv: [{
        name: "Test CV",
        language: "ja",
      }],
      images: [],
      tags: [],
      element: "anemo",
      weaponType: "sword",
      artifactSets: {
        twoPiecesEffect: "Test effect",
        fourPiecesEffect: "Test effect",
        icons: [],
      },
      constellation: {
        name: "Test constellation",
        effects: [{
          name: "Test effect",
          description: "Test description",
          icon: "https://example.com/image.jpg",
        }],
      },
      talents: [{
        name: "Test talent",
        description: "Test description",
        image: "https://example.com/image.jpg",
      }],
    };

    const { name, ...createdCharacter } = await controller.create(createCharacter);

    console.log(`[${createdCharacter.game}] Character ${name} created with id ${createdCharacter.id}`);

    const updatecharacter: UpdateCharacterDto = {
      id: createdCharacter.id,
      name: "Updated character",
      ...createdCharacter,
    };

    await controller.update(updatecharacter);

    const updatedCharacter = await controller.findOne(createdCharacter.id);

    console.log(`[${createdCharacter.game}] Character ${updatedCharacter.name} with id ${updatedCharacter.id} updated`);

    expect(updatedCharacter).toBeDefined();
  });

  it("should create item of honkai_impact_3rd", async () => {
    const character: CreateCharacterDto = {
      name: "Test character",
      rarity: 5,
      game: "honkai_impact_3rd",
      description: "Test description",
      header_image: "https://example.com/image.jpg",
      cv: [{
        name: "Test CV",
        language: "ja",
      }],
      images: [],
      tags: [],
      type: "biologic",
      stigmatas: [{
        name: "Test stigmata",
        rarity: 5,
        twoPiecesEffect: "Test effect",
        threePiecesEffect: "Test effect",
        type: "T",
      }],
      skills: [{
        type: "Test type",
        name: "Test skill",
        description: "Test description",
        icon: "https://example.com/image.jpg",
        images: [
          "https://example.com/image.jpg"
        ]
      }],
    };

    const createdCharacter = await controller.create(character);

    console.log(`[${character.game}] Character ${character.name} created with id ${createdCharacter.id}`);

    expect(createdCharacter).toBeDefined();
  });

  it("should update item of honkai_impact_3rd", async () => {
    const character: CreateCharacterDto = {
      name: "Test character",
      rarity: 5,
      game: "honkai_impact_3rd",
      description: "Test description",
      header_image: "https://example.com/image.jpg",
      cv: [{
        name: "Test CV",
        language: "ja",
      }],
      images: [],
      tags: [],
      type: "biologic",
      stigmatas: [{
        name: "Test stigmata",
        rarity: 5,
        twoPiecesEffect: "Test effect",
        threePiecesEffect: "Test effect",
        type: "T",
      }],
      skills: [{
        type: "Test type",
        name: "Test skill",
        description: "Test description",
        icon: "https://example.com/image.jpg",
        images: [
          "https://example.com/image.jpg"
        ]
      }],
    };

    const { name, ...createdCharacter } = await controller.create(character);

    console.log(`[${character.game}] Character ${character.name} created with id ${createdCharacter.id}`);

    const updateCharacter: UpdateCharacterDto = {
      id: createdCharacter.id,
      name: "Updated character",
      ...createdCharacter,
    };

    await controller.update(updateCharacter);

    const updatedCharacter = await controller.findOne(createdCharacter.id);

    console.log(`[${character.game}] Character ${updatedCharacter.name} with id ${updatedCharacter.id} updated`);

    expect(updatedCharacter).toBeDefined();
  });

  it("should create item of honkai_star_rail", async () => {
    const character: CreateCharacterDto = {
      name: "Test character",
      rarity: 5,
      game: "honkai_star_rail",
      description: "Test description",
      header_image: "https://example.com/image.jpg",
      cv: [{
        name: "Test CV",
        language: "ja",
      }],
      images: [],
      tags: [],
      relics: [
        {
          name: "Test relic",
          description: "Test description",
          icon: "https://example.com/image.jpg",
        }
      ],
      splashArt: "https://example.com/image.jpg",
      idleAnimations: [
        "https://example.com/image.jpg"
      ],
      eidolons: [
        {
          name: "Test eidolon",
          description: "Test description",
          image: "https://example.com/image.jpg",
        }
      ],
      traces: [
        {
          type: "basicAtk",
          name: "Test trace",
          description: "Test description",
          image: "https://example.com/image.jpg",
        }
      ]
    };

    const createdCharacter = await controller.create(character);

    console.log(`[${character.game}] Character ${character.name} created with id ${createdCharacter.id}`);

    expect(createdCharacter).toBeDefined();
  });

  it("should update item of honkai_star_rail", async () => {
    const character: CreateCharacterDto = {
      name: "Test character",
      rarity: 5,
      game: "honkai_star_rail",
      description: "Test description",
      header_image: "https://example.com/image.jpg",
      cv: [{
        name: "Test CV",
        language: "ja",
      }],
      images: [],
      tags: [],
      relics: [
        {
          name: "Test relic",
          description: "Test description",
          icon: "https://example.com/image.jpg",
        }
      ],
      splashArt: "https://example.com/image.jpg",
      idleAnimations: [
        "https://example.com/image.jpg"
      ],
      eidolons: [
        {
          name: "Test eidolon",
          description: "Test description",
          image: "https://example.com/image.jpg",
        }
      ],
      traces: [
        {
          type: "basicAtk",
          name: "Test trace",
          description: "Test description",
          image: "https://example.com/image.jpg",
        }
      ]
    };

    const { name, ...createdCharacter } = await controller.create(character);

    console.log(`[${character.game}] Character ${character.name} created with id ${createdCharacter.id}`);

    const updateCharacter: UpdateCharacterDto = {
      id: createdCharacter.id,
      name: "Updated character",
      ...createdCharacter,
    };

    await controller.update(updateCharacter);

    const updatedCharacter = await controller.findOne(createdCharacter.id);

    console.log(`[${character.game}] Character ${updatedCharacter.name} with id ${updatedCharacter.id} updated`);

    expect(updatedCharacter).toBeDefined();
  });

  afterEach(async () => {
    const characters = await controller.findAll();

    for (const character of characters) {
      console.log(`[${character.game}] Deleting character ${character.name} with id ${character.id}`);
      await controller.delete({ id: character.id });
      console.log(`[${character.game}] Character ${character.name} with id ${character.id} deleted`);
    }
  });
});
