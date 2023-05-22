import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './Components/Students/students-list/students-list.component';
import { CourseComponent } from './components/course/course.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { EnrollDetailsComponent } from './components/enroll-details/enroll-details.component';

const routes: Routes = [
  {
    path:'',
    component:StudentsListComponent
  },
  {
    path:'students',
    component:StudentsListComponent
  },
  {
    path:'Course',
    component:CourseComponent
  },
  {
    path:'student-details',
    component:StudentDetailsComponent
  },
  {
    path:'course-details',
    component:CourseDetailsComponent
  },
  {
    path:'enroll-details',
    component:EnrollDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
