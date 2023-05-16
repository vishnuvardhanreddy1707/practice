import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './Components/Students/students-list/students-list.component';
import { CourseComponent } from './components/course/course.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
