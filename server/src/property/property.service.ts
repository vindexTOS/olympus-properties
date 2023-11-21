import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class PropertyService {
  constructor(private readonly prismaService: PrismaService) { }

  async findAll() {
    try {
      const Properties = await this.prismaService.property.findMany()
      return Properties
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }


  async create(createPropertyDto: CreatePropertyDto): Promise<CreatePropertyDto> {
    try {
      const CreatedProperty = await this.prismaService.property.create({
        data: {
          ...createPropertyDto,
        }
      })
      return CreatedProperty
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }



  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
