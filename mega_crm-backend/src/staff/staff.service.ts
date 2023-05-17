import { Injectable, BadRequestException, ForbiddenException, HttpStatus, HttpException, UnauthorizedException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Staff } from './models/staff.model';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginStaffDto } from './dto/login-staff.dto';
import { ActivateStaffDto } from './dto/activate-staff.dto';



@Injectable()
export class StaffService {
  constructor(@InjectModel(Staff) private staffRepo: typeof Staff,
  private readonly jwtService: JwtService){}

  async registration(createStaffDto: CreateStaffDto, res: Response) {
    const staff = await this.staffRepo.findOne({
      where: { full_name: createStaffDto.full_name },
    });
    if (staff) {
      throw new BadRequestException('Bu I.F.O mavjud');
    };

    const hashed_password = await bcrypt.hash(createStaffDto.password, 7);
    const newStaff = await this.staffRepo.create({
      ...createStaffDto,
      hashed_password: hashed_password,
    });
    const tokens = await this.getTokens(newStaff);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedStaff = await this.staffRepo.update(
      {hashed_token: hashed_refresh_token},
      {where: { id: newStaff.id }, returning: true}
    );
    const response = {
      message: 'User registred',
      staff: updatedStaff[1][0],
      tokens
    };
    return response;
  };

  async getTokens(staff: Staff) {
    const jwtPayload = {
      id: staff.id,
      is_active: staff.is_active
    };
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: access_token,
      refresh_token: refresh_token
    };
  };

  async login(loginStaffDto: LoginStaffDto, res: Response){
    const { login, password } = loginStaffDto;
    const staff = await this.staffRepo.findOne({ where: { login } });
    if(!staff){
      throw new UnauthorizedException("Xodim ro'yhatdan o'tmagan");
    };
    const isMatchPass = await bcrypt.compare(password, staff.hashed_password);
    if(!isMatchPass){
      throw new UnauthorizedException('Xodim paroli xato');
    }
    const tokens = await this.getTokens(staff);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.staffRepo.update(
      {hashed_token: hashed_refresh_token},
        {where: {id: staff.id}, returning: true }
    );
    const response = {
      message: 'Foydalanuvchi tizimga kirdi',
      staff: updatedUser[1][0],
      tokens
    };
    return response;
  };

  async logout(refresh_token: string, res: Response){
    const staffData  = await this.jwtService.verify(refresh_token,{
      secret: process.env.REFRESH_TOKEN_KEY
    });
    if(!staffData){
      throw new ForbiddenException('Xodim mavjud emas');
    };
    const updatedUser = await this.staffRepo.update(
      {hashed_token: null},
      {where: {id: staffData.id}, returning: true}
    );
    const response = {
      message: 'Xodimistrator tizimdan muvaffaqiyatli chiqdi',
      staff: updatedUser[1][0]
    };
    return response;
  };

  async activateUser(activateStaffDto: ActivateStaffDto){
    const staff = await this.staffRepo.findByPk(activateStaffDto.staff_id);
    if(!staff){
      throw new HttpException('Xodim topilmadi', HttpStatus.NOT_FOUND)
    }
    staff.is_active = true;
    await staff.save();
    return staff;
  }

  async deactivateUser(activateStaffDto: ActivateStaffDto){
    const staff = await this.staffRepo.findByPk(activateStaffDto.staff_id);
    if(!staff){
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND)
    }
    staff.is_active = false;
    await staff.save();
    return staff;
  }

  async findAll() {
    return await this.staffRepo.findAll({include: {all: true}})
  };

  async findOne(id: number) {
    return await this.staffRepo.findOne({where: {id}});
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    return await this.staffRepo.update(updateStaffDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.staffRepo.destroy({where: {id}});
  }
}
