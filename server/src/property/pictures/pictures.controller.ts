import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseInterceptors, UploadedFile, UploadedFiles} from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { Request } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';


@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}
  @Post()
  @UseInterceptors(FilesInterceptor('pictures', 10))
  create(@UploadedFiles() pictures: Express.Multer.File[], @Req() request: Request) {
     

    const propertyId = request.body.propertyId
    console.log(pictures)
    return this.picturesService.create(pictures,propertyId);
  }
  // @Get()
  // findAll() {
  //   return this.picturesService.findAll();
  // }

  // @Get(':id')\

  // findOne(@Param('id') id: string) {
  //   return this.picturesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
  //   return this.picturesService.update(+id, updatePictureDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.picturesService.remove(+id);
  // }
}
