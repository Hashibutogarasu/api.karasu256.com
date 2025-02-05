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
import { getSchema } from './characters.dto';

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
}
