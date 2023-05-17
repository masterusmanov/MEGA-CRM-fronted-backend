import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsPhoneNumber } from "class-validator";

export class UpdateStaffDto {
    @ApiProperty({ example: 'Full name', description: "Admin to'liq ismi"})
    @IsNotEmpty()
    @IsString()
    @MinLength(3, {})
    full_name?: string;

    @ApiProperty({ example: '+998901234567', description: 'Admin telefon raqami'})
    @IsNotEmpty()
    @IsPhoneNumber()
    phone_number?: string;

    @ApiProperty({ example: '8600 0609 1234 6789', description: 'Admin bank kartasi'})
    @IsNotEmpty()
    @IsString()
    card?: string;

    @ApiProperty({ example: 'login', description: 'Admin logini'})
    @IsString()
    login?: string;

    @ApiProperty({ example: 'P@$$w0rd', description: 'Admin paroli'})
    @IsStrongPassword()
    @MinLength(7, {})
    password?: string;

    @ApiProperty({ example: 'Super admin or admin or operator', description: 'Admin roli'})
    @IsNotEmpty()
    @IsString()
    role?: string;
}
