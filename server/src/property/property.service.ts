import {
  HttpException,
  HttpStatus,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as path from 'path';
import * as fs from 'fs';

import { QueryDataDto } from './dto/queryData.dt';
@Injectable()
export class PropertyService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(query: QueryDataDto) {
    try {
      const {
        page = 1,
        limit = 5,
        location,
        minPrice = 0,
        maxPrice = 999999999999999,
        featureType,
        propertyType,
        search,
      } = query;

      const skip = (+page - 1) * +limit;
      console.log(search);
      const whereClause: any = {
        location,
        featureType,
        propertyType,
        price: {
          gte: +minPrice,
          lte: +maxPrice,
        },
        propertyName: {
          contains: search,
          mode: 'insensitive',
        },
      };

      const filteredProperties = await this.prismaService.property.findMany({
        skip,
        take: +limit,
        where: whereClause,
      });
      const dataLength = await this.prismaService.property.count();

      const totalPages = Math.ceil(dataLength / Number(limit));

      return { data: filteredProperties, totalPages, dataLength };
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  async findOne(id: string) {
    try {
      const property = await this.prismaService.property.findUnique({
        where: { id },
        include: {
          pictures: true,
        },
      });
      return property;
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  async create(createPropertyDto: CreatePropertyDto) {
    try {
      const propertyOwner = await this.prismaService.propertyOwner.findUnique({
        where: {
          email: createPropertyDto.OwnerInformation.email,
        },
      });

      if (!propertyOwner) {
        const CreateOwnerWithProperty = await this.prismaService.propertyOwner.create(
          {
            data: {
              ...createPropertyDto.OwnerInformation,
              property: {
                create: createPropertyDto.propertyInformation,
              },
            },
            include: {
              property: true,
            },
          },
        );
        return CreateOwnerWithProperty;
      }
      const property = await this.prismaService.property.create({
        data: {
          ...createPropertyDto.propertyInformation,
          Owner: {
            connect: {
              email: createPropertyDto.OwnerInformation.email,
            },
          },
        },

        include: {
          Owner: true,
        },
      });
      return property;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    try {
      const CreatedProperty = await this.prismaService.property.update({
        where: { id },
        data: {
          ...updatePropertyDto,
        },
      });
      return CreatedProperty;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: string) {
    try {
      const CreatedProperty = await this.prismaService.property.delete({
        where: { id },
      });
      return CreatedProperty;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
