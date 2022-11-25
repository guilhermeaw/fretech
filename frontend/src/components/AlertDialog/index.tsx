import { RefObject, useRef } from 'react';
import {
  AlertDialog as ChakraDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

type AlertDialogProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  afterConfirm?: () => void;
};

export const AlertDialog = ({
  title,
  description,
  isOpen,
  onClose,
  afterConfirm,
}: AlertDialogProps) => {
  const cancelRef = useRef() as RefObject<HTMLButtonElement>;

  const onConfirm = () => {
    afterConfirm?.();
    onClose();
  };

  return (
    <ChakraDialog
      motionPreset="scale"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="brand" ml={3} onClick={onConfirm}>
            Confirmar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ChakraDialog>
  );
};
