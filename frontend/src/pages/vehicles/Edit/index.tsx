import { Heading, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFindVehicleById } from '../../../services/queries';
import { useUpdateVehicle } from '../../../services/mutations';
import { VehicleForm } from '../../../templates/VehicleForm';
import { VehicleFormData } from '../../../templates/VehicleForm/vehicleValidationSchema';

const EditVehicle = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const vehicleId = Number(id);

  const { data: vehicleToEdit } = useFindVehicleById({
    id: vehicleId,
  });

  const { mutate: editVehicle } = useUpdateVehicle({
    afterSuccess: () => navigate(-1),
  });

  const handleEditVehicle = async (data: VehicleFormData) => {
    if (vehicleToEdit) {
      editVehicle({
        ...data,
        id: vehicleId,
        status: vehicleToEdit.status,
      });
    }
  };

  return (
    <>
      <Heading fontSize="3xl">Editar veículo</Heading>
      <Text>Edite as informações do veículo</Text>

      {vehicleToEdit && (
        <VehicleForm
          onSubmit={handleEditVehicle}
          defaultValues={vehicleToEdit}
        />
      )}
    </>
  );
};

export default EditVehicle;
