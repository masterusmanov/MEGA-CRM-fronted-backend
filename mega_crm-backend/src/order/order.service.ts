import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderRepo: typeof Order){}

  create(createOrderDto: CreateOrderDto) {
    return this.orderRepo.create(createOrderDto);
  }

  async findAll() {
    return await this.orderRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.orderRepo.findOne({where: {id}});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepo.update(updateOrderDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.orderRepo.destroy({where: {id}});
  }
}
