import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import { ListContainerContent } from './ListContainerContent';
import { ListLoadingContainer } from './ListLoadingContainer';

type ListContainerProps = {
  header?: React.ReactNode;
  headerLabels?: string[];
  hasItems: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
};

const ListContainer = ({
  header,
  headerLabels,
  hasItems = true,
  isLoading = false,
  children,
}: ListContainerProps) => {
  return (
    <>
      {header}

      {isLoading ? (
        <ListLoadingContainer />
      ) : (
        <ListContainerContent headerLabels={headerLabels} hasItems={hasItems}>
          {children}
        </ListContainerContent>
      )}
    </>
  );
};

type HeaderProps = {
  title: string;
  subtitle: string;
  addButtonLink?: string;
};

const Header = ({ subtitle, title, addButtonLink }: HeaderProps) => (
  <HStack m="1rem 0 2rem" justifyContent="space-between">
    <VStack align="flex-start" spacing={0}>
      <Heading size="lg">{title}</Heading>
      <Text>{subtitle}</Text>
    </VStack>

    {addButtonLink && (
      <Link to={addButtonLink}>
        <Button colorScheme="brand" leftIcon={<FiPlus />}>
          CADASTRAR
        </Button>
      </Link>
    )}
  </HStack>
);

ListContainer.Header = Header;

export { ListContainer };
