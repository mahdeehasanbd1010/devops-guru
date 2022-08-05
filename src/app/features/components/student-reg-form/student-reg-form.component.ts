import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-reg-form',
  templateUrl: './student-reg-form.component.html',
  styleUrls: ['./student-reg-form.component.scss']
})
export class StudentRegFormComponent implements OnInit {

  public studentId: any;
  public studentName: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToResult(){
    // console.log(this.router.navigate(["student/result/"+this.studentId]));
    this.router.navigate(["student/result/"+this.studentId]);
  }
}
