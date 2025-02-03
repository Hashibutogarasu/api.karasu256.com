import { Character } from '@/entities/genshin/wiki/character.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { Country } from '@/entities/genshin/wiki/countries.entity';
import { VersionsEntity } from '@/entities/genshin/wiki/versions.entity';
import { CreateDto, DeleteDto, deleteSchema, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { createSchema, fileterValues, getSchema, ImportCharacterDto, updateSchema } from './characters.dto';

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
    private readonly weaponsRepository: Repository<Weapon>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async get({ ...query }: GetParamsDto<Character, ["createdAt", "updatedAt"]>): Promise<Character[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { query: { take, skip, country, version, ...ref } } = parsed.data;

    const weaponExists = await this.weaponsRepository.findOne({
      where: {
        name: parsed.data.query.weapon
      }
    })

    const countryExists = await this.countriesService.findOne({
      where: {
        name: country,
      },
    });

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
      },
    });

    return await this.charactersService.find({
      where: {
        ...ref,
        weapon: weaponExists,
        country: countryExists,
        version: versionExists,
      },
      take: take,
      skip: skip,
      relations: {
        country: true,
        weapon: true,
      }
    });
  }

  async getOne(query: GetOneDto<Character>): Promise<Character> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { take, skip, country, weapon, version, ...ref } = parsed.data.query;

    return await this.charactersService.findOne({
      where: {
        ...ref,
        country: country && {
          name: country,
        },
        weapon: weapon && {
          name: weapon,
        },
        version: version && {
          version_string: version,
        },
      },
      relations: {
        country: true,
        weapon: true,
      }
    });
  }

  async create(dto: CreateDto<Character>): Promise<Character> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { country, weapon, artifact_set, version, ...ref } = parsed.data;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
      },
    });

    if (!versionExists) {
      throw new NotFoundException('このバージョンは存在しません');
    }

    const character = Character.create({
      ...ref,
      version: versionExists,
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
      const newWeapon = await this.weaponsRepository.save({
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

  async update(dto: UpdateDto<Character>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { country, version, ...ref } = parsed.data;

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

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
      },
    });

    if (!versionExists) {
      throw new NotFoundException('このバージョンは存在しません');
    }

    await this.charactersService.update(dto.id, {
      ...ref,
      country: countryExists,
      version: versionExists,
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

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
    const version = await this.versionRepository.findOne({
      where: {
        version_string: dto.version,
      },
    }) || await this.versionRepository.save({
      version_string: dto.version,
      released: true,
    });

    const character = Character.create({
      name: dto.name,
      description: dto.desc,
      icon_url: dto.icon_url,
      header_img_url: dto.header_img_url,
      version,
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
