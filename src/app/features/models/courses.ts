import { Course } from "./course";

export class CourseItemInList {
  public course!: Course;
  public grade!: string;
  public approved!: boolean;
  public R_date!: Date;
  constructor(){
    this.approved = false;
    this.R_date = new Date();
    this.course = new Course(); 
    this.grade = '';
  }
}

