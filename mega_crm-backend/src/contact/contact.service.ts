import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Contact } from './models/contact.model';
import { v4 as uuidv4, v4 } from 'uuid';
import { ActivateContactDto } from './dto/activate-contact.dto';


@Injectable()
export class ContactService {
  constructor(@InjectModel(Contact) private contactRepo: typeof Contact){}

  create(createContactDto: CreateContactDto) {
    return this.contactRepo.create({
      ...createContactDto,
      unique_id: uuidv4()
    });
  };

  async activateContact(activateContactDto: ActivateContactDto){
    const contact = await this.contactRepo.findByPk(activateContactDto.contact_id);
    if(!contact){
      throw new HttpException('Kontakt topilmadi', HttpStatus.NOT_FOUND)
    }
    contact.is_old = true;
    await contact.save();
    return contact;
  };

  async deactivateContact(activateContactDto: ActivateContactDto){
    const contact = await this.contactRepo.findByPk(activateContactDto.contact_id);
    if(!contact){
      throw new HttpException('Kontakt topilmadi', HttpStatus.NOT_FOUND)
    }
    contact.is_old = false;
    await contact.save();
    return contact;
  };

  async findAll() {
    return await this.contactRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.contactRepo.findOne({where: {id} });
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    return await this.contactRepo.update(updateContactDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.contactRepo.destroy({where: {id} });
  }
}
