import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseService } from './services/course.service';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    CoursesComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminComponent,
    HomeComponent
  ],
  providers:[
    CourseService
  ]
})
export class FeaturesModule { }
