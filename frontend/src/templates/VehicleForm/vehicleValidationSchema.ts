import * as zod from 'zod';

export const vehicleValidationSchema = zod.object({
  model: zod.string().min(1, 'Informe o modelo do veículo'),
  plate: zod.string().min(1, 'Informe a placa do veículo'),
  capacity: zod.number().min(1, 'Informe a capacidade do veículo'),
});

export type VehicleFormData = zod.infer<typeof vehicleValidationSchema>;
