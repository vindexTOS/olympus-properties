import { Injectable } from '@nestjs/common';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyPicture } from '@prisma/client';
import * as fs from 'fs/promises'; 

@Injectable()
export class PicturesService {

  constructor(private readonly prismaService: PrismaService) { }

  async create(pictures: Express.Multer.File[], propertyId: string) {
    try {
      if (!pictures || !Array.isArray(pictures)) {
        throw new Error('Invalid pictures data');
      }
      

      const uploadedPictures = await Promise.all(
        pictures.map(async (picture) => {
          const fileContent = await fs.readFile(picture.path);
          const base64Image = Buffer.from(fileContent).toString('base64');
          return {
            picturePath: base64Image,
            propertyId : propertyId
          }
        
        })
      );
      console.log(uploadedPictures);
      
      const createdPropertyPictures = await this.prismaService.propertyPicture.createMany({
        data: uploadedPictures,
      });

     await  this.prismaService.property.update({ where: { id: propertyId, }, data: { mainPicture:uploadedPictures[0].picturePath  } })

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
function readFileToBuffer(path: string): any {
  throw new Error('Function not implemented.');
}

