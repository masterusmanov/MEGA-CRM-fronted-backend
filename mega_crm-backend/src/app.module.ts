import { Module } from '@nestjs/common';
import { StaffModule } from './staff/staff.module';
import { RegionsModule } from './regions/regions.module';
import { CitiesModule } from './cities/cities.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderDeliveryModule } from './order_delivery/order_delivery.module';
import { ContactModule } from './contact/contact.module';
import { OrderModule } from './order/order.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { Staff } from './staff/models/staff.model';
import { Order } from './order/models/order.model';
import { Region } from './regions/models/region.model';
import { City } from './cities/models/city.model';
import { Category } from './category/models/category.model';
import { Product } from './product/models/product.model';
import { OrderDelivery } from './order_delivery/models/order_delivery.model';
import { Contact } from './contact/models/contact.model';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Staff, Order, Region, City, Category, Product, OrderDelivery, Contact],
      autoLoadModels: true,
      logging: false,
    }),
    StaffModule, RegionsModule, CitiesModule, CategoryModule, ProductModule, OrderDeliveryModule, ContactModule, OrderModule, JwtModule],
  providers: [],
  exports: [JwtModule]
})
export class AppModule {}
