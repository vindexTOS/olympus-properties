import { Controller ,Body, Post,UseGuards, Req, Patch, Param,Delete} from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminCredintials } from './dtos/admin.login';
import { JwtAuthGuard } from 'src/guard/jwtAuthGuard';;
import { UpdatePropertyDto } from 'src/property/dto/update-property.dto';
import { PropertyService } from 'src/property/property.service';

class costumreq extends Request {

}
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService, private readonly properyService: PropertyService) {}

  @Post('login')
  login(@Body() body : adminCredintials ){
    console.log(body);
      return this.adminService.findAdmin(body)
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createProperty(@Req()  req ){
    const userId = req.user.id
    const property = req.user.body
    if(req.user.type !== 'ADMIN'){ 
      return "acces denied"
    }
    return this.properyService.createProperty(userId,property)
  }


  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  updateProperty(@Param('id') PropertyId : string, @Body() body :UpdatePropertyDto ){
    return this.properyService.updateProperty(PropertyId, body)
  }

  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteProperty(@Param('id') PropertyId : string){
    return this.properyService.remove(PropertyId)
  }

}
