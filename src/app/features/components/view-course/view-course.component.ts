import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  constructor(private router:Router,
              private courseService: CourseService) { }

  courses: any = null;

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe((result: any)=>{
      this.courses = result;
      console.log(result);
    })
  }

  routeToCourseForm(){
    console.log('routing');
    this.router.navigate(['admin/add/course']);
  }
}
