import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Checkbook } from '../les classes/Checkbook';

@Injectable({
  providedIn: 'root'
})
export class CheckbookService {
  private baseUrl = 'http://localhost:8081/Checkbook';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      console.log("Error saving the token");
      return new HttpHeaders({});
    }
  }

  getAllCheckbooks(): Observable<Checkbook[]> {
    return this.http.get<Checkbook[]>(`${this.baseUrl}/getAllCheckbook`, { headers: this.getAuthHeaders() });
  }

  addCheckbook(checkbook: Checkbook): Observable<Checkbook> {
    return this.http.post<Checkbook>(`${this.baseUrl}/AddCheckbook`, checkbook, { headers: this.getAuthHeaders() });
  }

  editCheckbookByID(id: number, checkbook: Checkbook): Observable<Checkbook> {
    return this.http.put<Checkbook>(`${this.baseUrl}/editCheckbookByID/${id}`, checkbook, { headers: this.getAuthHeaders() });
  }

  deleteCheckbookByID(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteCheckbookById/${id}`, { headers: this.getAuthHeaders() });
  }
}
