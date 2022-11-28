import { Exclude, Expose } from 'class-transformer';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

export enum StatusRole {
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

  @Column('enum', { enum: StatusRole })
  status: StatusRole;

  @Column({ nullable: true })
  asignature_url?: string;

  @CreateDateColumn()
  entry_date: Date;

  @CreateDateColumn({ nullable: true })
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

  @Expose({ name: 'address' })
  getAddress(): Address {
    return {
      cep: this.cep,
      state: this.state,
      city: this.city,
      number: Number(this.number),
      street: this.street,
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
