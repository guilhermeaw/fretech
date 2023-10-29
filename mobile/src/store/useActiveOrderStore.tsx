import { Order, OrderStatus } from '@models/Order';
import { create } from 'zustand';

// TODO: Remover temporary order
const temporaryOrder = {
  id: 444,
  status: OrderStatus.IN_PROGRESS,
  address: {
    cep: '95914-500',
    city: 'Lajeado',
    number: 123,
    state: 'RS',
    street: 'Rua Central',
  },
  receiver: {
    cpf: '000.000.000-00',
    name: 'Murilo Fank',
    phone: '(00) 00000-0000',
  },
} as Order;

type ActiveOrderStore = {
  activeOrder: Order | null;
  resetActiveOrder: () => void;
  setActiveOrder: (order: Order) => void;
};

export const useActiveOrderStore = create<ActiveOrderStore>(set => ({
  activeOrder: temporaryOrder,
  resetActiveOrder: () => set({ activeOrder: null }),
  setActiveOrder: (order: Order) => set({ activeOrder: order }),
}));
