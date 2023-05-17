import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateContactDto {
    @ApiProperty({ example: '+998901234567', description: "Mijoz telefon raqami"})
    @IsPhoneNumber()
    @MinLength(9, {})
    readonly phone_number: string;

    @ApiProperty({ example: 'Mavjud emas yoki band ', description: "Mijoz telefon raqami band yoki mavjud emas"})
    @IsString()
    readonly status: string;
}
