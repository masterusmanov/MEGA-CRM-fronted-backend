import { Module } from '@nestjs/common';
import { OrderDeliveryService } from './order_delivery.service';
import { OrderDeliveryController } from './order_delivery.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderDelivery } from './models/order_delivery.model';

@Module({
  imports: [SequelizeModule.forFeature([OrderDelivery])],
  controllers: [OrderDeliveryController],
  providers: [OrderDeliveryService]
})
export class OrderDeliveryModule {}
