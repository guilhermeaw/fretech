import { Skeleton, Stack } from '@chakra-ui/react';

export const ListLoadingContainer = () => {
  return (
    <Stack>
      <Skeleton height="4rem" />
      <Skeleton height="4rem" />
      <Skeleton height="4rem" />
    </Stack>
  );
};
