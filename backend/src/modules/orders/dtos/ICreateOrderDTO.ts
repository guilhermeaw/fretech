import { OrderStatus } from '../entities/Order';

export type ICreateOrderDTO = {
  cep: string;
  state: string;
  city: string;
  number: string;
  street: string;
  status: OrderStatus;
  entry_date: Date;
  exit_date: Date;
  name_receiver: string;
  cpf_receiver: string;
  phone_receiver: string;
  email_receiver: string;
};
