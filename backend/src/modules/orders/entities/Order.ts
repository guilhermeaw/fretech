import { Exclude, Expose } from 'class-transformer';
import Delivery from 'modules/deliveries/entities/Delivery';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

export enum OrderStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
  WITHDRAWN = 'WITHDRAWN',
}

interface Address {
  cep: string;
  state: string;
  city: string;
  number: number;
  street: string;
  complement?: string;
}

interface Receiver {
  name: string;
  cpf: string;
  phone: string;
}

@Entity('orders')
export default class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Exclude()
  @Column()
  cep: string;

  @Exclude()
  @Column()
  state: string;

  @Exclude()
  @Column()
  city: string;

  @Exclude()
  @Column()
  number: string;

  @Exclude()
  @Column()
  street: string;

  @Exclude()
  @Column({ nullable: true })
  complement?: string;

  @Column('enum', { enum: OrderStatus })
  status: OrderStatus;

  @Column({ nullable: true })
  asignature_url?: string;

  @CreateDateColumn()
  entry_date: Date;

  @Column({ nullable: true })
  exit_date?: Date;

  @Exclude()
  @Column()
  name_receiver: string;

  @Exclude()
  @Column()
  cpf_receiver: string;

  @Exclude()
  @Column()
  phone_receiver: string;

  @ManyToMany(() => Delivery, delivery => delivery.orders)
  @JoinTable()
  deliveries: Delivery[];

  @Expose({ name: 'address' })
  getAddress(): Address {
    return {
      cep: this.cep,
      state: this.state,
      city: this.city,
      number: Number(this.number),
      street: this.street,
      complement: this.complement,
    };
  }

  @Expose({ name: 'receiver' })
  getReceiver(): Receiver {
    return {
      name: this.name_receiver,
      cpf: this.cpf_receiver,
      phone: this.phone_receiver,
    };
  }
}
