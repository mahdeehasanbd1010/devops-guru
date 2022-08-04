import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseItem } from '../../models/courses';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  
  courses: any [] = [
    {
      courseName: 'Bangla',
      description: 'bangla language',
    },        
    {
      courseName: 'English',
      description: 'english language',
    },
    {
      courseName: 'Math',
      description: 'english language',
    },
    {
      courseName: 'Physics',
      description: 'english language',
    },
  ];

  ngOnInit(): void {
  }

  routeToCourseForm(){
    this.router.navigate(['admin/add/course']);
  }

}
