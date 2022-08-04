import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { AdminApprovalComponent } from './components/admin-approval/admin-approval.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "admin/course",
    component: ViewCourseComponent
  },
  {
    path: "admin/add/course",
    component:AddCourseComponent
  },
  {
    path: "admin/add/student",
    component:AddStudentComponent
  },
  {
    path: "student/view/result/:studentId",
    component: ViewResultComponent
  },
  {
    path:"admin/appove/course",
    component: AdminApprovalComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
