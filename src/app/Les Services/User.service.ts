import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../les classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*addUser(user: User) {
    throw new Error('Method not implemented.');
  }*/
  private apiUrl = 'http://localhost:8081/auth';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
  /*deleteUser(id: number): Observable<any> {
    return this.http.delete(`${hythis.baseUrl}/${id}`);
  }

  updateUser(id: number, updatedUser: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, updatedUser);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
export { User };*/