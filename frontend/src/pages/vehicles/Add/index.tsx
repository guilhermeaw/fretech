import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { useCreateVehicle } from '../../../services/mutations';
import { VehicleForm } from '../../../templates/VehicleForm';
import { VehicleFormData } from '../../../templates/VehicleForm/vehicleValidationSchema';

const AddVehicle = () => {
  const navigate = useNavigate();

  const { mutate: createVehicle } = useCreateVehicle({
    afterSuccess: () => navigate(-1),
  });

  const handleCreateNewVehicle = async (data: VehicleFormData) => {
    createVehicle({ ...data });
  };

  return (
    <>
      <Heading fontSize="3xl">Cadastro de veículos</Heading>
      <Text>Cadastre novos veículos para serem utilizados nas entregas</Text>

      <VehicleForm onSubmit={handleCreateNewVehicle} />
    </>
  );
};

export default AddVehicle;
