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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

import { FiKey, FiMenu, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Navbar } from './Navbar';
import { navitems } from './navitems';
import { useAuth } from '../../store/Auth';

export const Header = () => {
  const { signOut } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery(['(min-width: 1024px)']);

  const handleLogout = () => {
    signOut();
  };

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

        <Link to="/">
          <img
            src="/assets/images/logo.svg"
            alt="Logotipo do produto Fretech na cor roxa"
            style={{ marginRight: '1rem' }}
          />
        </Link>

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
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Menu do usuário"
            icon={<FiUser />}
            variant="ghost"
          />
          <MenuList>
            <MenuItem icon={<FiKey />} as={Link} to="/usuario/trocar-senha">
              Trocar senha
            </MenuItem>
          </MenuList>
        </Menu>

        <Button variant="ghost" colorScheme="red" onClick={handleLogout}>
          Sair
        </Button>
      </HStack>
    </HStack>
  );
};
