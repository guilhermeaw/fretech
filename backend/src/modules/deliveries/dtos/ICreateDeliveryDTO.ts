export interface ICreateTransactionDTO {
  id: number;
  user_id: number;
  vehicle_id: string;
  start_date: Date;
  end_date: Date
}
