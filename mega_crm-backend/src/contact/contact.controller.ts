import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateContactDto } from './dto/update-contact.dto';

@ApiTags('Telefon raqamlari')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @ApiOperation({summary: "Mijoz telefon raqam ma'lumotlarini qo'shish"})
  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @ApiOperation({summary: "Barcha Mijoz telefon raqam ma'lumotlarini ko'rish"})
  @ApiOperation({summary: "Hudud qo'shish"})
  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @ApiOperation({summary: "ID bo'yicha mijoz telefon raqam ma'lumotlarini ko'rish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(+id);
  }

  @ApiOperation({summary: "ID bo'yicha mijoz telefon raqam ma'lumotlarini yangilash"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(+id, updateContactDto);
  }

  @ApiOperation({summary: "ID bo'yicha mijoz telefon raqam ma'lumotlarini o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }
}
