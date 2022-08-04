export class CourseItem {
  public CourseId!: number;
  public CourseName!: string;
  public Description!: string;
  
  constructor(){
    this.CourseName = '';
    this.Description = '';
  }
}