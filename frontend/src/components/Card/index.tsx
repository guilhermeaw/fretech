import { SimpleGrid } from '@chakra-ui/react';

type CardProps = {
  children: React.ReactNode;
  columns: number;
};

export const Card = ({ children, columns }: CardProps) => {
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
