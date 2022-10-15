// import {
//     Column,
//     CreateDateColumn,
//     Entity,
//     ManyToOne,
//     PrimaryGeneratedColumn,
//     JoinColumn,
//   } from 'typeorm';

// import User from '../../users/entities/User';
// import Vehicle from '../../vehicles/entities/Vehicle';

// @Entity('deliveries')
// export default class Delivery {
//   @PrimaryGeneratedColumn('increment')
//   id: number;

//   @ManyToOne(() => User, { eager: true })
//   @JoinColumn({ name: 'id' })
//   user_id: User;

//   @ManyToOne(() => Vehicle, { eager: true })
//   @JoinColumn({ name: 'id' })
//   vehicle_id: Vehicle;

//   @CreateDateColumn()
//   start_date: Date;

//   @CreateDateColumn()
//   end_date: Date;
// }
