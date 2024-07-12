import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../Les Services/Transaction.service';
import { BankTransaction } from '../les classes/BankTransaction';


@Component({
  selector: 'app-transfer-log',
  templateUrl: './transfer-log.component.html',
  styleUrls: ['./transfer-log.component.css']
})
export class TransferLogComponent implements OnInit {
  transactionLogEntries: BankTransaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe(
      (data: BankTransaction[]) => {
        this.transactionLogEntries = data;
      },
      error => {
        console.error('Error loading transactions', error);
      }
    );
  }
}
