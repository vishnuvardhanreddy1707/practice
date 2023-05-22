import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
StudentData!:any;
  constructor(private service:StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

getAllStudents(){
  this.service.getAllStudents().subscribe(res=>{
    this.StudentData=res;
  })

}

}
