import Feather from '@expo/vector-icons/Feather';
import { Flex, Icon, IconButton } from 'native-base';

type HeaderProps = {
  children: React.ReactNode;
  onCollapse: () => void;
  collapseIcon: 'chevron-up' | 'chevron-down';
};

export const Header = ({ children, onCollapse, collapseIcon }: HeaderProps) => {
  return (
    <Flex w="100%" direction="row" align="center" justify="space-between">
      {children}
      <IconButton
        onPress={onCollapse}
        icon={<Icon as={Feather} name={collapseIcon} />}
      />
    </Flex>
  );
};
