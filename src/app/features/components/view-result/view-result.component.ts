import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../models/results';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {

  public results: any = [];
  public studentId: any;
  public studentName: any = "";

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.paramMap.get('studentId');
    console.log(this.activatedRoute.snapshot.paramMap.get('studentId'));
    this.getAllStudent();
  }

  getAllStudent(){
    this.studentService.getAllStudents().subscribe((result:any)=>{
      let students: any = result;
      students.forEach((student: any, index: any)=>{
        if(student.s_id===this.studentId){
          this.studentName = student.name;
          student.course.forEach((course: any, i: any)=>{
            if(course.grade){
              this.results.push(course);
            }
          });
        }
      });
    });
    console.log(this.results);
  }

}
