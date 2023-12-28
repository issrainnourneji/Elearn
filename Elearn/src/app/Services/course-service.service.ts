import { Injectable } from '@angular/core';
import { Course } from '../Models/Course';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  urlAdd='http://localhost:8089/Kaddem/departement/add-departement';
  urlApi = 'http://localhost:8089/Kaddem/departement/retrieve-all-departements';
  urlDel='http://localhost:8080/departement/delete';
  urlById =  'http://localhost:8089/Kaddem/departement/retrieve-departement';
  urlup='http://localhost:8089/Kaddem/departement/update-departement';
  Course=[];
  constructor(private http: HttpClient) { }
  getData():Observable<Course[]> {
    return this.http.get<Course[]>(this.urlApi);
}
  AddCours(Course: Course):Observable<Course>{
    return this.http.post<Course>(this.urlAdd,Course)
   }
   deletCours(id:Number){
    return this.http.delete(this.urlDel+'/'+id);
  }
  getCoursById(id: Number){
    return this.http.get<Course>(this.urlById+'/'+id);
  }
  UpdatCours(course:Course){
    alert("success update");
    return this.http.put<Course>(this.urlup, course);
  }

  }
