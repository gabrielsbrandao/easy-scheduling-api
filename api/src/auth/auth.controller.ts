import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload.interface';
import { ApiProperty } from '@nestjs/swagger';

class authDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: authDTO) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
}
