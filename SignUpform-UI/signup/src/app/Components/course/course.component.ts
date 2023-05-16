import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/Course.model';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
formValue !:FormGroup;
courseModelObj:Course= new Course();
courseData!:any;
showAdd!:boolean;
showUpdate!:boolean;


  constructor(private formbuilder:FormBuilder,private router:Router,private service:StudentsService) { }

  ngOnInit(): void {
  
  this.formValue=this.formbuilder.group({
    courseId:[''],
    courseName:[''],
    facultyName:[''],
    courseprice:['']
  })
  this.getAllCourses();
  }
  clickAddCourse(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  addCourses(){
    this.courseModelObj.courseId=this.formValue.value.courseId;
    this.courseModelObj.courseName=this.formValue.value.courseName;
    this.courseModelObj.facultyName=this.formValue.value.facultyName;
    this.courseModelObj.courseprice=this.formValue.value.courseprice;
    console.log(this.courseModelObj);
    this.service.addCourse(this.courseModelObj)
     .subscribe(res=>{
      console.log(res);
      alert("course added sucessfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCourses();
     },
     err=>{
      alert("something went Wrong")
     })
  }
  getAllCourses(){
    this.service.getAllCourse()
     .subscribe(res=>{
      this.courseData=res;
    })
  }
  deleteflight(row:any){
    this.service.deleteCourse(row.CourseId)
    .subscribe(res=>{
      alert("course deleted");
      this.getAllCourses();
    })
  }
}
