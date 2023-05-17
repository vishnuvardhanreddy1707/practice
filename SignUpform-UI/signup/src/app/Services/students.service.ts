import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../Models/Student.model';
import{Course}from '../Models/Course.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  readonly APIUrl ="https://localhost:7044/api"
 
  constructor(private http:HttpClient) { }


  getAllStudents():Observable<Student[]>{
   return this.http.get<Student[]>(this.APIUrl + '/Student/GetAllStudents()')
  }
  addStudent(val:any){
    return this.http.post<Student>(this.APIUrl+'/Student/AddStudent',val);
  }

  // course methods//
  getAllCourse():Observable<Course[]>{
    return this.http.get<Course[]>(this.APIUrl+'/Course/GetAllCourses');
  }
  addCourse(val:any){
    return this.http.post<Course>(this.APIUrl+'/Course/AddCourses',val)
  }
 deleteCourse(id:number){
  return this.http.delete<Course>(this.APIUrl+'/Course/DeleteCourse?CourseId='+id)
 }

 updateCourse(val:any){
  return this.http.put<any>(this.APIUrl+'/Course/UpdateCourse',val)
 }
 searchCourse(CorN:any){
  return this.http.get<Course>(this.APIUrl+'/Course/searchCourse?CourseName='+CorN)
 }

}
