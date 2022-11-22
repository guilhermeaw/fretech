import { Heading, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFindOccurrenceById } from '../../../services/queries';
import { useUpdateOccurrence } from '../../../services/mutations';
import { OccurrenceForm } from '../../../templates/OccurrenceForm';
import { OccurrenceFormData } from '../../../templates/OccurrenceForm/occurrenceValidationSchema';

const EditOccurrence = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const occurrenceId = Number(id);

  const { data: occurrenceToEdit } = useFindOccurrenceById({
    id: occurrenceId,
  });

  const { mutate: editOccurrence } = useUpdateOccurrence({
    afterSuccess: () => navigate(-1),
  });

  const handleEditOccurrence = async (data: OccurrenceFormData) => {
    if (occurrenceToEdit) {
      editOccurrence({
        ...data,
        id: occurrenceId,
        created_at: occurrenceToEdit.created_at,
        order_id: Number(data.order_id),
      });
    }
  };

  return (
    <>
      <Heading fontSize="3xl">Editar ocorrência</Heading>
      <Text>Edite as informações da ocorrência</Text>

      {occurrenceToEdit && (
        <OccurrenceForm
          onSubmit={handleEditOccurrence}
          defaultValues={{
            name: occurrenceToEdit.name,
            description: occurrenceToEdit.description,
            order_id: occurrenceToEdit.order_id.toString(),
          }}
        />
      )}
    </>
  );
};

export default EditOccurrence;
