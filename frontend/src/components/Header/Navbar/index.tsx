import { useLocation } from 'react-router-dom';
import { Box, UnorderedList } from '@chakra-ui/react';

import { Navitem } from '../Navitem';
import { NavitemProp } from '../navitems';

type NavbarProps = {
  navitems: NavitemProp[];
  direction?: 'column' | 'row';
};

export const Navbar = ({ navitems, direction = 'row' }: NavbarProps) => {
  const { pathname } = useLocation();
  const isDirectionColumn = direction === 'column';

  const pathnameIncludesPath = (path: string) => {
    return pathname.includes(path.split('/')[1]);
  };

  return (
    <Box as="nav" h="100%">
      <UnorderedList
        display="flex"
        flexDir={direction}
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        {navitems.map(({ title, to }) => (
          <Navitem
            key={title}
            title={title}
            to={to}
            isActive={(() => pathnameIncludesPath(to))()}
            size={isDirectionColumn ? '4xl' : 'md'}
          />
        ))}
      </UnorderedList>
    </Box>
  );
};
