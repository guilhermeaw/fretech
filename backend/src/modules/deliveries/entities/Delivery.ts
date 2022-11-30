import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  ManyToMany,
} from 'typeorm';

import Order from 'modules/orders/entities/Order';
import User from '../../users/entities/User';
import Vehicle from '../../vehicles/entities/Vehicle';

@Entity('deliveries')
export default class Delivery {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  deliveryman: User;

  @Column()
  vehicle_id: number;

  @ManyToOne(() => Vehicle, { eager: true })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle;

  @ManyToMany(() => Order, order => order.deliveries, { eager: true })
  orders: Order[];

  @CreateDateColumn({ nullable: true })
  start_date?: Date;

  @CreateDateColumn({ nullable: true })
  end_date?: Date;
}
