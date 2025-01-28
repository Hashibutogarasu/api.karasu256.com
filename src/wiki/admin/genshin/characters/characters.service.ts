import { Character } from '@/entities/genshin/wiki/character.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterDto, createCharacterSchema, DeleteCharacterDto, deleteCharacterSchema, fileterValues, GetCharacterDto, GetCharacterParamsDto, getCharacterParamsSchema, getCharacterSchema, ImportCharacterDto, UpdateCharacterDto, updateCharacterSchema } from './characters.dto';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { Country } from '@/entities/genshin/wiki/countries.entity';

@Injectable()
export class CharactersService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Character)
    private readonly charactersService: Repository<Character>,

    @InjectRepository(Country)
    private readonly countriesService: Repository<Country>,

    @InjectRepository(ArtifactSets)
    private readonly artifactSetsService: Repository<ArtifactSets>,

    @InjectRepository(Weapon)
    private readonly weaponsService: Repository<Weapon>
  ) { }

  async get(dto: GetCharacterDto): Promise<Character[]> {
    const parsed = getCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, country, weapon, ...ref } = parsed.data;
    return await this.charactersService.find({
      where: {
        ...ref,
        country: country && {
          name: country,
        },
        weapon: weapon && {
          name: weapon,
        },
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
      relations: {
        country: true,
        weapon: true,
      }
    });
  }

  async getOne(params: GetCharacterParamsDto): Promise<Character> {
    const parsed = getCharacterParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { ...ref } = parsed.data;

    return await this.charactersService.findOne({
      where: {
        ...ref,
      },
      relations: {
        country: true,
      }
    });
  }

  async create(dto: CreateCharacterDto): Promise<Character> {
    const parsed = createCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { country, weapon, artifact_set, ...ref } = parsed.data;

    const character = Character.create({
      ...ref,
    });

    const countryExists = await this.countriesService.findOne({
      where: {
        name: country,
      },
    });

    if (!countryExists) {
      const newCountry = await this.countriesService.save({
        name: country,
      });

      character.country = newCountry;
    }

    const weaponExists = await this.charactersService.findOne({
      where: {
        name: weapon,
      },
    });

    if (!weaponExists) {
      const newWeapon = await this.weaponsService.save({
        name: weapon,
      });

      character.weapon = newWeapon;
    }

    const artifactSets: ArtifactSets[] = [];

    for (const artifactSet of artifact_set) {
      const artifactSetExists = await this.artifactSetsService.findOne({
        where: {
          name: artifactSet,
        },
      });

      if (!artifactSetExists) {
        const newArtifactSet = await this.artifactSetsService.save({
          name: artifactSet,
        });

        artifactSets.push(newArtifactSet);
      }
      else {
        artifactSets.push(artifactSetExists);
      }
    }

    character.artifact_set = artifactSets;

    return await this.charactersService.save({
      ...character
    });
  }

  async update(dto: UpdateCharacterDto): Promise<void> {
    const parsed = updateCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { country, ...ref } = parsed.data;

    const countryExists = await this.charactersService.findOne({
      where: {
        name: country,
      },
    });

    if (!countryExists) {
      throw new NotFoundException('Country not found');
    }

    const character = await this.charactersService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    await this.charactersService.update(dto.id, {
      ...ref,
      country: countryExists,
    });
  }

  async delete(dto: DeleteCharacterDto): Promise<void> {
    const parsed = deleteCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { ...ref } = parsed.data;

    const character = await this.charactersService.findOne({
      where: {
        ...ref,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    await this.charactersService.delete(dto.id);
  }

  async import(dto: ImportCharacterDto): Promise<Character> {
    const character = Character.create({
      name: dto.name,
      description: dto.desc,
      icon_url: dto.icon_url,
      header_img_url: dto.header_img_url,
      version: '1.0',
    });

    const success = fileterValues.safeParse(dto.filter_values).success;

    if (success) {
      const character_vision = dto.filter_values.character_vision?.values[0];
      const character_weapon = dto.filter_values.character_weapon?.values[0];
      const character_region = dto.filter_values.character_region?.values[0];
      const character_rarity = dto.filter_values.character_rarity?.values[0];
      const character_property = dto.filter_values.character_property?.values[0];

      if (character_vision) {
        character.element = character_vision;
      }

      if (character_weapon) {
        character.weapon_type = character_weapon;
      }

      if (character_rarity) {
        character.rarity = parseInt(character_rarity.replace('★', ''));
      }

      if (character_property) {
        character.property = character_property;
      }

      if (character_region) {
        character.country = await this.countriesService.findOne({
          where: {
            name: character_region,
          },
        }) || await this.countriesService.save({
          name: character_region,
        });
      }
    }

    const characterExists = await this.charactersService.findOne({
      where: {
        name: dto.name,
      },
    });

    if (characterExists) {
      return characterExists;
    }

    return await this.charactersService.save(character);
  }
}
