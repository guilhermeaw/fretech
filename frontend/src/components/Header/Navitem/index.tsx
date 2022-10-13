import { Link } from 'react-router-dom';
import {
  Link as ChakraLink,
  ListItem,
  Text,
  TypographyProps,
} from '@chakra-ui/react';

type NavitemProps = {
  title: string;
  to: string;
  isActive: boolean;
  size?: TypographyProps['fontSize'];
};

export const Navitem = ({ title, to, isActive, size = 'md' }: NavitemProps) => {
  const textColor = isActive ? 'gray.900' : 'gray.500';

  return (
    <ListItem listStyleType="none">
      <ChakraLink as={Link} mr="1rem" to={to}>
        <Text color={textColor} as="strong" fontSize={size}>
          {title}
        </Text>
      </ChakraLink>
    </ListItem>
  );
};
