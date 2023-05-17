import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class FindStaffDto {
    @ApiProperty({ example: 'Qidiruv', description: 'Qidiruv'})
    @IsString()
    search: string
}