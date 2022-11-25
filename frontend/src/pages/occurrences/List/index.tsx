import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { Occurrence } from '../../../models/Occurrence';
import { AlertDialog } from '../../../components/AlertDialog';
import { OccurrenceModal } from '../components/OccurrenceModal';
import { useFetchOccurrences } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';
import { useDeleteOccurrence } from '../../../services/mutations';
import { OccurrenceListItem } from '../components/OccurrenceListItem';

const OccurrencesList = () => {
  const [openedOccurrence, setOpenedOccurrence] = useState({} as Occurrence);

  const { data: occurrences } = useFetchOccurrences();
  const { mutate: deleteOccurrence } = useDeleteOccurrence({});

  const {
    isOpen: isOpenOccurrenceDetails,
    onClose: onCloseOccurrenceDetails,
    onOpen: onOpenOccurrenceDetails,
  } = useDisclosure();

  const {
    isOpen: isOpenOccurrenceDelete,
    onClose: onCloseOccurrenceDelete,
    onOpen: onOpenOccurrenceDelete,
  } = useDisclosure();

  const handleOpenOccurrenceDetails = (occurrence: Occurrence) => {
    setOpenedOccurrence(occurrence);
    onOpenOccurrenceDetails();
  };

  const handleOpenToDeleteOccurrence = (occurrence: Occurrence) => {
    onOpenOccurrenceDelete();
    setOpenedOccurrence(occurrence);
  };

  const handleDeleteOpenedOccurrence = () => {
    deleteOccurrence(openedOccurrence.id);
    onCloseOccurrenceDelete();
  };

  return (
    <>
      <ListContainer
        headerLabels={['Pedido', 'Ocorrência', 'Criada em', 'Ações']}
        header={
          <ListContainer.Header
            title="Gerenciando ocorrências"
            subtitle="Cadastre, edite e visualize as ocorrências dos pedidos"
          />
        }
        subHeader={
          <ListContainer.SubHeader
            addButtonLink="/ocorrencias/nova"
            placeholder="Busca por ocorrências"
          />
        }
      >
        {occurrences?.map(occurrence => (
          <OccurrenceListItem
            key={occurrence.id}
            occurrence={occurrence}
            onOpenDetails={handleOpenOccurrenceDetails}
            onDelete={handleOpenToDeleteOccurrence}
          />
        ))}
      </ListContainer>

      <OccurrenceModal
        isOpen={isOpenOccurrenceDetails}
        onClose={onCloseOccurrenceDetails}
        occurrence={openedOccurrence}
      />

      <AlertDialog
        title="Remover ocorrência"
        description="Tem certeza que deseja remover esta ocorrência?"
        isOpen={isOpenOccurrenceDelete}
        onClose={onCloseOccurrenceDelete}
        afterConfirm={handleDeleteOpenedOccurrence}
      />
    </>
  );
};

export default OccurrencesList;
