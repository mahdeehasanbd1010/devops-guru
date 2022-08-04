import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  public addCourse(course: any): Observable<any> {
    return this.http.post(environment.dynamicSettings['BaseURL']+'course', course);
  }
  
  public getAllCourses(): Observable<any> {
    return this.http.get(environment.dynamicSettings['BaseURL']+'course');
  }

  public addCourseByStudent(data: any): Observable<any> {
    return this.http.post(environment.dynamicSettings['BaseURL']+'student/addCourse', data);
  }
}
