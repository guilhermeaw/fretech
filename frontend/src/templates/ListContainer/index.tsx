import {
  Button,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type ListContainerProps = {
  title: string;
  subtitle: string;
  placeholder: string;
  addButtonLink: string;
  headerLabels?: string[];
  children: React.ReactNode;
};

export const ListContainer = ({
  children,
  subtitle,
  title,
  addButtonLink,
  placeholder,
  headerLabels,
}: ListContainerProps) => {
  return (
    <>
      <Heading size="lg">{title}</Heading>
      <Text>{subtitle}</Text>

      <HStack my="1rem" justifyContent="space-between">
        <Input placeholder={placeholder} width="sm" bg="#fff" />
        <Link to={addButtonLink}>
          <Button variant="primary" leftIcon={<FiPlus />}>
            CADASTRAR
          </Button>
        </Link>
      </HStack>

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
