import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateCityDto {
    @ApiProperty({ example: 'furniture or household goods', description: "Mahsulot turi"})
    @IsString()
    readonly name: string;
}
