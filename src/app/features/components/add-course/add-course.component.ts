import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../../models/courses';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  
  public course: CourseItem = new CourseItem();

  constructor(private courseService: CourseService) { }


  ngOnInit(): void {
  }

  saveCourse(){
    console.log('add courses');
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe((result: any) => {
      this.course = new CourseItem();
      // alert(`New product added with id ${result}`);
      // this.router.navigate(["/products"]);
    });
  }

}
