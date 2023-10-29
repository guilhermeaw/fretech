import { ActionButtons } from '@components/ActionButtons';
import {
  Center,
  FormControl,
  Heading,
  Input,
  Modal,
  TextArea,
  VStack,
} from 'native-base';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const OccurrenceModal = ({ isOpen, onClose }: Props) => {
  const handleConfirm = () => {
    //TODO: register occurrence
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.Header>
          <Center>
            <Heading size="sm">Registrar ocorrência</Heading>
          </Center>
        </Modal.Header>

        <Modal.Body>
          <VStack space={2}>
            <FormControl isRequired>
              <FormControl.Label>Título</FormControl.Label>
              <Input placeholder="Inserir título da ocorrência" />
            </FormControl>

            <FormControl>
              <FormControl.Label>Descrição</FormControl.Label>
              <TextArea
                h={40}
                autoCompleteType={false}
                placeholder="Inserir descrição da ocorrência"
              />
            </FormControl>
          </VStack>
        </Modal.Body>

        <Modal.Footer>
          <ActionButtons
            cancelButtonLabel="Cancelar"
            confirmButtonLabel="Confirmar"
            onCancel={onClose}
            onConfirm={onClose}
          />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
