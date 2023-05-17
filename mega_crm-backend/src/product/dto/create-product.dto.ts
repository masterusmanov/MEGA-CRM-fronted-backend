import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ example: 'Product name', description: "Mahsulot nomi"})
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'https://Product_image', description: "Mahsulot rasmi"})
    @IsString()
    readonly image: string;

    @ApiProperty({ example: 'Product price', description: "Mahsulot narxi"})
    @IsString()
    readonly price: string;

    @ApiProperty({ example: 'Product description', description: "Mahsulot tavsifi"})
    @IsString()
    readonly description: string;
}
