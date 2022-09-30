import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import {  ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // User registration
  @ApiCreatedResponse({
    description: 'created user object as response',
    type: User
  })
  @ApiBadRequestResponse({
    description: 'user cannot register. Try again'
  })
  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterRequestDto) : Promise<User>{
    return await this.userService.doUserRegistration(userRegister);
  }

  
  
}
