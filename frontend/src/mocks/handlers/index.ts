import { deliverymansHandlers } from './deliverymans';
import { occurrencesHandlers } from './occurrences';
import { ordersHandlers } from './orders';

export const handlers = [
  ...deliverymansHandlers,
  ...ordersHandlers,
  ...occurrencesHandlers,
];
