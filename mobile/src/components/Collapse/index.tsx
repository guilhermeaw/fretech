import { Card, VStack } from 'native-base';
import { useState } from 'react';

import { Content } from './Content';
import { Header } from './Header';

export type CollapseProps = {
  header: React.ReactNode;
  content: React.ReactNode;
};

export const Collapse = ({ header, content }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const collapseIcon = isOpen ? 'chevron-up' : 'chevron-down';

  const handleCollapse = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <VStack w="100%" justifyContent="center" alignItems="center" p="4">
      <Card bg="white" w="80%">
        <Header onCollapse={handleCollapse} collapseIcon={collapseIcon}>
          {header}
        </Header>

        {isOpen && <Content>{content}</Content>}
      </Card>
    </VStack>
  );
};
