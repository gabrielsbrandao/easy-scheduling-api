// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exam])],
  providers: [],
  exports: [TypeOrmModule],
})
export class ExamModule {}
