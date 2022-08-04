import { CourseItemInList } from "./courses";
export class Student {
    public StudentId!: number;
    public StudentName!: string;
    public Gender!: string;
    public Year!: number;
    public Courses!: CourseItemInList[];

    constructor(){
    }
  }