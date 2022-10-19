import {
  Avatar,
  Box,
  Container,
  Heading,
  IconButton,
  Progress,
  SimpleGrid,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

import { Card } from '../../components/Card';

const HomePage = () => {
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
    <Box
      w="100vw"
      h="8rem"
      ml="50%"
      py="1rem"
      bg="brand.500"
      mt="-2rem"
      transform="translateX(-50%)"
    >
      <Container size="xl">
        <SimpleGrid mt="2rem" columns={3} spacing={4} alignItems="center">
          <Card>
            <Stat>
              <StatLabel>Entregas finalizadas</StatLabel>
              <StatNumber>12</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
          </Card>

          <Card>
            <Stat>
              <StatLabel>Ocorrências registradas</StatLabel>
              <StatNumber>6</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                12.36%
              </StatHelpText>
            </Stat>
          </Card>

          <Card>
            <Stat>
              <StatLabel>Pedidos cadastrados</StatLabel>
              <StatNumber>247</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                6.12%
              </StatHelpText>
            </Stat>
          </Card>
        </SimpleGrid>

        <Box mt="2rem">
          <Heading size="md" color="brand.50">
            Entregas em andamento
          </Heading>

          <Card>
            <Progress value={80} w="80%" colorScheme={getColorScheme(80)} />

            <Stack direction="row" align="center">
              <Avatar name="João Almeida" />
              <Text>João Almeida</Text>
            </Stack>

            <Text>Lajeado</Text>

            <Text>RS</Text>

            <Box display="flex" justifyContent="flex-end">
              <IconButton
                aria-label="Ver detalhes"
                alignSelf="right"
                variant="ghost"
                icon={<FiChevronRight />}
              />
            </Box>
          </Card>

          <Card>
            <Progress value={40} w="80%" colorScheme={getColorScheme(40)} />

            <Stack direction="row" align="center">
              <Avatar name="Airton Silva" />
              <Text>Airton Silva</Text>
            </Stack>

            <Text>Estrela</Text>

            <Text>RS</Text>

            <Box display="flex" justifyContent="flex-end">
              <IconButton
                aria-label="Ver detalhes"
                alignSelf="right"
                variant="ghost"
                icon={<FiChevronRight />}
              />
            </Box>
          </Card>

          <Card>
            <Progress value={65} w="80%" colorScheme={getColorScheme(65)} />

            <Stack direction="row" align="center">
              <Avatar name="Lucas Machado" />
              <Text>Lucas Machado</Text>
            </Stack>

            <Text>Arroio do Meio</Text>

            <Text>RS</Text>

            <Box display="flex" justifyContent="flex-end">
              <IconButton
                aria-label="Ver detalhes"
                alignSelf="right"
                variant="ghost"
                icon={<FiChevronRight />}
              />
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
