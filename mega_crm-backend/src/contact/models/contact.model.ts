import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Staff } from "../../staff/models/staff.model";

interface ContactCreationAttrs{
    unique_id: string;
    phone_number: string;
    staff_id: number;
    status: string;
    is_old: boolean;
};

@Table({tableName: 'contact'})
export class Contact extends Model<Contact, ContactCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    unique_id: string;

    @Column({
        type: DataType.STRING
    })
    phone_number: string;
    
    @ForeignKey(() => Staff)
    @Column({
        type: DataType.INTEGER
    })
    staff_id: number;

    @Column({
        type: DataType.STRING
    })
    status: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    is_old: boolean;

    @BelongsTo(() => Staff)
    staff: Staff;
}
