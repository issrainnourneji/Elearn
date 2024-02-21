import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {path : '' , component : ListCoursesComponent},
  {path :'add' , component : AddCourseComponent},
  {path :'update/:idCourse' , component : UpdateCourseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCoursesRoutingModule { }
