import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {path : '' , component : ListCoursesComponent},
  {path :'add' , component : AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCoursesRoutingModule { }
