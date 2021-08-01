import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';
@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.create({ id: uuid(), name, startDate, endDate });
    return await this.save(lesson);
  }
  async getLesson(id: string): Promise<Lesson> {
    return await this.findOne({ id });
  }
  async getLessons(): Promise<Lesson[]> {
    return await this.find();
  }
}
