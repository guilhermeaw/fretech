import {
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

import { Navbar } from './Navbar';
import { navitems } from './navitems';

export const Header = () => {
  const [isLargerThan1024] = useMediaQuery(['(min-width: 1024px)']);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack
      bgColor="white"
      justify="space-between"
      borderBottom="1px solid #ddd"
      px="1rem"
      h="4rem"
    >
      <HStack>
        {!isLargerThan1024 && (
          <>
            <IconButton
              onClick={onOpen}
              variant="ghost"
              aria-label="Abrir menu"
              icon={<FiMenu />}
            />

            <Drawer onClose={onClose} isOpen={isOpen} size="full">
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody onClick={onClose}>
                  <Navbar navitems={navitems} direction="column" />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}

        <img
          src="/assets/images/logo.svg"
          alt="Logotipo do produto Fretech na cor roxa"
          style={{ marginRight: '1rem' }}
        />

        {isLargerThan1024 && (
          <>
            <Center h="2rem">
              <Divider orientation="vertical" />
            </Center>
            <Navbar navitems={navitems} />
          </>
        )}
      </HStack>

      <HStack>
        {isLargerThan1024 && (
          <Text as="strong" noOfLines={1}>
            Admin Fretech
          </Text>
        )}
        <Button variant="ghost" colorScheme="red">
          Sair
        </Button>
      </HStack>
    </HStack>
  );
};
