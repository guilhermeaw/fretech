import { Order, OrderStatus } from '@models/Order';
import { create } from 'zustand';

// TODO: Remover temporary order
const temporaryOrder = {
  id: 1,
  status: OrderStatus.IN_PROGRESS,
  address: {
    cep: '00000-000',
    city: 'Cidade',
    number: 123,
    state: 'UF',
    street: 'Rua',
  },
  receiver: {
    cpf: '000.000.000-00',
    name: 'Nome',
    phone: '(00) 00000-0000',
  },
} as Order;

export const useActiveOrderStore = create(set => ({
  activeOrder: temporaryOrder,
  setActiveOrder: (order: Order) => set({ activeOrder: order }),
  resetActiveOrder: () => set({ activeOrder: null }),
}));
