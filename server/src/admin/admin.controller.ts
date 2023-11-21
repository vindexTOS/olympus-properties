import { Controller ,Body, Post} from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminCredintials } from './dtos/admin.login';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  loginAdmin(@Body() body : adminCredintials ){
      return this.adminService.findAdmin(body)
  }
}
