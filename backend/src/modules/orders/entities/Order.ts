import {
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from 'typeorm';

export enum StatusRole {
  PENDENTE = 'pending',
  CANCELADO = 'canceled',
  ENTREGUE = 'delivered'
}

@Entity('orders')
export default class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  number: string;

  @Column()
  street: string;

  @Column('enum', { enum: StatusRole })
  status: StatusRole;

  @Column()
  asignature_url: string;

  @CreateDateColumn()
  entry_date: Date;

  @CreateDateColumn()
  exit_date: Date; 

  @Column()
  name_receiver: string;

  @Column()
  cpf_receiver: string;
}
