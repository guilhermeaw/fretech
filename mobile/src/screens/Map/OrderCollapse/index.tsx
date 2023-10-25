import { ActionCollapse } from '@components/ActionCollapse';

import { CollapseContent } from './CollapseContent';
import { CollapseHeader } from './CollapseHeader';

export const OrderCollapse = () => {
  const handleConfirm = () => {};

  const handleCancel = () => {};

  return (
    <ActionCollapse
      collapseProps={{
        content: <CollapseContent />,
        header: <CollapseHeader />,
      }}
      actions={{
        cancelButtonLabel: 'Registrar ocorrência',
        confirmButtonLabel: 'Finalizar entrega',
        onCancel: handleCancel,
        onConfirm: handleConfirm,
      }}
    />
  );
};
