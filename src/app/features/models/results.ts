import { CourseItem } from "./courses";
import { Student } from "./students";

export class Grade {
    public Course: CourseItem = new CourseItem();
    public Grade!: string;
} 

export class Result {
    public Grades: Grade[] = [];
    public Student: Student = new Student();

    constructor(){
    }
}