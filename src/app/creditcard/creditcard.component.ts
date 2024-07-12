import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit{
  creditCardForm!: FormGroup; // Assurez-vous que creditCardForm est correctement déclaré

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      annualIncome: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.creditCardForm.valid) {
      // Logique pour envoyer le formulaire au serveur
      console.log(this.creditCardForm.value);
    } else {
      console.error('Formulaire invalide');
    }
  }
}
