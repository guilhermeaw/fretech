import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

import { Card } from '../../../../components/Card';

export type StatusBoxProps = {
  label: string;
  value: number;
  percentage: { number: number; type: 'increase' | 'decrease' };
};

export const StatusBox = ({ label, percentage, value }: StatusBoxProps) => {
  return (
    <Card>
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>
          <StatArrow type={percentage.type} />
          {percentage.number}%
        </StatHelpText>
      </Stat>
    </Card>
  );
};
