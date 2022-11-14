import { ReactNode } from 'react';
import { AccordionButton, AccordionIcon, Heading } from '@chakra-ui/react';

const AccordionTitle = ({ children }: { children: ReactNode }) => (
  <Heading as="h2" flex="1" textAlign="left" fontWeight="bold" fontSize="xl">
    {children}
  </Heading>
);

export const AccordionHeader = ({ title }: { title: string }) => (
  <AccordionButton _expanded={{ color: 'brand.500' }}>
    <AccordionTitle>{title}</AccordionTitle>
    <AccordionIcon />
  </AccordionButton>
);
