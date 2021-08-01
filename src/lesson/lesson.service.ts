import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './lesson.entity';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const lesson = this.lessonRepository.createLesson(createLessonDto);
    return lesson;
  }
}
