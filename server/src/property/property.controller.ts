import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  DefaultValuePipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { JwtAuthGuard } from 'src/guard/jwtAuthGuard';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    console.log(createPropertyDto);

    return this.propertyService.create(createPropertyDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('minPrice', new DefaultValuePipe(0), ParseIntPipe) minPrice: number,
    @Query(
      'maxPrice',
      new DefaultValuePipe(Number.MAX_SAFE_INTEGER),
      ParseIntPipe,
    )
    maxPrice: number,
    @Query('featureType') featureType: string,
    @Query('propertyType') propertyType: string,
  ) {
    const filters = {
      minPrice,
      maxPrice,
      featureType,
      propertyType,
    };

    return this.propertyService.findAll(page, limit, filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(id);
  }
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
  //   return this.propertyService.update(id, updatePropertyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.propertyService.remove(id);
  // }
}
