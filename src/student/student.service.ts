import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}
  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    return this.studentRepository.createStudent(createStudentInput);
  }
  getStudents(): Promise<Student[]> {
    return this.studentRepository.getStudents();
  }
}
