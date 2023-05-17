import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({ example: 'furniture or household goods', description: "Mahsulot turi"})
    @IsString()
    readonly name: string;
}
