import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../Models/Student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  readonly APIUrl ="https://localhost:7044/api"
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }


  getAllStudents():Observable<Student[]>{
   return this.http.get<Student[]>(this.baseApiUrl + '/api/Student/GetAllStudents()')
  }
  addStudent(val:any){
    return this.http.post<Student>(this.APIUrl+'/Student/AddStudent',val);
  }
}
