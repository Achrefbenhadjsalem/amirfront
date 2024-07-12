import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class requestsComponent {

}



// requests: any[] = []; // Tableau pour stocker les demandes récupérées du service

// constructor(private requestService: RequestService) { }

// ngOnInit(): void {
//   // Au chargement du composant, récupérer les demandes depuis le service
//   this.fetchRequests();
// }

// fetchRequests() {
//   this.requestService.getRequests().subscribe(
//     (data: any[]) => {
//       this.requests = data; // Assigner les données récupérées au tableau requests
//     },
//     (error) => {
//       console.error('Erreur lors de la récupération des demandes:', error);
//     }
//   );
// }

// viewRequest(request: any) {
//   // Implémenter l'affichage détaillé de la demande (optionnel)
//   console.log('Voir la demande:', request);
// }

// approveRequest(request: any) {
//   // Implémenter l'approbation de la demande (optionnel)
//   console.log('Approuver la demande:', request);
// }

// rejectRequest(request: any) {
//   // Implémenter le rejet de la demande (optionnel)
//   console.log('Rejeter la demande:', request);
// }