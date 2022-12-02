import * as zod from 'zod';

export const userPasswordValidationSchema = zod
  .object({
    actualPassword: zod.string().min(1, 'Informe a senha atual'),
    newPassword: zod.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmNewPassword: zod
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  })
  .superRefine(({ confirmNewPassword, newPassword }, ctx) => {
    if (confirmNewPassword !== newPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'A confirmação da nova senha não confere',
        path: ['confirmNewPassword'],
      });
    }
  });

export type UserPasswordFormData = zod.infer<
  typeof userPasswordValidationSchema
>;
