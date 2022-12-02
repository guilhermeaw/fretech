import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { useAuth } from '../../../store/Auth';
import { useUpdatePassword } from '../../../services/mutations';
import { useFindDeliverymanById } from '../../../services/queries';
import { UserPasswordForm } from '../../../templates/UserPasswordForm';
import { UserPasswordFormData } from '../../../templates/UserPasswordForm/userPasswordValidationSchema';

const ChangePassword = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: userToEdit } = useFindDeliverymanById({
    id: user.id,
  });

  const { mutate: updatePassword } = useUpdatePassword({
    afterSuccess: () => navigate(-1),
  });

  const handleChangePassword = async (data: UserPasswordFormData) => {
    if (userToEdit) {
      updatePassword({
        id: userToEdit.id,
        oldPassword: data.actualPassword,
        newPassword: data.newPassword,
      });
    }
  };

  return (
    <>
      <Heading fontSize="3xl">Trocar senha</Heading>
      <Text>Confirme a senha antiga e informe a nova senha</Text>

      {userToEdit && <UserPasswordForm onSubmit={handleChangePassword} />}
    </>
  );
};

export default ChangePassword;
