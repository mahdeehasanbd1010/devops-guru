import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToCourseSection(){
    this.router.navigate(["admin/course"]);
  }

  routeToStudentSection(){
    this.router.navigate(["admin/student"]);
  }

  routeToStudentGarde(){
    this.router.navigate(["admin/set/student/garde"]);
  }

  routeToStudentCourseApproval(){
    this.router.navigate(["admin/appove/course"]);
  }

}
