import { deliverymansHandlers } from './deliverymans';
import { ordersHandlers } from './orders';

export const handlers = [...deliverymansHandlers, ...ordersHandlers];
