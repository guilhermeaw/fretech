import {
  AccordionItem,
  AccordionPanel,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';

import { Order } from '../../../models/Order';
import { AccordionHeader } from '../components/AccordionHeader';

type AddressSectionProps = Pick<Order, 'address'>;

export const AddressSection = ({ address }: AddressSectionProps) => (
  <AccordionItem>
    <AccordionHeader title="Destino" />

    <AccordionPanel>
      <Grid templateColumns="repeat(3, 1fr)" rowGap={4} columnGap={6}>
        <GridItem w="100%">
          <Text fontWeight="bold">Cidade</Text>
          <Text>{address.city}</Text>
        </GridItem>
        <GridItem w="100%">
          <Text fontWeight="bold">Estado</Text>
          <Text>{address.state}</Text>
        </GridItem>
        <GridItem w="100%">
          <Text fontWeight="bold">CEP</Text>
          <Text>{address.cep}</Text>
        </GridItem>

        <GridItem w="100%">
          <Text fontWeight="bold">Rua</Text>
          <Text>{address.street}</Text>
        </GridItem>
        <GridItem w="100%">
          <Text fontWeight="bold">Número</Text>
          <Text>{address.number}</Text>
        </GridItem>
        <GridItem w="100%">
          <Text fontWeight="bold">Complemento</Text>
          <Text>{address.complement || '-'}</Text>
        </GridItem>
      </Grid>
    </AccordionPanel>
  </AccordionItem>
);
