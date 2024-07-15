import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCardRequestService } from '../Les Services/credit-card-request.service';
import { CreditCardRequest } from '../les classes/CreditCardRequest';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  creditCardForm!: FormGroup;
  successMessage: string = '';
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private creditCardService: CreditCardRequestService) { }

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      annualRevenue: ['', Validators.required],
      adress: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.creditCardForm.valid) {
      const request: CreditCardRequest = {
        ...this.creditCardForm.value,
        statu: 'En cours' // Default status set here
      };

      this.creditCardService.addCreditCardRequest(request).subscribe(
        (response) => {
          console.log('Credit card request added successfully', response);
          this.successMessage = 'Your credit card request has been successfully submitted.';
          this.isFormSubmitted = true;
          this.creditCardForm.reset(); // Optionally reset the form after successful submission
        },
        (error) => {
          console.error('Error adding credit card request', error);
        }
      );
    } else {
      console.error('Invalid form');
    }
  }

  get fullnameControl() {
    return this.creditCardForm.get('fullname');
  }

  get emailControl() {
    return this.creditCardForm.get('email');
  }

  get phoneNumberControl() {
    return this.creditCardForm.get('phoneNumber');
  }

  get annualRevenueControl() {
    return this.creditCardForm.get('annualRevenue');
  }

  get adressControl() {
    return this.creditCardForm.get('adress');
  }
}
