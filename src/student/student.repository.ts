import { EntityRepository, Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';
@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return await this.save(student);
  }

  async getStudents(): Promise<Student[]> {
    return await this.find();
  }
}
