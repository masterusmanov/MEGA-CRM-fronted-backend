import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({ example: 'Region name', description: "Manzil nomi"})
    @IsString()
    readonly name: string;
}
