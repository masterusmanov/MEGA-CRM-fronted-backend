import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({ example: 'Customer full name', description: "mijozning to'liq ismi"})
    @IsString()
    readonly full_name: string;

    @ApiProperty({ example: 'customer address', description: "Mijoz manzili"})
    @IsString()
    readonly adress: string;

    @ApiProperty({ example: 'target', description: "Mijoz maqsadi"})
    @IsString()
    readonly target: string;

    @ApiProperty({ example: 'customer address', description: "Mijoz manzili"})
    @IsString()
    readonly status: string;

    @ApiProperty({ example: 'description', description: "Tavsifi"})
    @IsString()
    readonly description: string;
}
