import { Flex } from 'native-base';

type ContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <Flex mt="2" w="100%" justify="space-between">
      {children}
    </Flex>
  );
};
