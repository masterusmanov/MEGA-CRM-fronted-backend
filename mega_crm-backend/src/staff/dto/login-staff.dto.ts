import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, IsStrongPassword, MinLength } from "class-validator";



export class LoginStaffDto{
    @ApiProperty({
        example: 'login',
        description: 'Admin logini'
    })
    @IsString()
    login: string;

    @ApiProperty({
        example: 'P@$$w0rd',
        description: 'Admin paroli'
    })
    @IsStrongPassword()
    @MinLength(7, {})
    password: string;


}