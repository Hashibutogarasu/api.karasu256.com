import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { Country } from '@/entities/wiki/genshin/countries.entity';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { CreateDto, DeleteDto, deleteSchema, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { createSchema, fileterValues, getSchema, ImportCharacterDto, updateSchema } from './characters.dto';

@Injectable()
export class CharactersService implements IBasePublicCaS<GICharacter> {
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
  ) { }

  async get(query: GetParamsDto<GICharacter, ["createdAt", "updatedAt"]>): Promise<GICharacter[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { region, version, galleries, artifact_set, weapon, take, skip, ...ref } = query;

    return await this.charactersService.find({
      where: {
        ...ref,
        region: region && {
          id: region.id
        },
        weapon: weapon && {
          id: weapon.id
        },
        version: version && {
          id: version.id
        },
        ...galleries,
        ...artifact_set
      },
      take: take,
      skip: skip,
      relations: {
        galleries: true,
        version: true,
        region: true,
        weapon: true,
      }
    });
  }

  async getOne(query: GetOneDto<GICharacter>): Promise<GICharacter> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { take, skip, region, weapon, version, ...ref } = parsed.data;

    return await this.charactersService.findOne({
      where: {
        ...ref,
        region: region && {
          name: region,
        },
        weapon: weapon && {
          name: weapon,
        },
        version: version && {
          version_string: version,
        },
      },
      relations: {
        galleries: true,
        version: true,
        region: true,
        weapon: true,
      }
    });
  }

  async create(dto: CreateDto<GICharacter>): Promise<GICharacter> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { region, weapon, artifact_set, version, ...ref } = parsed.data;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
      },
    });

    if (!versionExists) {
      throw new NotFoundException('このバージョンは存在しません');
    }

    const character = GICharacter.create({
      ...ref,
      version: versionExists,
    });

    const countryExists = await this.countriesService.findOne({
      where: {
        name: region,
      },
    });

    if (!countryExists) {
      const newCountry = await this.countriesService.save({
        name: region,
      });

      character.region = newCountry;
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

  async update(dto: UpdateDto<GICharacter>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { region, version, ...ref } = parsed.data;

    const characterExists = await this.charactersService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!characterExists) {
      throw new NotFoundException('GICharacter not found');
    }

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
      },
    });

    if (!versionExists) {
      throw new NotFoundException('このバージョンは存在しません');
    }

    await GICharacter.update({
      id: dto.id,
    }, {
      ...ref,
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
      throw new NotFoundException('GICharacter not found');
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
