import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public addStudent(product: any): Observable<any> {
    return this.http.post(environment.dynamicSettings['BaseURL']+'student', product);
  }
  public getAllStudents(): Observable<any> {
    return this.http.get(environment.dynamicSettings['BaseURL']+'student');
  }
}
