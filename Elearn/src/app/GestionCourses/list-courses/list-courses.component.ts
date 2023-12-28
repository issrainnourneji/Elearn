import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  list:Course[]=[]
  constructor(private coursS : CourseServiceService) { }

  ngOnInit(): void {
    this.getListCours();
   // alert(this.list);
   console.log(this.list)
  }
  getListCours(){
    this.coursS.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);

    }
    )

  }
  deletCours(id:any){
    this.coursS.deletCours(Number(id)).subscribe( () =>this.getListCours() );
  }

}
