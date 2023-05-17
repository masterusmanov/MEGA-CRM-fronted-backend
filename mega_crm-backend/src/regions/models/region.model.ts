import { Column, DataType, HasMany, Model, Table,  } from "sequelize-typescript";
import { City } from "../../cities/models/city.model";

interface RegionCreationAttrs{
    name: string;
};

@Table({tableName: 'cities'})
export class Region extends Model<Region, RegionCreationAttrs> {
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

    @HasMany(() => City)
    city: City;
}
