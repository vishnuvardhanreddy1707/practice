import { Injectable } from '@angular/core';
import { Course } from '../Models/Course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
MyCourseList:Course[]=[];
dummy:Course[]=[];

  constructor() { }

  SaveCourseData(course:Course){
    this.MyCourseList.push(course);
  }

  CourseData(){
    return this.MyCourseList;
  }
}
