import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { Occurrence } from '../../../../models/Occurrence';

type OccurrenceModalProps = {
  occurrence?: Occurrence;
  isOpen: boolean;
  onClose: () => void;
};

export const OccurrenceModal = ({
  occurrence,
  isOpen,
  onClose,
}: OccurrenceModalProps) => {
  const hasOccurrence = !!occurrence;

  return (
    <Modal onClose={onClose} isOpen={isOpen && hasOccurrence} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{occurrence?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{occurrence?.description}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
