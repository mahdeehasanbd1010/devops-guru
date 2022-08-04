import { CourseItem } from "./courses";
import { Student } from "./students";

export class Grade {
    public course: CourseItem = new CourseItem();
    public grade!: string;
} 

export class Result {
    public Grade: Grade = new Grade();
    public Student: Student = new Student();

    constructor(){
    }
}