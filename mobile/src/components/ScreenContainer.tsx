import { VStack } from 'native-base';

type ScreenContainerProps = {
  children: React.ReactNode;
};

export const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return <VStack p={8}>{children}</VStack>;
};
