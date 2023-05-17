import { Injectable } from '@nestjs/common';
import { CreateOrderDeliveryDto } from './dto/create-order_delivery.dto';
import { UpdateOrderDeliveryDto } from './dto/update-order_delivery.dto';
import { OrderDelivery } from './models/order_delivery.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class OrderDeliveryService {
  constructor(@InjectModel(OrderDelivery) private orderDeliveryRepo: typeof OrderDelivery){}

  create(createOrderDeliveryDto: CreateOrderDeliveryDto) {
    return this.orderDeliveryRepo.create(createOrderDeliveryDto);
  }

  async findAll() {
    return await this.orderDeliveryRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.orderDeliveryRepo.findOne({where: {id}});
  }

  async update(id: number, updateOrderDeliveryDto: UpdateOrderDeliveryDto) {
    return await this.orderDeliveryRepo.update(updateOrderDeliveryDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.orderDeliveryRepo.destroy({where: {id}});
  }
}
