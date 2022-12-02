import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContainer } from '../FormContainer';
import { FormInput } from '../../components/Form/Input';
import { FormActionButtons } from '../../components/FormActionButtons';
import {
  UserPasswordFormData,
  userPasswordValidationSchema,
} from './userPasswordValidationSchema';

type UserPasswordFormProps = {
  onSubmit: (data: UserPasswordFormData) => void;
};

export const UserPasswordForm = ({ onSubmit }: UserPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPasswordFormData>({
    resolver: zodResolver(userPasswordValidationSchema),
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Senha atual"
        type="password"
        errorMessage={errors?.actualPassword?.message}
        {...register('actualPassword')}
      />

      <FormInput
        label="Nova senha"
        type="password"
        errorMessage={errors?.newPassword?.message}
        {...register('newPassword')}
      />

      <FormInput
        label="Confirme a nova senha"
        type="password"
        errorMessage={errors?.confirmNewPassword?.message}
        {...register('confirmNewPassword')}
      />

      <FormActionButtons onCancel={handleCancel} />
    </FormContainer>
  );
};
