export interface LoanRequest {
    idCard?: number;  // Optionnel si auto-incrémenté
    nssf: string;
    annualReceipt: string;
    accountStatement: string;
    quittance: string;
    rne: string;
    statue: string;
    theBalanceSheets: string;
  }