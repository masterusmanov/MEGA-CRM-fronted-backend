import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Hududlar')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @ApiOperation({summary: "Hudud qo'shish"})
  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  @ApiOperation({summary: "Hamma hududni ko'rish"})
  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @ApiOperation({summary: "ID bo'yicha bitta hududni ko'rish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }

  @ApiOperation({summary: "ID bo'yicha bitta hududni yangilash"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citiesService.update(+id, updateCityDto);
  }

  @ApiOperation({summary: "ID bo'yicha bitta hududni o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }
}
