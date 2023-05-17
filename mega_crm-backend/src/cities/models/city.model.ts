import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Region } from "../../regions/models/region.model";

interface CityCreationAttrs{
    name: string;
    region_id: number;
};

@Table({tableName: 'cities'})
export class City extends Model<City, CityCreationAttrs> {
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
    
    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER
    })
    region_id: number;

    @BelongsTo(() => Region)
    region: Region;
}
