import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Manzil')
@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @ApiOperation({summary: "Manzil kiritish"})
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }

  @ApiOperation({summary: "Barcha manzillarni ko'rish"})
  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @ApiOperation({summary: "ID bo'yicha bitta manzilni ko'rish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(+id);
  }

  @ApiOperation({summary: "ID bo'yicha bitta manzilni yangilash"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionsService.update(+id, updateRegionDto);
  }

  @ApiOperation({summary: "ID bo'yicha bitta manzilni o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionsService.remove(+id);
  }
}
