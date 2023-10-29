import { Feather } from '@expo/vector-icons';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { Box, Center, Flex, Icon, IconButton, Text } from 'native-base';
import { useEffect, useRef, useState } from 'react';

import { PhotoPreview } from './PhotoPreview';

export const CompleteOrderCamera = () => {
  const cameraRef = useRef<Camera>(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | null>(null);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  const handleDiscardPhoto = () => {
    setPhoto(null);
  };

  const handleTakePicture = () => {
    cameraRef.current?.takePictureAsync({
      onPictureSaved: photo => {
        console.log(photo);
        setPhoto(photo);
      },
    });
  };

  if (!permission?.granted) {
    return (
      <Center flex={1}>
        <Text>Ative a câmera</Text>
      </Center>
    );
  }

  if (photo) {
    return <PhotoPreview photo={photo} onDiscard={handleDiscardPhoto} />;
  }

  return (
    <Box flex={1}>
      <Camera style={{ height: '100%' }} ref={cameraRef} type={CameraType.back}>
        <Flex flex={1} py="4" px="8" justify="flex-end" align="center">
          <IconButton
            size="lg"
            variant="solid"
            onPress={handleTakePicture}
            icon={<Icon as={Feather} name="camera" />}
          />
        </Flex>
      </Camera>
    </Box>
  );
};
