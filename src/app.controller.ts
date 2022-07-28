import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 
  @Post()
  create(@Body() users: User[]) {
    return this.appService.createUser(users);
  }
  @Put('/update/:id')
  update(@Body() users: User,@Param('id') id: any) {
    return this.appService.updateUser(users,id);
  }
  @Get('/delete/:id')
  delete(@Param('id') id: any) {
    return this.appService.deleteUser(id);
  }
}
