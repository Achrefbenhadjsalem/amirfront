import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankStatement } from '../les classes/BankStatement';

@Injectable({
  providedIn: 'root'
})
export class BankStatementService {
  private baseUrl = 'http://localhost:8081/api/bank-statements';

  constructor(private http: HttpClient) { }

  addBankStatement(bankStatement: BankStatement): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, bankStatement);
  }

  deleteBankStatement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateBankStatement(id: number, bankStatement: BankStatement): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, bankStatement);
  }

  getBankStatement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
