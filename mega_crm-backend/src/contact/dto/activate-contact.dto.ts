import { ApiProperty } from "@nestjs/swagger";

export class ActivateContactDto {
  @ApiProperty({ example: 'contact_id', description: 'Mijoz id raqami'})
  contact_id: number;
}
