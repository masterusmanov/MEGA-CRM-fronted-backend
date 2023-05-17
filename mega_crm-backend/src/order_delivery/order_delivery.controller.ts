import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderDeliveryService } from './order_delivery.service';
import { CreateOrderDeliveryDto } from './dto/create-order_delivery.dto';
import { UpdateOrderDeliveryDto } from './dto/update-order_delivery.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';


@ApiTags('Buyurtma yetkazib berish')
@Controller('order-delivery')
export class OrderDeliveryController {
  constructor(private readonly orderDeliveryService: OrderDeliveryService) {}

  @ApiOperation({summary: "Buyurtmalarni qo'shish"})
  @Post()
  create(@Body() createOrderDeliveryDto: CreateOrderDeliveryDto) {
    return this.orderDeliveryService.create(createOrderDeliveryDto);
  }

  @ApiOperation({summary: "Yetkazib beruvchilar barcha buyurtmalarni ko'rish"})
  @Get()
  findAll() {
    return this.orderDeliveryService.findAll();
  }

  @ApiOperation({summary: "ID bo'yicha Yetkazib beruvchi buyurtmani ko'rish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDeliveryService.findOne(+id);
  }

  @ApiOperation({summary: "ID bo'yicha Yetkazib beruvchi buyurtmani yangilash"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDeliveryDto: UpdateOrderDeliveryDto) {
    return this.orderDeliveryService.update(+id, updateOrderDeliveryDto);
  }

  @ApiOperation({summary: "ID bo'yicha Yetkazib beruvchi buyurtmani o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDeliveryService.remove(+id);
  }
}
