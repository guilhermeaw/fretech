import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';
import MapView from 'react-native-maps';

type Props = {
  mapRef: React.RefObject<MapView>;
};

export const useLocation = ({ mapRef }: Props) => {
  const [location, setLocation] = useState<LocationObject | null>();
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  const requestLocationPermission = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    setHasLocationPermission(granted);

    if (granted) {
      const currentLocation = await getCurrentPositionAsync();
      setLocation(currentLocation);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: 6,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      response => {
        console.log({ response });
        setLocation(response);
        mapRef?.current?.animateCamera({
          center: {
            latitude: response.coords.latitude,
            longitude: response.coords.longitude,
          },
          pitch: 70,
        });
      },
    );
  }, []);

  return { location, hasLocationPermission };
};
