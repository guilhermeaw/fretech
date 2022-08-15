import { Link } from 'react-router-dom';
import { Link as ChakraLink, ListItem, Text } from '@chakra-ui/react';

type NavitemProps = {
  title: string;
  to: string;
  isActive: boolean;
};

export const Navitem = ({ title, to, isActive }: NavitemProps) => {
  const textColor = isActive ? 'gray.900' : 'gray.500';

  return (
    <ListItem listStyleType="none">
      <ChakraLink as={Link} mr="1rem" to={to}>
        <Text color={textColor} as="strong">
          {title}
        </Text>
      </ChakraLink>
    </ListItem>
  );
};
