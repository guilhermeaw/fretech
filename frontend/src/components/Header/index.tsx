import { Button, Center, Divider, HStack, Text } from '@chakra-ui/react';

import { Navbar } from './Navbar';
import { navitems } from './navitems';

export const Header = () => {
  return (
    <HStack
      bgColor="white"
      justify="space-between"
      borderBottom="1px solid #ddd"
      px="1rem"
      h="4rem"
    >
      <HStack>
        <img
          src="/assets/images/logo.svg"
          alt="Logotipo do produto Fretech na cor roxa"
          style={{ marginRight: '1rem' }}
        />

        <Center h="2rem">
          <Divider orientation="vertical" />
        </Center>

        <Navbar navitems={navitems} />
      </HStack>

      <HStack>
        <Text as="strong">Admin Fretech</Text>
        <Button variant="ghost" colorScheme="red">
          Sair do sistema
        </Button>
      </HStack>
    </HStack>
  );
};
