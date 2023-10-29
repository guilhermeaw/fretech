import { ActionCollapse } from '@components/ActionCollapse';
import { OrderStatus } from '@models/Order';
import { useNavigation } from '@react-navigation/native';
import { useActiveOrderStore } from '@store/useActiveOrderStore';

import { CollapseContent } from './CollapseContent';
import { CollapseHeader } from './CollapseHeader';

type Props = {
  onCancel: () => void;
};

export const OrderCollapse = ({ onCancel }: Props) => {
  const { navigate } = useNavigation();
  const { activeOrder } = useActiveOrderStore();

  const handleConfirm = () => {
    navigate('completeOrderCamera');
  };

  const inProgress = activeOrder?.status === OrderStatus.IN_PROGRESS;

  const actions = inProgress
    ? {
        onCancel,
        onConfirm: handleConfirm,
        confirmButtonLabel: 'Finalizar entrega',
        cancelButtonLabel: 'Registrar ocorrência',
      }
    : undefined;

  return (
    <ActionCollapse
      actions={actions}
      collapseProps={{
        header: <CollapseHeader />,
        content: <CollapseContent />,
      }}
    />
  );
};
