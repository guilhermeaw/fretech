import { SimpleGrid } from '@chakra-ui/react';

import { StatusBox, StatusBoxProps } from '../StatusBox';

const statusBoxes = [
  {
    label: 'Entregas finalizadas',
    value: 12,
    percentage: { number: 23.36, type: 'increase' },
  },
  {
    label: 'Ocorrências registradas',
    value: 6,
    percentage: { number: 12.36, type: 'decrease' },
  },
  {
    label: 'Pedidos cadastrados',
    value: 247,
    percentage: { number: 6.12, type: 'increase' },
  },
] as StatusBoxProps[];

export const StatusBoxesContainer = () => {
  return (
    <SimpleGrid mt="2rem" columns={3} spacing={4} alignItems="center">
      {statusBoxes.map(statusBox => (
        <StatusBox key={statusBox.label} {...statusBox} />
      ))}
    </SimpleGrid>
  );
};
