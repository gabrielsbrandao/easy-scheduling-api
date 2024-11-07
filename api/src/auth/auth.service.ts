// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
        access_token: await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET }),//
    }
  }

  // Exemplo de validação de usuário
  async validateUser(username: string, password: string): Promise<any> {
    if (username === '1' && password === '123') {
      return { userId: 1, username: 'user' };  // Retorna o usuário (você pode personalizar isso)
    }
    return null;
  }
}
