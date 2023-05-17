import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Product } from "../../product/models/product.model";


interface CategoryCreationAttrs{
    name: string;
};

@Table({tableName: 'category'})
export class Category extends Model<Category, CategoryCreationAttrs> {
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

    // @HasMany(() => Product)
    // product: Product;
};