import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.entity';
import { ApiExcludeEndpoint, ApiOperation, ApiProperty } from '@nestjs/swagger';
class authDTO{
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('register')
  @ApiExcludeEndpoint()
    async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Faça login para receber o token de acesso' })
  async login(@Body() body: authDTO) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (user) {
        this.authService.updateLastLogin(user.id);
      return this.authService.login(user);
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
