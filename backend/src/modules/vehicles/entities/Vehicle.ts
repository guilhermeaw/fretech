import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('vehicles')
export default class Vehicle {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  plate: string;

  @Column()
  model: string;

  @Column()
  @Exclude()
  volume: number;
}
