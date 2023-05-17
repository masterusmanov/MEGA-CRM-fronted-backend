import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Staff } from './models/staff.model';
import { LoginStaffDto } from './dto/login-staff.dto';
import { ActivateStaffDto } from './dto/activate-staff.dto';

@ApiTags('Xodimlar')
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @ApiOperation({ summary: "xodimlarni ro'yxatga olish"})
  @ApiResponse({ status: 201, type: Staff})
  @Post('loginup')
  create(@Body() createStaffDto: CreateStaffDto, @Res({ passthrough: true }) res: Response) {
    return this.staffService.registration(createStaffDto, res);
  }

  @ApiOperation({ summary: 'Kirish. Xodimlar'})
  @ApiResponse({ status: 200, type: Staff})
  @HttpCode(HttpStatus.OK)
  @Post('loginin')
  login(
    @Body() loginStaffDto: LoginStaffDto,
    @Res({ passthrough: true }) res: Response
  ){
    return this.staffService.login(loginStaffDto, res);
  };

  @ApiOperation({summary: 'Chiqish, Xodimlar'})
  @ApiResponse({status: 200, type: Staff})
  @HttpCode(HttpStatus.OK)
  @Post("logout")
  logout(@Body('refresh_token') refresh_token: string, @Res() res: Response){
    return this.staffService.logout(refresh_token, res)
  };

  @ApiOperation({summary: 'Xodimni faollashtirish'})
  @ApiResponse({status: 200, type: Staff})
  @HttpCode(HttpStatus.OK)
  @Post('activate')
  activateUser(@Body() activateStaffDto: ActivateStaffDto){
    return this.staffService.activateUser(activateStaffDto)
  }

  @ApiOperation({summary: 'Xodimni faolsizlantirish'})
  @ApiResponse({status: 200, type: Staff})
  @HttpCode(HttpStatus.OK)
  @Post('deactivate')
  deactivateUser(@Body() activateStaffDto: ActivateStaffDto){
    return this.staffService.deactivateUser(activateStaffDto)
  }

  @Get('getAll')
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(+id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(+id);
  }
}
