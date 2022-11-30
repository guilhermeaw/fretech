import { ICreateOrderDTO } from './ICreateOrderDTO';

export type IUpdateOrderDTO = ICreateOrderDTO & {
  id: number;
};
