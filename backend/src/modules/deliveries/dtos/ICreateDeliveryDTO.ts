export interface ICreateDeliveryDTO {
  user_id: number;
  vehicle_id: number;
  orders_ids: number[];
  start_date: Date;
  end_date: Date;
}
