import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/Models/Course.model';
import { CourseEnrolls } from 'src/app/Models/CourseEnrolls.model';
import { EnrollService } from 'src/app/Services/enroll.service';
import { FooterserviceService } from 'src/app/Services/footerservice.service';
import { NavService } from 'src/app/Services/nav.service';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  formValue!:FormGroup;
  CourseData!:any;
  coursedata:any;
  StudentId:number=2;
  courseDetail:Course[]=[];
  EnrollDetail:CourseEnrolls[]=[];

  CourseE:CourseEnrolls={
    ceId:0,
    courseId:0,
    courseName:'',
    facultyName:'',
    studentId:0,

  };


  constructor(private fb:FormBuilder,private service:StudentsService,private nav:NavService,private fs:FooterserviceService,private enroll:EnrollService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.nav.doSomethingElseUseful();
    this.fs.show();
    this.fs.doSomethingElseUseful();
    this.formValue=this.fb.group({courseName:['']});
    this.getAllCourse();
  }
  searchCourse(){
    this.service.searchCourse(this.formValue.value.courseName).subscribe(res=>{
      console.log(res);
      this.CourseData=res;
      if(res==null||Object.keys(res).length===0){
        alert("No Course Found")
      }
      this.formValue.reset();
    },
     error=>{
      alert("No Course Found")
     }
    )
  }
  getAllCourse(){
    this.service.getAllCourse().subscribe(res=>{
      this.coursedata=res;
    })
  }
Enroll(courselst:any){
  for(var x of courselst){
    (this.CourseE.courseId=x.courseId),
    (this.CourseE.courseName=x.courseName),
    (this.CourseE.facultyName=x.facultyName),
    (this.CourseE.studentId=this.StudentId);
    this.service.addEnroll(this.CourseE).subscribe((data)=>{
      console.log(data);
      alert("Enrolled Sucessfully")
    })


  }


}
GetCourseData(){
  this.courseDetail=this.enroll.CourseData();
  
}
  
}
