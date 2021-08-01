import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';
@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });
    return await this.save(lesson);
  }
  async getLesson(id: string): Promise<Lesson> {
    return await this.findOne({ id });
  }
  async getLessons(): Promise<Lesson[]> {
    return await this.find();
  }
  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.getLesson(lessonId);
    lesson.students = [...lesson.students, ...studentIds];
    return await this.save(lesson);
  }
}
