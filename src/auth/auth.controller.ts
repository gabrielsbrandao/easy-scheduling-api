import { Controller, Post, Body, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.entity';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// DTO de entrada para login
class AuthDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() body: AuthDTO) {
    try
    {
      const user = await this.authService.validateUser(body.email, body.password);
    
      if (user) {
        this.authService.updateLastLogin(user.id); // Atualiza o login
        this.logger.log('Login bem-sucedido', user.email);
        const token = this.authService.login(user); // Gera o token
        return {
          message: 'Login realizado com sucesso',
          user: {
            id: user.id,
            name: `${user.name}`,
            email: user.email,
            role: user.role,
          },
          token,
        };
      }
      else {
        this.logger.log('Credenciais inválidas');
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED); // Erro HTTP 401
      }
    }
    catch (error) {
      // Aqui você pode fazer o log do erro e retornar uma resposta de erro personalizada
      console.error('Error during login:', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
