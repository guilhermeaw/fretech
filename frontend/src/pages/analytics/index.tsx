import { Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import { Card } from '../../components/Card';
import { StatusBoxesContainer } from '../home/components/StatusBoxesContainer';

const AnalyticsPage = () => {
  const dataDeliveries = [
    { name: 'Jan', total: 11 },
    {
      name: 'Fev',
      total: 10,
    },
    { name: 'Mar', total: 7 },
    { name: 'Abr', total: 5 },
    {
      name: 'Mai',
      total: 8,
    },
    { name: 'Jun', total: 15 },
    { name: 'Jul', total: 2 },
    {
      name: 'Ago',
      total: 5,
    },
    { name: 'Set', total: 8 },
    { name: 'Out', total: 9 },
    {
      name: 'Nov',
      total: 14,
    },
    { name: 'Dez', total: 22 },
  ];

  const dataOrders = [
    { name: 'Jan', total: 314 },
    {
      name: 'Fev',
      total: 210,
    },
    { name: 'Mar', total: 92 },
    { name: 'Abr', total: 100 },
    {
      name: 'Mai',
      total: 177,
    },
    { name: 'Jun', total: 280 },
    { name: 'Jul', total: 64 },
    {
      name: 'Ago',
      total: 78,
    },
    { name: 'Set', total: 140 },
    { name: 'Out', total: 120 },
    {
      name: 'Nov',
      total: 387,
    },
    { name: 'Dez', total: 412 },
  ];

  return (
    <>
      <VStack align="start" spacing={0}>
        <Heading size="lg">Visualização de Analytics</Heading>
        <Text>Visualize os principais indicadores da sua entregadora</Text>
      </VStack>

      <StatusBoxesContainer />

      <Card>
        <Grid templateColumns="repeat(2, 1fr)" rowGap={3}>
          <GridItem>
            <VStack>
              <Heading size="md">Entregas por mês</Heading>
              <BarChart width={550} height={350} data={dataDeliveries}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
              </BarChart>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack>
              <Heading size="md">Pedidos entregues no mês</Heading>
              <BarChart width={550} height={350} data={dataOrders}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
              </BarChart>
            </VStack>
          </GridItem>
        </Grid>
      </Card>
    </>
  );
};

export default AnalyticsPage;
