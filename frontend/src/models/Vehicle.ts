export enum VehicleStatus {
  IN_USE = 'IN_USE',
  AVAILABLE = 'AVAILABLE',
}

export enum VehicleStatusLabel {
  IN_USE = 'Em uso',
  AVAILABLE = 'Disponível',
}

export interface Vehicle {
  id: number;
  model: string;
  plate: string;
  capacity: number;
  status: VehicleStatus;
}
