import User from '../entities/User';

export interface IUpdateUserDTO {
  id: number;
  userData: Omit<User, 'id'>;
}
