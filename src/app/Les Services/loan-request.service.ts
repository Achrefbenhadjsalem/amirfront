import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanRequest } from '../les classes/Loan_Request';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestService {
  private baseUrl = 'http://localhost:8081/LoanRequest';

  constructor(private http: HttpClient) { }

  addLoanRequest(loanRequest: LoanRequest): Observable<LoanRequest> {
    return this.http.post<LoanRequest>(`${this.baseUrl}/AddLoanRequest`, loanRequest);
  }

  deleteLoanRequestById(idCard: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteLoanRequestById/${idCard}`);
  }

  editLoanRequestById(idCard: number, loanRequest: LoanRequest): Observable<LoanRequest> {
    return this.http.put<LoanRequest>(`${this.baseUrl}/editLoan_RequestByID/${idCard}`, loanRequest);
  }

  getAllLoanRequests(): Observable<LoanRequest[]> {
    return this.http.get<LoanRequest[]>(`${this.baseUrl}/getAllLoanRequest/`);
  }
}
