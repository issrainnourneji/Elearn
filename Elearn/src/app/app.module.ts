import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoursesComponent } from './GestionCourses/list-courses/list-courses.component';
import { AddCourseComponent } from './GestionCourses/add-course/add-course.component';
import { GestionCoursesModule } from './GestionCourses/gestion-courses.module';


@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GestionCoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
