import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { UserService } from './user.service';

class authDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

}
