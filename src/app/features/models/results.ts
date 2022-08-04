import { Course } from "./course";
import { Student } from "./student";

export class Grade {
    public Course: Course = new Course();
    public Grade!: string;
} 

export class Result {
    public Grades: Grade[] = [];
    public Student: Student = new Student();

    constructor(){
    }
}