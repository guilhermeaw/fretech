import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <HStack
      bgColor="white"
      justify="space-between"
      borderBottom="1px solid #ddd"
      p="1rem"
    >
      <HStack>
        <img
          src="/assets/images/logo.svg"
          alt=""
          style={{ marginRight: '1rem' }}
        />

        <Center h="2rem">
          <Divider orientation="vertical" />
        </Center>

        <Box as="nav">
          <UnorderedList display="flex">
            <ListItem listStyleType="none">
              <Link mr="1rem" href="/">
                <Text as="strong">Encomendas</Text>
              </Link>
            </ListItem>
            <ListItem listStyleType="none">
              <Link mr="1rem" href="/">
                <Text as="strong">Entregadores</Text>
              </Link>
            </ListItem>
            <ListItem listStyleType="none">
              <Link mr="1rem" href="/">
                <Text as="strong">Destinatários</Text>
              </Link>
            </ListItem>
            <ListItem listStyleType="none">
              <Link mr="1rem" href="/">
                <Text as="strong">Ocorrências</Text>
              </Link>
            </ListItem>
            <ListItem listStyleType="none">
              <Link mr="1rem" href="/">
                <Text as="strong">Veículos</Text>
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
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
