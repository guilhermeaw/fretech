interface OrderAddress {
  cep: string;
  city: string;
  state: string;
  street: string;
  number: number;
  complement?: string;
}

interface OrderReceiver {
  name: string;
  phone: string;
  cpf: string;
  email: string;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
  WITHDRAWN = 'WITHDRAWN',
}

export enum OrderStatusLabel {
  PENDING = 'Pendente',
  IN_PROGRESS = 'Em andamento',
  DELIVERED = 'Entregue',
  CANCELED = 'Cancelado',
  WITHDRAWN = 'Retirado',
}

export interface Order {
  id: number;
  address: OrderAddress;
  receiver: OrderReceiver;
  status: OrderStatus;
  signature_url?: string;
}
