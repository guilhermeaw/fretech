import * as zod from 'zod';

export const loginValidationSchema = zod.object({
  email: zod.string().email('Informe um e-mail'),
  password: zod.string().min(1, 'Informe uma senha'),
});

export type LoginFormData = zod.infer<typeof loginValidationSchema>;
