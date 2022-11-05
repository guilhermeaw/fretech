import { deliverymansHandlers } from './deliverymans';
import { occurrencesHandlers } from './occurrences';
import { ordersHandlers } from './orders';
import { vehiclesHandlers } from './vehicles';

export const handlers = [
  ...deliverymansHandlers,
  ...ordersHandlers,
  ...occurrencesHandlers,
  ...vehiclesHandlers,
];
