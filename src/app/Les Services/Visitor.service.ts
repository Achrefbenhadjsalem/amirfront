import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visitor } from '../les classes/Visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private baseUrl = 'http://localhost:8081/api/visitors';

  constructor(private http: HttpClient) { }

  addVisitor(visitor: Visitor): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, visitor);
  }

  deleteVisitor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateVisitor(id: number, updatedVisitor: Visitor): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, updatedVisitor);
  }

  getVisitor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
export { Visitor };

