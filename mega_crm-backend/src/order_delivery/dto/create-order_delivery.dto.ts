import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateOrderDeliveryDto {
    
    @ApiProperty({ example: 'Mavjud emas yoki band ', description: "Mijoz telefon raqami band yoki mavjud emas"})
    @IsString()
    readonly description: string;
}
