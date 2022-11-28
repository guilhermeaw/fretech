import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicles')
export default class Vehicle {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  plate: string;

  @Column()
  model: string;

  @Column()
  capacity: number;
}
