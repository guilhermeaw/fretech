import { Center, Spinner } from 'native-base';

export const Loading = () => {
  return (
    <Center flex={1} bg="primary.100">
      <Spinner color="primary.500" />
    </Center>
  );
};
