import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react';

import { ListContainerContent } from './ListContainerContent';
import { ListLoadingContainer } from './ListLoadingContainer';

type ListContainerProps = {
  header?: React.ReactNode;
  subHeader?: React.ReactNode;
  headerLabels?: string[];
  hasItems: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
};

const ListContainer = ({
  header,
  subHeader,
  headerLabels,
  hasItems = true,
  isLoading = false,
  children,
}: ListContainerProps) => {
  return (
    <>
      {header}
      {subHeader}

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
};

const Header = ({ subtitle, title }: HeaderProps) => (
  <VStack align="flex-start" spacing={0}>
    <Heading size="lg">{title}</Heading>
    <Text>{subtitle}</Text>
  </VStack>
);

type SubHeaderProps = {
  placeholder: string;
  addButtonLink: string;
};

const SubHeader = ({ addButtonLink, placeholder }: SubHeaderProps) => {
  return (
    <HStack my="1rem" justifyContent="space-between">
      <Input placeholder={placeholder} width="sm" bg="#fff" />

      <Link to={addButtonLink}>
        <Button colorScheme="brand" leftIcon={<FiPlus />}>
          CADASTRAR
        </Button>
      </Link>
    </HStack>
  );
};

ListContainer.SubHeader = SubHeader;
ListContainer.Header = Header;

export { ListContainer };
