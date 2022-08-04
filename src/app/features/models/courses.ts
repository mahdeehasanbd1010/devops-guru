export class CourseItemInList {
  public courseItem!: CourseItem
  public Approved!: boolean;
  public DateOfApproval!: Date;
  constructor(){
  }
}

export class CourseItem {
  public CourseId!: number;
  public CourseName!: string;
  public Description!: string;
  
  constructor(){
  }
}