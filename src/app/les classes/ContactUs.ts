export interface ContactUs {
    idContact?: number; // Optionnel si auto-incrémenté
    fullname: string;
    email: string;
    subject: Subject;
    message: string;
  }
  
  export enum Subject {
    AccountModifications = 'AccountModifications',
    AccountDesactivation = 'AccountDesactivation',
    Other = 'Other'
  }