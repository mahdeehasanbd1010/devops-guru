import { Component, OnInit } from '@angular/core';
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
              private courseService: CourseService) { }

  ngOnInit(): void {
  }

  addCourseByStudent(){
    
    this.studentService.getAllStudents().subscribe((result: any)=>{
      console.log(result);
      let data: any = result;
      let _id: any;
      
      data.forEach((element: any, index: any)=>{
        if(element.s_id === this.studentId) {
          // console.log('dhukse');
          element.course.push(this.course);
          _id = element._id;
        }
      });
      let object: any = {
        Course: this.course,
        _id: _id
      }
      console.log(data);

      this.courseService.addCourseByStudent(data).subscribe((res:any)=>{
        console.log('2nd call done');
        console.log(res);
      });
      
    });

  }

}
