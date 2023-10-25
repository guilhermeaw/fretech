import { Collapse, CollapseProps } from '@components/Collapse';

import { Footer } from './Footer';

export type CollapseActionProps = {
  confirmButtonLabel: string;
  cancelButtonLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
};

type ActionCollapseProps = {
  actions: CollapseActionProps;
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
