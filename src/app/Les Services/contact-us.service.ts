import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactUs } from '../les classes/ContactUs'; // Assurez-vous d'importer la classe ContactUs appropriée

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private baseUrl = 'http://localhost:8081/ContactUs'; // Assurez-vous que l'URL de base correspond à votre backend

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      console.log("Erreur lors de la récupération du token");
      return new HttpHeaders({});
    }
  }

  addContactUs(contactUs: ContactUs): Observable<ContactUs> {
    return this.http.post<ContactUs>(`${this.baseUrl}/AddContactUs`, contactUs, { headers: this.getAuthHeaders() });
  }

  getAllContactUs(): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>(`${this.baseUrl}/getAllContactUs`, { headers: this.getAuthHeaders() });
  }

  editContactUsById(id: number, contactUs: ContactUs): Observable<ContactUs> {
    return this.http.put<ContactUs>(`${this.baseUrl}/editContactUsByID/${id}`, contactUs, { headers: this.getAuthHeaders() });
  }

  deleteContactUsById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteContactUsById/${id}`, { headers: this.getAuthHeaders() });
  }
}
