import { Button, HStack, IButtonProps } from 'native-base';
import { InterfaceHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';

export type ActionProps = {
  onCancel: () => void;
  onConfirm: () => void;
  cancelButtonLabel: string;
  confirmButtonLabel: string;
};

type Props = {
  buttonProps?: IButtonProps;
  containerProps?: InterfaceHStackProps;
} & ActionProps;

export const ActionButtons = ({
  onCancel,
  onConfirm,
  buttonProps,
  containerProps,
  cancelButtonLabel,
  confirmButtonLabel,
}: Props) => {
  return (
    <HStack space={1} w="100%" {...containerProps}>
      <Button
        flex={1}
        size="sm"
        variant="subtle"
        onPress={onCancel}
        {...buttonProps}
      >
        {cancelButtonLabel}
      </Button>

      <Button onPress={onConfirm} size="sm" flex={1} {...buttonProps}>
        {confirmButtonLabel}
      </Button>
    </HStack>
  );
};
