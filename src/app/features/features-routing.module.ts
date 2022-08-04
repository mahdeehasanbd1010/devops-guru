import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "admin/courses",
    component:CoursesComponent
  },
  {
    path: "admin/add/course",
    component:AddCourseComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
