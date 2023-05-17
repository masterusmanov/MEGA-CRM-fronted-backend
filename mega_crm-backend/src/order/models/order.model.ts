import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Contact } from "../../contact/models/contact.model";
import { City } from "../../cities/models/city.model";
import { Staff } from "../../staff/models/staff.model";
import { OrderDelivery } from "../../order_delivery/models/order_delivery.model";
import { Product } from "../../product/models/product.model";


interface OrderCreationAttrs{
    product_id: number;
    full_name: string;
    adress: string;
    target: string;
    status: string;
    contact_id: number;
    city_id: number;
    description: string;
    staff_id: number;
};

@Table({tableName: 'order'})
export class Order extends Model<Order, OrderCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER
    })
    product_id: number;

    @Column({
        type: DataType.STRING
    })
    full_name: string;

    @Column({
        type: DataType.STRING
    })
    address: string;

    @Column({
        type: DataType.STRING
    })
    target: string;

    @Column({
        type: DataType.STRING
    })
    status: string;

    @ForeignKey(() => Contact)
    @Column({
        type: DataType.INTEGER
    })
    contact_id: number;

    @ForeignKey(() => City)
    @Column({
        type: DataType.INTEGER
    })
    city_id: number;
    
    @Column({
        type: DataType.STRING
    })
    description: string;

    @ForeignKey(() => Staff)
    @Column({
        type: DataType.INTEGER
    })
    staff_id: number;

    @HasMany(() => OrderDelivery)
    orderDelivery: OrderDelivery

    @BelongsTo(() => Staff)
    staff: Staff;

    @BelongsTo(() => City)
    city: City;

    @BelongsTo(() => Product)
    product: Product;

    @BelongsTo(() => Contact)
    contact: Contact;
}
