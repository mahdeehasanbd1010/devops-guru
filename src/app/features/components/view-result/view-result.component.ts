import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/results';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {

  public result: any = {
    Grades:[
      {Garde: 'A+',
        Course:{
          CourseId: 101,
          CourseName!: 'CPP',
          Description: 'code programming'
        }
      },
      {Garde: 'A+',
        Course:{
          CourseId: 102,
          CourseName!: 'OOP',
          Description: 'object oriented programming'
        }
      },
      {Garde: 'A+',
        Course:{
          CourseId: 103,
          CourseName!: 'ML',
          Description: 'Machine Learning'
        }
      },
    ],
    Student:{
      StudentId: 1,
      StudentName: 'Yusuf',
      Gender: 'male',
      Year: 2018,
    }
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
