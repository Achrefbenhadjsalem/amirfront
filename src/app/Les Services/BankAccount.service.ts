import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankAccount } from '../les classes/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private baseUrl = 'http://localhost:8081/api/bank-accounts';

  constructor(private http: HttpClient) { }

  addBankAccount(bankAccount: BankAccount): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, bankAccount);
  }

  deleteBankAccount(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateBankAccount(id: number, bankAccount: BankAccount): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, bankAccount);
  }

  getBankAccount(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }  
}
export { BankAccount };

