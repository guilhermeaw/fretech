import {
  AccordionItem,
  AccordionPanel,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';

import { Order } from '../../../models/Order';
import { AccordionHeader } from '../components/AccordionHeader';

type ReceiverSectionProps = Pick<Order, 'receiver'>;

export const ReceiverSection = ({ receiver }: ReceiverSectionProps) => (
  <AccordionItem>
    <AccordionHeader title="Destinatário" />

    <AccordionPanel>
      <Grid templateColumns="repeat(3, 1fr)" rowGap={4} columnGap={6}>
        <GridItem w="100%">
          <Text fontWeight="bold">Nome</Text>
          <Text>{receiver.name}</Text>
        </GridItem>
        <GridItem w="100%">
          <Text fontWeight="bold">Telefone</Text>
          <Text>{receiver.phone}</Text>
        </GridItem>
        <GridItem w="100%">
          <Text fontWeight="bold">CPF</Text>
          <Text>{receiver.cpf}</Text>
        </GridItem>
      </Grid>
    </AccordionPanel>
  </AccordionItem>
);
