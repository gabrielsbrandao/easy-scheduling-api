import { Injectable, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User, CreateUserDto, Role } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Função de login
  async login(user: any) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '8h',
      }),
    };
  }

  // Validação de usuário com nome de usuário e senha
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');  // Lançando exceção personalizada
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatches) {
      console.log(password);
      throw new UnauthorizedException('Senha incorreta');  // Lançando exceção personalizada
    }

    return user;
  }

  // Obtém o usuário por email
  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  // Função de registro de usuário
  async register(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, name, role } = createUserDto;

    const existingUser = await this.getUserByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Usuário já existe com este email');  // Exceção personalizada para erro de validação
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      email,
      password_hash: hashedPassword,
      name: name,
      role: role || Role.Viewer,
    });

    return this.userRepository.save(newUser);
  }

  // Atualiza o campo de 'last_login'
  async updateLastLogin(id: number) {
    const result = await this.userRepository.update(id, {
      last_login: new Date(),
    });

    if (result.affected === 0) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
