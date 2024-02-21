import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  myId=0;
  myCours!:Course;
  reactiveForm=this.fb.group(
    {
      idCourse:[''],
      picture:[''],
      title:[''],
      price:['']
    }
  );
  constructor(private AR:ActivatedRoute,private fb:FormBuilder, private R:Router, private ServiceCours:CourseServiceService ) { }

  ngOnInit(): void {
    this.ServiceCours.getCoursById(this.AR.snapshot.params["idCourse"]).subscribe(data=>{
      this.myCours=data;


      this.reactiveForm.patchValue({idCourse: this.myCours.idCourse ,photo:this.myCours.picture,
        title:this.myCours.title,price:this.myCours.price});
      console.log(this.myCours.picture,this.myCours.title,this.myCours.price)
    });
}
  update(){
    this.ServiceCours.UpdatCours(this.reactiveForm.value).subscribe(data=>{

      this.R.navigate(['listCourses']);
      }
      )
  }
  get idCourse(){
    return this.reactiveForm.get('idCourse')
  }
  get picture(){
    return this.reactiveForm.get('picture');

  }
  get title(){
    return this.reactiveForm.get('title');

  }
  get price(){
    return this.reactiveForm.get('price');

  }
}
