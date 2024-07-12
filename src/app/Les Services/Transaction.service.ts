import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankTransaction } from '../les classes/BankTransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8081/Transaction';

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

  addTransaction(transaction: BankTransaction): Observable<string> {
    const headers = this.getAuthHeaders();
    return this.http.post<string>(`${this.apiUrl}/add`, transaction, { headers });
  }

  deleteTransaction(idTransaction: number): Observable<string> {
    const headers = this.getAuthHeaders();
    return this.http.delete<string>(`${this.apiUrl}/delete/${idTransaction}`, { headers });
  }

  updateTransaction(idTransaction: number, transaction: BankTransaction): Observable<string> {
    const headers = this.getAuthHeaders();
    return this.http.put<string>(`${this.apiUrl}/update/${idTransaction}`, transaction, { headers });
  }

  getTransaction(idTransaction: number): Observable<BankTransaction> {
    const headers = this.getAuthHeaders();
    return this.http.get<BankTransaction>(`${this.apiUrl}/${idTransaction}`, { headers });
  }

  getAllTransactions(): Observable<BankTransaction[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<BankTransaction[]>(`${this.apiUrl}/fetchAll`, { headers });
  }
}
