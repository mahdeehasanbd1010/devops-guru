import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<any> {
    return this.http.get(environment.dynamicSettings['BaseURL']+'course');
  }
}
