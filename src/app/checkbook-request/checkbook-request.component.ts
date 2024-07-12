import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbook-request',
  templateUrl: './checkbook-request.component.html',
  styleUrls: ['./checkbook-request.component.css']
})
export class CheckbookRequestComponent implements OnInit {
  checkbookRequestForm!: FormGroup; // Assurez-vous que la variable est correctement déclarée

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkbookRequestForm = this.fb.group({
      quantity: ['', [Validators.required, Validators.max(5)]],
      // Ajoutez d'autres champs si nécessaire
    });
  }

  onSubmit(): void {
    if (this.checkbookRequestForm.valid) {
      // Soumettre le formulaire
      console.log(this.checkbookRequestForm.value);
    } else {
      console.error('Le formulaire est invalide');
    }
  }

  // Définition des getters pour accéder facilement aux contrôles du formulaire dans le template HTML
  public get quantityControl() {
    return this.checkbookRequestForm.get('quantity');
  }
}
