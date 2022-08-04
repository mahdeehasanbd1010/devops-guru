import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  
 
  public course: Course = new Course(); 

  constructor(private courseService: CourseService,
              private router: Router) { }


  ngOnInit(): void {
  }

  addCourse(){
    console.log('add courses');
    
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe((result: any) => {
      this.course = new Course();
      this.router.navigate(["admin/course"]);
    });
  }

}
