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
@Injectable()
export class PropertyService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(page: number, limit: number, filters: any) {
    try {
      const skip = (page - 1) * limit;
      const dataLength = await this.prismaService.property.count();
      const totalPages = Math.ceil(dataLength / limit);
      const whereClause = {
        price: {
          gte: filters.minPrice !== undefined ? filters.minPrice : 0,
          lte:
            filters.maxPrice !== undefined
              ? filters.maxPrice
              : Number.MAX_SAFE_INTEGER,
        },
        ...(filters.featureType !== undefined && {
          featureType: filters.featureType,
        }),
        ...(filters.propertyType !== undefined && {
          propertyType: filters.propertyType,
        }),
      };

      const properties = await this.prismaService.property.findMany({
        skip,
        take: limit,
        where: whereClause,
        orderBy: {
          uploadetAt: 'desc',
        },
      });

      return { data: properties, totalPages, dataLength };
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
        const CreateOwnerWithProperty =
          await this.prismaService.propertyOwner.create({
            data: {
              ...createPropertyDto.OwnerInformation,
              property: {
                create: createPropertyDto.propertyInformation,
              },
            },
            include: {
              property: true,
            },
          });
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

  async findOne(id: string) {
    try {
      const dirName = __dirname;

      const property = await this.prismaService.property.findUnique({
        where: { id },
        include: {
          pictures: true,
        },
      });

      const pictures = property.pictures;
      const pictureData = await Promise.all(
        pictures.map(async (picture) => {
          const imagePath = path.join(
            dirName + `../../../productPictures/${picture.picturePath}`,
          );
          const fileData = await fs.promises.readFile(imagePath, 'utf-8');
          return { path, data: fileData };
        }),
      );

      // const PicturesObject = pictures.map( async (pictures) => {

      //   const fileData = await fs.promises.readFile(imagePath);
      //   console.log(fileData)
      //   return fileData
      // })
      return pictureData;
    } catch (error) {
      throw new HttpException(error, error.status);
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
