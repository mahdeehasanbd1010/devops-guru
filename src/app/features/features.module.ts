import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseService } from './services/course.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { AdminApprovalComponent } from './components/admin-approval/admin-approval.component';
import { DatePipe } from '@angular/common';
import { ApprovalService } from './services/approval.service';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { AddCourseByStudentComponent } from './components/add-course-by-student/add-course-by-student.component';
import { CreateResultComponent } from './components/create-result/create-result.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';
import { StudentRegFormComponent } from './components/student-reg-form/student-reg-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddCourseComponent,
    AddStudentComponent,
    ViewResultComponent,
    AdminApprovalComponent,
    ViewCourseComponent,
    ViewStudentComponent,
    AddCourseByStudentComponent,
    CreateResultComponent,
    AdminComponent,
    StudentComponent,
    StudentRegFormComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent,
    AddCourseComponent,
    AddStudentComponent,
    ViewResultComponent,
    AdminApprovalComponent,
    ViewCourseComponent,
    ViewStudentComponent,
    AddCourseByStudentComponent,
    CreateResultComponent,
    AdminComponent,
    StudentComponent
  ],
  providers:[
    CourseService,
    StudentService,
    DatePipe,
    ApprovalService
  ]
})
export class FeaturesModule { }
