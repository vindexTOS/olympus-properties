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



  async findOne(id: string) {
    try {
      const property = await this.prismaService.property.findUnique({where:{id}})
      return property
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    try {
      const CreatedProperty = await this.prismaService.property.update({
        where:{id},
        data: {
          ...updatePropertyDto,
        }
        
      })
      return  CreatedProperty
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }


  }

  async remove(id: string) {
    try {
      const CreatedProperty = await this.prismaService.property.delete({where:{id}})
      return  CreatedProperty
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }

  }
}
