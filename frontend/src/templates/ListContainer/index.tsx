import {
  Button,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type ListContainerProps = {
  header?: React.ReactNode;
  subHeader?: React.ReactNode;
  headerLabels?: string[];
  children: React.ReactNode;
};

const ListContainer = ({
  header,
  subHeader,
  headerLabels,
  children,
}: ListContainerProps) => {
  return (
    <>
      {header}
      {subHeader}

      {headerLabels?.length && (
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
