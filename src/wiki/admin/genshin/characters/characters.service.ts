import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { Country } from '@/entities/wiki/genshin/countries.entity';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, DeleteDto, deleteSchema, UpdateDto } from '@/utils/dto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, fileterValues, ImportCharacterDto, updateSchema } from './characters.dto';
import { Gallery } from '@/entities/common/galleries.entity';

@Injectable()
export class CharactersService implements IBaseAdminCaS<GICharacter> {
  constructor(
    @InjectRepository(GICharacter)
    private readonly charactersService: Repository<GICharacter>,

    @InjectRepository(Country)
    private readonly countriesService: Repository<Country>,

    @InjectRepository(ArtifactSets)
    private readonly artifactSetsService: Repository<ArtifactSets>,

    @InjectRepository(Weapon)
    private readonly weaponsRepository: Repository<Weapon>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,

    @InjectRepository(Gallery)
    private readonly galleriesService: Repository<Gallery>,
  ) { }

  async create(dto: CreateDto<GICharacter>): Promise<GICharacter> {
    const parsed = createSchema.safeParse(dto);

    if (parsed.success === false) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { region, weapon: { version, ...weapon }, artifact_set, galleries, ...ref } = parsed.data;

    const dbRegion = await this.countriesService.findOne({
      where: {
        ...region,
      },
    }) ?? await this.countriesService.save({
      ...region,
    });

    const dbWeapon = await this.weaponsRepository.findOne({
      where: {
        ...weapon,
      },
    }) ?? await this.weaponsRepository.save({
      ...weapon,
    });

    const dbArtifactSets = await Promise.all(Array.from(artifact_set).map(async (artifact) => {
      return await this.artifactSetsService.findOne({
        where: {
          ...artifact,
        },
      }) ?? await this.artifactSetsService.save({
        ...artifact,
      });
    }));

    const dbGalleries = await Promise.all(Array.from(galleries).map(async (gallery) => {
      return await this.galleriesService.findOne({
        where: {
          ...gallery,
        },
      });
    }));

    const dbVersion = await this.versionRepository.findOne({
      where: {
        ...parsed.data.version,
      },
    });

    return await this.charactersService.save({
      ...ref,
      region: dbRegion,
      weapon: dbWeapon,
      artifact_set: dbArtifactSets,
      galleries: dbGalleries,
      version: dbVersion,
    });
  }

  async update(dto: UpdateDto<GICharacter>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

    if (parsed.success === false) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { id, region, weapon: { version, ...weapon }, artifact_set, galleries, ...ref } = parsed.data;

    const dbRegion = await this.countriesService.findOne({
      where: {
        ...region,
      },
    }) ?? await this.countriesService.save({
      ...region,
    });

    const dbWeapon = await this.weaponsRepository.findOne({
      where: {
        ...weapon,
      },
    }) ?? await this.weaponsRepository.save({
      ...weapon,
    });

    const dbArtifactSets = await Promise.all(Array.from(artifact_set).map(async (artifact) => {
      return await this.artifactSetsService.findOne({
        where: {
          ...artifact,
        },
      }) ?? await this.artifactSetsService.save({
        ...artifact,
      });
    }));

    const dbGalleries = await Promise.all(Array.from(galleries).map(async (gallery) => {
      return await this.galleriesService.findOne({
        where: {
          ...gallery,
        },
      });
    }));

    const dbVersion = await this.versionRepository.findOne({
      where: {
        ...parsed.data.version,
      },
    });

    const character = await this.charactersService.findOne({
      where: {
        id,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    await this.charactersService.update(id, {
      ...ref,
      region: dbRegion,
      weapon: dbWeapon,
      artifact_set: dbArtifactSets,
      galleries: dbGalleries,
      version: dbVersion,
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const character = await this.charactersService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    await this.charactersService.delete(dto.id);
  }

  async import(dto: ImportCharacterDto): Promise<GICharacter> {
    const version = await this.versionRepository.findOne({
      where: {
        version_string: dto.version,
      },
    }) || await this.versionRepository.save({
      version_string: dto.version,
      released: true,
    });

    const character = GICharacter.create({
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
        character.region = await this.countriesService.findOne({
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
