import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Repository } from 'typeorm';
import { CreateUserDto, Role, User } from 'src/user/user.entity';  // Importando a entidade User
import * as bcrypt from 'bcrypt';  // Biblioteca para hash de senhas
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)  // Injeção do UserRepository
    private readonly userRepository: Repository<User>,  // Repositório do User
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
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.getUserByEmail(email);
    if(!user){
        throw new Error('Usuário não encontrado'); 
    }
    log(user.id)
    if (user && bcrypt.compare(password, user.password_hash)) {
      return { userId: user.id, username: user.email };
    }
    throw new Error('Senha incorreta'); 
   
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, firstName, lastName, role } = createUserDto;

    // Verifica se o usuário já existe
    const existingUser = await this.getUserByEmail(email);
    if (existingUser) {
      throw new Error('Usuário já existe com este email');
    }

    // Criptografa a senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o novo usuário com todos os campos necessários
    const newUser = this.userRepository.create({
      email,
      password_hash: hashedPassword,
      first_name: firstName,
      last_name: lastName,
      role: role || Role.Viewer,
    });

    // Salva o usuário no banco de dados e retorna o usuário criado
    return this.userRepository.save(newUser);
  }

  async updateLastLogin(id : number){
    const result = await this.userRepository.update(id, {
        last_login: new Date(),  // Data e hora atuais
      });
      if (result.affected === 0) {
        throw new NotFoundException('Usuário não encontrado');
      }
  }
}
