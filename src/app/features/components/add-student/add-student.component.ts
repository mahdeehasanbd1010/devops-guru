import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/students';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  public student: Student = new Student();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  addStudent(){
    console.log('add students');
    console.log(this.student);
    this.studentService.addStudent(this.student).subscribe((result: any) => {
      this.student = new Student();
      // alert(`New product added with id ${result}`);
      // this.router.navigate(["/products"]);
    });
  }

}
