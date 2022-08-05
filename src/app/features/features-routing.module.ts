import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { AdminApprovalComponent } from './components/admin-approval/admin-approval.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { AddCourseByStudentComponent } from './components/add-course-by-student/add-course-by-student.component';
import { CreateResultComponent } from './components/create-result/create-result.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';

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
    path: "student",
    component: StudentComponent
  },
  {
    path: "admin/course",
    component: ViewCourseComponent
  },
  {
    path: "admin/student",
    component: ViewStudentComponent
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
    path: "admin/set/student/garde",
    component:CreateResultComponent
  },
  {
    path:"admin/appove/course",
    component: AdminApprovalComponent
  },
  {
    path: "student/add/course",
    component: AddCourseByStudentComponent
  },
  {
    path: "student/result/:studentId",
    component: ViewResultComponent
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
