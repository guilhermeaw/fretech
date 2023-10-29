import { ActionButtons } from '@components/ActionButtons';
import { OrderStatus } from '@models/Order';
import { useNavigation } from '@react-navigation/native';
import { useActiveOrderStore } from '@store/useActiveOrderStore';
import { CameraCapturedPicture } from 'expo-camera';
import { Image, Box } from 'native-base';

type Props = {
  photo: CameraCapturedPicture;
  onDiscard: () => void;
};

export const PhotoPreview = ({ photo, onDiscard }: Props) => {
  const { goBack } = useNavigation();
  const { activeOrder, setActiveOrder } = useActiveOrderStore();

  const handleConfirm = () => {
    setActiveOrder({ ...activeOrder!, status: OrderStatus.DELIVERED });
    goBack();
  };

  return (
    <Box flex={1}>
      <Image flex={1} h="100%" alt="Foto tirada" source={{ uri: photo.uri }} />

      <ActionButtons
        onCancel={onDiscard}
        onConfirm={handleConfirm}
        confirmButtonLabel="Confirmar"
        cancelButtonLabel="Tirar outra foto"
        containerProps={{
          p: 2,
          space: 4,
          w: '100%',
          bottom: '2',
          position: 'absolute',
        }}
      />
    </Box>
  );
};
