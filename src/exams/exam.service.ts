// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Exam } from './exam.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExamService {
    constructor(
        @InjectRepository(Exam) private examRepository: Repository<Exam>,
      ) {}
    }
    