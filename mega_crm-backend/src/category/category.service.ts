import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './models/category.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryRepo: typeof Category){}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepo.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoryRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return await this.categoryRepo.findOne({where: {id}});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepo.update(updateCategoryDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.categoryRepo.destroy({where: {id}});
  }
}
