import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';

import {
  OrderStatusFormData,
  orderStatusValidationSchema,
} from './orderStatusValidationSchema';
import { Order } from '../../../../models/Order';
import { extractOrderStatusOptions } from '../../../../utils';
import { useUpdateOrder } from '../../../../services/mutations';
import { FormSelect } from '../../../../components/Form/Select';

type OrderStatusModalProps = {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
};

export const OrderStatusModal = ({
  order,
  isOpen,
  onClose,
}: OrderStatusModalProps) => {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderStatusFormData>({
    resolver: zodResolver(orderStatusValidationSchema),
    defaultValues: {
      status: order.status,
    },
  });

  const invalidateDeliveryQuery = () => {
    queryClient.invalidateQueries({ queryKey: ['delivery'] });
  };

  const { mutate: editOrder } = useUpdateOrder({
    afterSuccess: () => {
      invalidateDeliveryQuery();
      onClose();
    },
  });

  const onSubmit = async (data: OrderStatusFormData) => {
    editOrder({ ...order, status: data.status });
  };

  const orderStatusOptions = extractOrderStatusOptions();

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Pedido #{order.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormSelect
              label="Status"
              placeholder="Selecione o status"
              name="status"
              control={control}
              errorMessage={errors?.status?.message}
              options={orderStatusOptions}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="brand">
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};
