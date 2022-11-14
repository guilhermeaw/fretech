import {
  AccordionItem,
  AccordionPanel,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';

import { Order } from '../../../models/Order';
import { AccordionHeader } from '../components/AccordionHeader';
import { OrderStatusBadge } from '../components/OrderStatusBadge';

type GeneralSectionProps = Pick<Order, 'id' | 'status'>;

export const GeneralSection = ({ id, status }: GeneralSectionProps) => (
  <AccordionItem>
    <AccordionHeader title="Informações Gerais" />

    <AccordionPanel>
      <Grid templateColumns="repeat(2, 1fr)" rowGap={3}>
        <GridItem w="100%" display="flex" alignContent="center">
          <Text fontWeight="bold">Pedido #{id}</Text>
        </GridItem>
        <GridItem w="100%">
          <OrderStatusBadge status={status} />
        </GridItem>
      </Grid>
    </AccordionPanel>
  </AccordionItem>
);
