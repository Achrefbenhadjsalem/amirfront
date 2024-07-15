import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckbookService } from '../Les Services/checkbook.service';
import { Checkbook } from '../les classes/Checkbook';

@Component({
  selector: 'app-checkbook-request',
  templateUrl: './checkbook-request.component.html',
  styleUrls: ['./checkbook-request.component.css']
})
export class CheckbookRequestComponent implements OnInit {
  checkbookRequestForm!: FormGroup;
  successMessage: string = '';
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private checkbookService: CheckbookService) { }

  ngOnInit(): void {
    this.checkbookRequestForm = this.fb.group({
      quantity: ['', [Validators.required, Validators.max(5)]],
    });
  }

  onSubmit(): void {
    if (this.checkbookRequestForm.valid) {
      const checkbook: Checkbook = {
        quantityCheck: this.checkbookRequestForm.value.quantity
      };

      this.checkbookService.addCheckbook(checkbook).subscribe(
        (response) => {
          console.log('Checkbook added successfully', response);
          this.successMessage = 'Your checkbook request has been successfully submitted. We will process your request promptly.';
          this.isFormSubmitted = true;
        },
        (error) => {
          console.error('Error adding checkbook', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide');
    }
  }

  public get quantityControl() {
    return this.checkbookRequestForm.get('quantity');
  }
}
