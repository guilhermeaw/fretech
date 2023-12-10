import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('errors')
export class Error {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
