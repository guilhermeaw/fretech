import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { useCreateOccurrence } from '../../../services/mutations';
import { OccurrenceForm } from '../../../templates/OccurrenceForm';
import { OccurrenceFormData } from '../../../templates/OccurrenceForm/occurrenceValidationSchema';

const AddOccurrence = () => {
  const navigate = useNavigate();

  const { mutate: createOccurrence } = useCreateOccurrence({
    afterSuccess: () => navigate(-1),
  });

  const handleCreateNewOccurrence = async (data: OccurrenceFormData) => {
    createOccurrence({ ...data, order_id: Number(data.order_id) });
  };

  return (
    <>
      <Heading fontSize="3xl">Cadastro de ocorrências</Heading>
      <Text>Cadastre novas ocorrências para os pedidos</Text>

      <OccurrenceForm onSubmit={handleCreateNewOccurrence} />
    </>
  );
};

export default AddOccurrence;
