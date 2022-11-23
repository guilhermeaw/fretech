import { Button, HStack } from '@chakra-ui/react';

type FormActionButtonsProps = {
  onCancel: () => void;
};

export const FormActionButtons = ({ onCancel }: FormActionButtonsProps) => {
  return (
    <HStack justify="flex-end" py="1rem">
      <Button onClick={onCancel}>Cancelar</Button>
      <Button colorScheme="brand" type="submit">
        Salvar
      </Button>
    </HStack>
  );
};
