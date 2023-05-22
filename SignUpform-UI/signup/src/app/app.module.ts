import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './Components/Students/students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './components/course/course.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { EnrollDetailsComponent } from './components/enroll-details/enroll-details.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    CourseComponent,
    StudentDetailsComponent,
    CourseDetailsComponent,
    EnrollDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
