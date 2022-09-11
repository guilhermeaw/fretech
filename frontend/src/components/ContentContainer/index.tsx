import { Box, Container } from '@chakra-ui/react';

type ContentContainerProps = {
  children: React.ReactNode;
};

export const ContentContainer = ({ children }: ContentContainerProps) => (
  <Box bg="contentBg" minH="calc(100vh - 4rem)">
    <Container py="2rem" size="xl">
      {children}
    </Container>
  </Box>
);
