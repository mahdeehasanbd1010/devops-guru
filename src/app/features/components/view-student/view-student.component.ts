import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  public students: any;

  constructor(private router:Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe((result: any)=>{
      this.students = result;
      console.log(result);
    })
  }

  routeToStudentForm(){
    console.log('routing');
    this.router.navigate(['admin/add/student']);
  }

}
