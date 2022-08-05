import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseItemInList } from '../../models/courses';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-course-by-student',
  templateUrl: './add-course-by-student.component.html',
  styleUrls: ['./add-course-by-student.component.scss']
})
export class AddCourseByStudentComponent implements OnInit {

  course: CourseItemInList = new CourseItemInList();
  studentId: string = ''

  constructor(private studentService: StudentService,
              private courseService: CourseService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addCourseByStudent(){
    
    this.studentService.getAllStudents().subscribe((result: any)=>{
      // console.log(result);
      let data: any = result;
      let studentObject: any = null;
      let _id: any;
      
      data.forEach((element: any, index: any)=>{
        console.log(element);
        if(element.s_id === this.studentId) {
          console.log('dhukse');
          element.course.push(this.course);
          studentObject =element
          _id = element._id;
        }
      });

      this.course = new CourseItemInList();
      this.studentId = '';
      // let object: any = {
      //   Course: this.course,
      //   _id: _id
      // }
      console.log(studentObject);

      this.courseService.addCourseByStudent(studentObject).subscribe((res:any)=>{
        console.log('2nd call done');
        console.log(res);
        this.router.navigate(["admin/course"]);
      });
      
    });

  }

}
