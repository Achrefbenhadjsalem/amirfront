import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCardRequest } from '../les classes/CreditCardRequest';

@Injectable({
  providedIn: 'root'
})
export class CreditCardRequestService {

  private baseUrl = 'http://localhost:8081/CreditCard';

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

  addCreditCardRequest(request: CreditCardRequest): Observable<CreditCardRequest> {
    return this.http.post<CreditCardRequest>(`${this.baseUrl}/AddCredit_Card_Request`, request, { headers: this.getAuthHeaders() });
  }

  getAllCreditCardRequests(): Observable<CreditCardRequest[]> {
    return this.http.get<CreditCardRequest[]>(`${this.baseUrl}/getAllCredit_Card_Request`, { headers: this.getAuthHeaders() });
  }

  editCreditCardRequestById(id: number, request: CreditCardRequest): Observable<CreditCardRequest> {
    return this.http.put<CreditCardRequest>(`${this.baseUrl}/editCredit_Card_RequestByID/${id}`, request, { headers: this.getAuthHeaders() });
  }

  deleteCreditCardRequestById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteCredit_Card_RequestById/${id}`, { headers: this.getAuthHeaders() });
  }
}
