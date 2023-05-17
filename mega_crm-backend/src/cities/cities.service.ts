import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './models/city.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class CitiesService {
  constructor(@InjectModel(City) private cityRepo: typeof City){}

  create(createCityDto: CreateCityDto) {
    return this.cityRepo.create(createCityDto);
  }

  async findAll() {
    return await this.cityRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.cityRepo.findOne({where: {id}});
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    return await this.cityRepo.update(updateCityDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.cityRepo.destroy({where: {id}});
  }
}
