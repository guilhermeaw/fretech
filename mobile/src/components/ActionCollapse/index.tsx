import { ActionProps } from '@components/ActionButtons';
import { Collapse, CollapseProps } from '@components/Collapse';

import { Footer } from './Footer';

type ActionCollapseProps = {
  actions?: ActionProps;
  collapseProps: CollapseProps;
};

export const ActionCollapse = ({
  actions,
  collapseProps: { content, ...collapseProps },
}: ActionCollapseProps) => {
  return (
    <Collapse
      content={<Footer actions={actions}>{content}</Footer>}
      {...collapseProps}
    />
  );
};
