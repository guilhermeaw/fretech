import { Box, Container, Heading } from '@chakra-ui/react';

import { useFetchDeliveries } from '../../services/queries';
import { StatusBoxesContainer } from './components/StatusBoxesContainer';
import { DeliveryListItem } from '../deliveries/components/DeliveryListItem';

const HomePage = () => {
  const { data: deliveries } = useFetchDeliveries();

  return (
    <Box
      w="100vw"
      h="8rem"
      ml="50%"
      py="1rem"
      bg="brand.500"
      mt="-2rem"
      transform="translateX(-50%)"
    >
      <Container size="xl">
        <StatusBoxesContainer />

        <Box mt="2rem">
          <Heading size="md" color="brand.50">
            Entregas em andamento
          </Heading>

          {deliveries?.map(delivery => (
            <DeliveryListItem key={delivery.id} delivery={delivery} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
