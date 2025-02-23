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

  async getAll(): Promise<GICharacter[]> {
    return await this.charactersService.find({
      order: {
        name: "ASC",
        version: {
          createdAt: "DESC"
        }
      }
    });
  }

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
      take: take ?? 10,
      skip: skip ?? 0,
      relations: {
        galleries: true,
        version: true,
        region: true,
        weapon: true,
      },
      order: {
        name: "ASC",
        version: {
          createdAt: "DESC"
        }
      }
    });
  }

  async getOne(query: GetOneDto<GICharacter>): Promise<GICharacter> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { region, weapon, version, artifact_set, galleries, ...ref } = query;

    return await this.charactersService.findOne({
      where: {
        ...ref,
        region: region,
        weapon: weapon,
        version: version,
        galleries: Array.from(galleries).map((gallery) => ({ id: gallery.id })),
        artifact_set: Array.from(artifact_set).map((artifact) => ({ id: artifact.id }))
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
