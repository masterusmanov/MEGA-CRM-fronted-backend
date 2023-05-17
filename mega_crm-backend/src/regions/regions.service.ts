import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';


@Injectable()
export class RegionsService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region){}

  create(createRegionDto: CreateRegionDto) {
    return this.regionRepo.create(createRegionDto);
  }

  async findAll() {
    return await this.regionRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.regionRepo.findOne({where: {id}});
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return await this.regionRepo.update(updateRegionDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.regionRepo.findOne({where: {id}});
  }
}
