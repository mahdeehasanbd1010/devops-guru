import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})
export class CreateResultComponent implements OnInit {


  public studentId!: string;
  public courseId!: string;
  public courseName!: string;
  public grade!: string;


  constructor(private studentService: StudentService,
              private router: Router,
              private courseService: CourseService) { }

  ngOnInit(): void {
  }

  addGrade(){
    this.studentService.getAllStudents().subscribe((result: any)=>{
      let students: any = result;
      let studentObject: any = null;
      console.log(students);
      students.forEach((student: any, index: any)=>{
        // console.log(student.s_id);
        // console.log(this.studentId);
        if(student.s_id === this.studentId) {
          // console.log('dhukse');
          // console.log(student.course);
          student.course.forEach((course: any, index: any)=>{
            // console.log(course);
            // console.log(this.courseId);
            if(course.course.c_id===this.courseId){
              studentObject = student;
              // console.log('dhukse222');
              course.grade = this.grade;
            }
            console.log(studentObject);
          }); 
        }
      });
      // console.log(students);

      this.courseService.addCourseByStudent(studentObject).subscribe((res: any)=>{
        console.log(res);
        this.router.navigate(["admin/course"]);
      });

    });
  }

}
