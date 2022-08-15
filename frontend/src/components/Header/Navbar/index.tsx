import { Box, UnorderedList } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { Navitem } from '../Navitem';
import { NavitemProp } from '../navitems';

type NavbarProps = {
  navitems: NavitemProp[];
};

export const Navbar = ({ navitems }: NavbarProps) => {
  const { pathname } = useLocation();

  return (
    <Box as="nav">
      <UnorderedList display="flex">
        {navitems.map(({ title, to }) => (
          <Navitem title={title} to={to} isActive={to === pathname} />
        ))}
      </UnorderedList>
    </Box>
  );
};
