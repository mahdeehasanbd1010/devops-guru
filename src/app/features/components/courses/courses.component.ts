import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseItem } from '../../models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router)
  { }

  public courseName: any = "";
  public description: any = "";
  

  ngOnInit(): void {
  }

  routeToCourse(){
    this.router.navigate(['admin/courses']);
  }

  saveProduct(){

  }
}
