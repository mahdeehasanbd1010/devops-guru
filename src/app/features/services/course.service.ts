import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  public addCourse(product: any): Observable<any> {
    return this.http.post(environment.dynamicSettings['BaseURL'], product);
  }
  
}
