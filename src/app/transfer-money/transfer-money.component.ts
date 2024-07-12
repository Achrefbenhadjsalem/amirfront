import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankTransaction } from '../les classes/BankTransaction';
import { TransactionService } from '../Les Services/Transaction.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})

export class TransferMoneyComponent implements OnInit {
  transferForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      cin: ['', Validators.required],
      name: ['', Validators.required],
      rib: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  confirmTransfer(): void {
    if (this.transferForm.valid) {
      const transaction: BankTransaction = this.transferForm.value;
      this.transactionService.addTransaction(transaction).subscribe(
        response => {
          console.log('Transaction successful:', response);
          this.transferForm.reset(); // Réinitialisez le formulaire après une transaction réussie
        },
        error => {
          console.error('Transaction error:', error);
          this.errorMessage = 'Error while processing transaction. Please try again.';
        }
      );
    }
  }
}