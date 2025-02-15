import { HI3Characters } from '@/entities/wiki/hi3/hi3_characters.entity';
import { HI3SkillsEntity } from '@/entities/wiki/hi3/hi3_skills.entity';
import { HI3WeaponsEntity } from '@/entities/wiki/hi3/hi3_weapons.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Hi3CharactersService implements IBaseAdminCaS<HI3Characters> {
  constructor(
    @InjectRepository(HI3Characters)
    private readonly hi3CharactersRepository: Repository<HI3Characters>,

    @InjectRepository(HI3SkillsEntity)
    private readonly hi3SkillsRepository: Repository<HI3SkillsEntity>,

    @InjectRepository(HI3WeaponsEntity)
    private readonly hi3WeaponsRepository: Repository<HI3WeaponsEntity>,
  ) { }

  private async createWeapon(weapon: HI3WeaponsEntity) {
    const newWeapon = this.hi3WeaponsRepository.create({
      ...weapon
    });

    return await this.hi3WeaponsRepository.save(newWeapon);
  }

  async create(dto: CreateDto<HI3Characters>): Promise<HI3Characters> {
    const { weapons, skills, stigmatas, ...ref } = dto;

    const character = this.hi3CharactersRepository.create({
      ...ref
    });

    const newSkils = skills ? await Promise.all(Array.from(skills).map(async skill => {
      const { characters, ...ref } = skill;
      return await this.hi3SkillsRepository.save({
        ...ref
      });
    })) : [];

    const newWeapons = weapons ? await Promise.all(Array.from(weapons).map(async weapon => {
      return await this.createWeapon(weapon as HI3WeaponsEntity);
    })) : [];

    const newStigmatas = stigmatas ? await Promise.all(Array.from(stigmatas).map(async stigmata => {
      const { characters, ...ref } = stigmata;
      return await this.hi3SkillsRepository.save({
        ...ref
      });
    })) : [];

    return await this.hi3CharactersRepository.save({
      ...character,
      skills: newSkils,
      weapons: newWeapons,
      stigmatas: newStigmatas,
    });
  }

  async update(dto: UpdateDto<HI3Characters>): Promise<void> {
    const { id, weapons, skills, stigmatas, ...ref } = dto;

    const updatedWeapons = weapons ? await Promise.all(Array.from(weapons).map(async weapon => {
      const { id, characters, ...ref } = weapon;
      await this.hi3WeaponsRepository.update(id, {
        ...ref
      });

      return await this.hi3WeaponsRepository.findOneBy({
        id: weapon.id
      });
    })) : [];

    const updatedSkills = skills ? await Promise.all(Array.from(skills).map(async skill => {
      const { characters, ...ref } = skill;
      await this.hi3SkillsRepository.update(skill.id, {
        ...ref
      });

      return await this.hi3SkillsRepository.findOneBy({
        id: skill.id
      });
    })) : [];

    const updatedSigmatas = stigmatas ? await Promise.all(Array.from(stigmatas).map(async sigmata => {
      const { characters, ...ref } = sigmata;
      await this.hi3SkillsRepository.update(sigmata.id, {
        ...ref
      });

      return await this.hi3SkillsRepository.findOneBy({
        id: sigmata.id
      });
    })) : [];

    (await this.hi3CharactersRepository.findOne({
      where: {
        id
      },
      relations: {
        skills: true,
        weapons: true,
        stigmatas: true,
      }
    }).then(async character => {
      await this.hi3CharactersRepository.update(id, {
        ...ref,
      });
    }))

  }
  async delete(dto: DeleteDto): Promise<void> {
    await this.hi3CharactersRepository.delete(dto.id);
  }
}
