import { Injectable } from '@nestjs/common';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyPicture } from '@prisma/client';


@Injectable()
export class PicturesService {

  constructor(private readonly prismaService: PrismaService) { }

  async create(pictures: Express.Multer.File[], propertyId: string) {
    console.log(pictures)
    try {
        if (!pictures || !Array.isArray(pictures)) {
            throw new Error('Invalid pictures data');
        }
      const uploadedPictures = pictures.map((picture) => ({
        picturePath: picture.filename,
        propertyId: propertyId,  
      }));

      const createdPropertyPictures = await this.prismaService.propertyPicture.createMany({
        data: uploadedPictures,
      });

      return { message: 'Pictures uploaded successfully', pictures: createdPropertyPictures };
    } catch (error) {
      // Handle errors appropriately
      console.error('Error uploading pictures:', error);
      throw new Error('Failed to upload pictures');
    }
  }

  findAll() {
    return `This action returns all pictures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} picture`;
  }

  update(id: number, updatePictureDto: UpdatePictureDto) {
    return `This action updates a #${id} picture`;
  }

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
