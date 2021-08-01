import { EntityRepository, Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonDto;
    const lesson = this.create({ id: uuid(), name, startDate, endDate });
    return await this.save(lesson);
  }
}
