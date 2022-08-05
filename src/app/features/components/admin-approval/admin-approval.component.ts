import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../../services/approval.service';
import { CourseService } from '../../services/course.service';
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
              private studentService: StudentService,
              private courseService: CourseService) { }

  public courses: any[] = [];
  public approvalData: any= [];
  public requestList: any = [];
  public studentId: any;

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
    this.getAllCourse();
    this.getAllCourseInfo();
  }

  private getAllCourse(): void{
    this.approvalService.getAllProducts().subscribe((result: any)=>{
      this.courses = result;
      // console.log(this.courses);
    })
  }

  private getAllCourseInfo(){
    this.requestList = [];
    this.studentService.getAllStudents().subscribe((result: any)=>{
      let students: any = result;
      students.forEach((student: any, index: any)=>{
        let sName: any = student.name;
        let sId: any = student.s_id;
        student.course.forEach((course: any, i: any)=>{
            let c: any = course;
            // console.log(course.approval);
            if(course.approval!==undefined && !course.approval){
              let json = {
                studentId: sId,
                studentName: sName,
                course: c
              };
              this.requestList.push(json);
            }
          });
      });
    });

    console.log(this.requestList);
    
  }



  acceptApproval(studentId: number, courseId: number){
    console.log('acceptApproval');
    this.studentService.getAllStudents().subscribe((result: any)=>{
      let students: any = result;
      let studentObject: any = null;
      students.forEach((student: any, index: any)=>{
        if(studentId === student.s_id){
          student.course.forEach((course: any, i: any)=>{
            console.log(course.approval);
            if(course.course.c_id!==courseId){
              course.approval = true;
              studentObject = student;
            }
          });
        }
        
      });
      console.log(studentObject);
      this.courseService.addCourseByStudent(studentObject).subscribe((res: any)=>{
        console.log(res);
      });
    });
    this.getAllCourseInfo();
  }

  deleteApproval(studentId: number, courseId: number){
    console.log('deleteApproval');
    this.studentService.getAllStudents().subscribe((result: any)=>{
      let students: any = result;
      students.forEach((student: any, index: any)=>{
        student.course.forEach((course: any, i: any)=>{
            console.log(course.approval);
            if(course.approval!==undefined && !course.approval){
              course.approval = true;
            }
          });
      });
    });
    this.getAllCourseInfo();
  }

}
