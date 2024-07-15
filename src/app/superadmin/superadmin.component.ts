import { Component, OnInit } from '@angular/core';
import { CreditCardRequest } from '../les classes/CreditCardRequest';
import { CreditCardRequestService } from '../Les Services/credit-card-request.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  creditCardRequests: CreditCardRequest[] = [];

  constructor(private creditCardService: CreditCardRequestService) { }

  ngOnInit(): void {
    this.loadCreditCardRequests();
  }

  loadCreditCardRequests(): void {
    this.creditCardService.getAllCreditCardRequests().subscribe(
      requests => {
        this.creditCardRequests = requests;
      },
      error => {
        console.log('Error fetching credit card requests:', error);
      }
    );
  }

  acceptRequest(request: CreditCardRequest): void {
    request.statu = 'Accepté'; 
    this.updateRequest(request);
  }

  refuseRequest(request: CreditCardRequest): void {
    request.statu = 'Refusé'; 
    this.updateRequest(request);
  }

  updateRequest(request: CreditCardRequest): void {
    this.creditCardService.editCreditCardRequestById(request.idCreditCard!, request).subscribe(
      updatedRequest => {
        console.log('Credit card request updated successfully', updatedRequest);
        this.loadCreditCardRequests();
      },
      error => {
        console.error('Error updating credit card request', error);
      }
    );
  }
}
