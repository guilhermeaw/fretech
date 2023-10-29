import { ActionButtons, ActionProps } from '@components/ActionButtons';
import { VStack } from 'native-base';

type Props = {
  children: React.ReactNode;
  actions?: ActionProps;
};

export const Footer = ({ children, actions }: Props) => {
  return (
    <VStack space={4}>
      {children}
      {actions && <ActionButtons {...actions} />}
    </VStack>
  );
};
