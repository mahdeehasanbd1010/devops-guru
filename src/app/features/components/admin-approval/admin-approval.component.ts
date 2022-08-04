import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../../services/approval.service';
import { StudentService } from '../../services/student.service';

export class ApprovalData{
  studentId: number = 0;
  courseId: number = 0;
  studentName: string = '';
  courseName: string = '';
  date: Date = new Date();
}

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.scss']
})
export class AdminApprovalComponent implements OnInit {

  constructor(private datePipe: DatePipe,
              private approvalService: ApprovalService,
              private studentService: StudentService) { }

  public courses: any = null;
  public approvalData: any= [];

  public students: any = [
    {
      StudentId: 1,
      StudentName: 'Yusuf',
      Gender: 'male',
      Year: 2018,
      Courses:[{
        CourseItem: {
            CourseId: 101,
            CourseName: 'OOP',
            Description: 'Object Oriented Programming',
          },
        Approved: true,
        DateOfApproval: this.datePipe.transform(new Date(),"dd MMMM YYYY"),
        },
        {
          CourseItem: {
            CourseId: 102,
            CourseName: 'CP',
            Description: 'Code Problem',
          },
          Approved: false,
          DateOfApproval: this.datePipe.transform(new Date(),"dd MMMM YYYY"),
        }
      ]
    },
    {
      StudentId: 2,
      StudentName: 'Mahdee',
      Gender: 'male',
      Year: 2018,
      Courses:[{
        CourseItem: {
          CourseId: 102,
          CourseName: 'CP',
          Description: 'Code Problem',
        },
        Approved: false,
        DateOfApproval: this.datePipe.transform(new Date(),"dd MMMM YYYY"),
      },]
    
    },
  ]

  ngOnInit(): void {
    this.filterApprovalData();
    this.getAllCourse();
    this.getAllStudentInfo();
  }

  private getAllCourse(): void{
    this.approvalService.getAllProducts().subscribe((result: any)=>{
      this.courses = result;
      // console.log(this.courses);
    })
  }

  private getAllStudentInfo(){
    this.studentService.getAllStudents().subscribe((result: any)=>{
      console.log(result);
    });
  }

  filterApprovalData(){

    let approvalDatas: any =[]
    for(let student of this.students){
      student.Courses.forEach((element: any, index: any)=>{
        if(!element.Approved) {
          let approvalData: any = {
            studentName: student.StudentName,
            courseName: element.CourseItem.CourseName,
            date: element.DateOfApproval,
            studentId: student.StudentId,
            courseId: element.CourseItem.CourseId,
          };
          this.approvalData.push(approvalData);
        }
     });
    }

    // console.log(this.approvalData);
  }

  acceptApproval(studentId: number, courseId: number){
    console.log('accept approval');
    for(let student of this.students){
      if(student.StudentId === studentId){
        student.Courses.forEach((element: any, index: any)=>{
          if(element.CourseItem.CourseId===courseId) {
            element.Approved = true;
          }
       });
      }
    }
    this.filterApprovalData();
  }

  deleteApproval(studentId: number, courseId: number){
    console.log('delete approval');
    for(let student of this.students){
      if(student.StudentId === studentId){
        student.Courses.forEach((element: any, index: any)=>{
          if(element.CourseItem.CourseId===courseId) {
            student.Courses.splice(index,1);
          }
       });
      }
    }
    this.filterApprovalData();
  }

}
