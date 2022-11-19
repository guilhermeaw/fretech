import { User } from './User';
import { Order } from './Order';
import { Vehicle } from './Vehicle';

export interface Delivery {
  id: number;
  start_date: string;
  end_date: string;
  vehicle: Vehicle;
  orders: Order[];
  deliveryman: User;
}
