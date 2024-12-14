import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ExamService } from './exam.service';

class examDTO{
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

}
