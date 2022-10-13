import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export enum UserRole {
    ADMINISTRATOR = 'administrator',
    DELIVERYMAN = 'deliveryman',
}

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column('enum', { enum: UserRole })
  role: UserRole;

  @Column()
  @Exclude()
  phone: number;
}
