import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  Produit!:Course[];
  constructor(private fb:FormBuilder ,private R:Router,  private coursS: CourseServiceService) { }

  ngOnInit(): void {
  }

  reactiveForm = this.fb.group({
    picture:['',[Validators.required]],
    title:['',[Validators.required]],
    price:['',[Validators.required]]


    });
  Add(){

    this.coursS.AddCours(this.reactiveForm.value).subscribe(data =>{
     console.log('add');
     this.R.navigate(['listCourses'])

    })
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

