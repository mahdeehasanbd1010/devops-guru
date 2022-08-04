import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseService } from './services/course.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewResultComponent } from './components/view-result/view-result.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    CoursesComponent,
    AddCourseComponent,
    AddStudentComponent,
    ViewResultComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    AdminComponent,
    HomeComponent,
    CoursesComponent,
    AddCourseComponent,
    AddStudentComponent,
    ViewResultComponent
  ],
  providers:[
    CourseService,
    StudentService
  ]
})
export class FeaturesModule { }
