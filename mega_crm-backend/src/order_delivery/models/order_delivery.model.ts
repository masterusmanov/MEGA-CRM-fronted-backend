import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Staff } from "../../staff/models/staff.model";
import { Order } from "../../order/models/order.model";


interface OrderDeliveryCreationAttrs{
    staff_id: number;
    order_id: number;
    description: string;
};

@Table({tableName: 'order_delivery'})
export class OrderDelivery extends Model<OrderDelivery, OrderDeliveryCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Staff)
    @Column({
        type: DataType.INTEGER
    })
    staff_id: number;

    @ForeignKey(() => Order)
    @Column({
        type: DataType.INTEGER
    })
    order_id: number;
    
    @Column({
        type: DataType.STRING
    })
    description: string;
   
    @BelongsTo(() => Staff)
    staff: Staff;

    @BelongsTo(() => Order)
    order: Order;
}
