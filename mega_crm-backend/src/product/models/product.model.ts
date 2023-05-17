import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Category } from "../../category/models/category.model";
import { Staff } from "../../staff/models/staff.model";

interface ProductCreationAttrs{
    name: string;
    image: string;
    price: string;
    category_id: number;
    staff_id: number;
    description: string;
};

@Table({tableName: 'cities'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @Column({
        type: DataType.STRING
    })
    image: string;

    @Column({
        type: DataType.STRING
    })
    price: string;
    
    
    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER
    })
    category_id: number;

    @ForeignKey(() => Staff)
    @Column({
        type: DataType.INTEGER
    })
    staff_id: number;

    @Column({
        type: DataType.STRING
    })
    description: string;

    @BelongsTo(() => Category)
    category: Category;

    @BelongsTo(() => Staff)
    staff: Staff;
}
