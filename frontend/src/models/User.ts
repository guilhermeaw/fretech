export enum UserRole {
  ADMINISTRATOR = 'administrator',
  DELIVERYMAN = 'deliveryman',
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
}
