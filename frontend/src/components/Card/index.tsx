import { Children } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  const columns = Children.count(children);

  return (
    <SimpleGrid
      bg="#fff"
      borderRadius="4px"
      p="1rem"
      my="1rem"
      columns={columns}
      alignItems="center"
    >
      {children}
    </SimpleGrid>
  );
};
