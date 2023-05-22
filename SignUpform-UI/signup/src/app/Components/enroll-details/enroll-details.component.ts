import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import{jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-enroll-details',
  templateUrl: './enroll-details.component.html',
  styleUrls: ['./enroll-details.component.css']
})


export class EnrollDetailsComponent implements OnInit {
  EnrollData!:any;
  
  constructor(private service:StudentsService) { }

  ngOnInit(): void {
    this.getAllEnrolls()
  }
  getAllEnrolls(){
    this.service.getAllEnrolls().subscribe(res=>{
      this.EnrollData=res;
    })
  }
  
  
    
  title = 'Enrollements ';
public convertToPDF()
{
html2canvas(document.getElementById("content")!).then(canvas => {
// Few necessary setting options
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var width = pdf.internal.pageSize.getWidth();
var height = canvas.height * width / canvas.width;
pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
pdf.save('output.pdf'); // Generated PDF
});
}
  
}
