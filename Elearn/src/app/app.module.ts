import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoursesComponent } from './GestionCourses/list-courses/list-courses.component';
import { AddCourseComponent } from './GestionCourses/add-course/add-course.component';
import { GestionCoursesModule } from './GestionCourses/gestion-courses.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GestionCoursesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
