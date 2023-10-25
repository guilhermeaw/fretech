import { Button, HStack, VStack } from 'native-base';

import { CollapseActionProps } from '.';

type Props = {
  children: React.ReactNode;
  actions: CollapseActionProps;
};

export const Footer = ({ children, actions }: Props) => {
  const { cancelButtonLabel, confirmButtonLabel, onCancel, onConfirm } =
    actions;

  return (
    <VStack space={4}>
      {children}

      <HStack space={1} w="100%">
        <Button onPress={onCancel} size="xs" flex={1} variant="subtle">
          {cancelButtonLabel}
        </Button>

        <Button onPress={onConfirm} size="xs" flex={1}>
          {confirmButtonLabel}
        </Button>
      </HStack>
    </VStack>
  );
};
