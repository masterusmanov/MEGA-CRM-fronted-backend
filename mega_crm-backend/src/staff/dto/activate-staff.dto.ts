import { ApiProperty } from "@nestjs/swagger";

export class ActivateStaffDto {
  @ApiProperty({ example: 'Staff_id', description: 'Admin id raqami'})
  staff_id: number;
}
