import { Role } from './Role.enum';

export interface User {
    id: number;
    name: string;
    phone: String;
    email: string;
    password: String;
    role: Role;
  }
