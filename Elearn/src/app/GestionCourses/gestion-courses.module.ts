import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCoursesRoutingModule } from './gestion-courses-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';


@NgModule({
  declarations: [
    ListCoursesComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionCoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GestionCoursesModule { }
