import { Box, Progress, Tooltip } from '@chakra-ui/react';

type DeliveryProgressProps = {
  value: number;
};

export const DeliveryProgress = ({ value }: DeliveryProgressProps) => {
  const getColorScheme = (value: number) => {
    if (value < 50) {
      return 'red';
    }

    if (value > 70) {
      return 'green';
    }

    return 'yellow';
  };

  return (
    <Tooltip hasArrow label={`${value.toFixed()}%`}>
      <Box>
        <Progress value={value} w="80%" colorScheme={getColorScheme(value)} />
      </Box>
    </Tooltip>
  );
};
