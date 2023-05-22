import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student.model';
import { StudentsService } from 'src/app/Services/students.service';
import { FormBuilder,Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  invalidLogin!: boolean;
  SignUpform  = new FormGroup({
    firstName : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    lastName : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email : new FormControl('',[Validators.required, Validators.email, Validators.minLength(9), Validators.maxLength(50)]),
    phone : new FormControl('' , [Validators.required ,Validators.minLength(10),Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required),
    state : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
    dob : new FormControl('',Validators.required)
  });
  student:any=null;
  // submitted=false;
  // get firstName(){
  //   return this.SignUpform.get('firstname')
  // }
  // get lastName(){
  //   return this.SignUpform.get('lastname')
  // }
  // get email(){
  //   return this.SignUpform.get('email')
  // }
  // get phone(){
  //   return this.SignUpform.get('phone')
  // }
  // get gender(){
  //   return this.SignUpform.get('gender')
  // }
  // get state(){
  //   return this.SignUpform.get('state')
  // }
  // get city(){
  //   return this.SignUpform.get('city')
  // }
  // get dob(){
  //   return this.SignUpform.get('dob')
  // }

 
  constructor(private stdservice:StudentsService,private router:Router) { }

  ngOnInit(): void {
    
    
  }
  AddStudent(){
    console.log(this.SignUpform.value);
    this.stdservice.addStudent(this.SignUpform.value)
                   .subscribe(
                    data=>{
                      this.student=data;
                      this.invalidLogin=false;
                      alert("you have registered sucessfully")
                    },
                    err=>{
                      alert("something went wrong"+err);
                    console.log(err);
                    }
                    
                   );
    
  }
get f(){
  return this.SignUpform.controls;
}
}
