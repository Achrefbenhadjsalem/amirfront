export interface BankTransaction {
    idTransaction?: number; // Optionnel si auto-incrémenté
    amount: number;
    Date: Date;
    Type: string;
    cin: number;
    name: string;
    rib: string;
    bankAccount: { id: number };  // Correspond à la relation avec BankAccount
  }