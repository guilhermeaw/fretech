import { Center, SimpleGrid, Text } from '@chakra-ui/react';
import { EmptyList } from '../../components/EmptyList';

type ListContainerContentProps = {
  children: React.ReactNode;
  headerLabels?: string[];
  hasItems: boolean;
};

export const ListContainerContent = ({
  children,
  hasItems,
  headerLabels,
}: ListContainerContentProps) => {
  const hasHeaderLabels = !!headerLabels?.length;

  if (!hasItems) {
    return (
      <Center mt="8rem">
        <EmptyList message="Parece que você não possui itens cadastrados" />
      </Center>
    );
  }

  return (
    <>
      {hasHeaderLabels && (
        <SimpleGrid my="1rem" px="1rem" columns={headerLabels.length}>
          {headerLabels.map((label, index) => {
            const isLastIndex = index === headerLabels.length - 1;

            return (
              <Text
                key={label}
                align={isLastIndex ? 'right' : 'left'}
                fontWeight="bold"
              >
                {label}
              </Text>
            );
          })}
        </SimpleGrid>
      )}
      {children}
    </>
  );
};
