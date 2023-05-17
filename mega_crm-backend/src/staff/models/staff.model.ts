import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Contact } from "../../contact/models/contact.model";
import { Order } from "../../order/models/order.model";
import { Product } from "../../product/models/product.model";
import { OrderDelivery } from "../../order_delivery/models/order_delivery.model";

interface StaffCreationAttrs{
    full_name: string;
    phone_number: string;
    card: string;
    login: string;
    hashed_password: string;
    is_active: boolean;
    role: string;
    hashed_token: string;
};

@Table({tableName: 'staff'})
export class Staff extends Model<Staff, StaffCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    full_name: string;

    @Column({
        type: DataType.STRING
    })
    phone_number: string;

    @Column({
        type: DataType.STRING
    })
    card: string;

    @Column({
        type: DataType.STRING
    })
    login: string;

    @Column({
        type: DataType.STRING
    })
    hashed_password: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    is_active: boolean;

    @Column({
        type: DataType.STRING
    })
    role: string;

    @Column({
        type: DataType.STRING
    })
    hashed_token: string;

    @HasMany(() => Contact)
    contact: Contact;

    @HasMany(() => Order)
    order: Order;

    @HasMany(() => Product)
    product: Product;

    @HasMany(() => OrderDelivery)
    orderDelivery: OrderDelivery;
};