import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const lesson = await this.lessonRepository.createLesson(createLessonInput);
    return lesson;
  }
  async getLesson(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepository.getLesson(id);
    return lesson;
  }
  async getLessons(): Promise<Lesson[]> {
    const lessons = await this.lessonRepository.getLessons();
    return lessons;
  }
}
