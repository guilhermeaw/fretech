import { Loading } from '@components/Loading';
import { useLocation } from '@hooks/useLocation';
import { VStack } from 'native-base';
import { useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { OrderCollapse } from './OrderCollapse';

export function Map() {
  const mapRef = useRef<MapView>(null);
  const { location, hasLocationPermission } = useLocation({ mapRef });

  const origin = {
    latitude: location?.coords.latitude || 0,
    longitude: location?.coords.longitude || 0,
  };

  const destination = {
    latitude: -29.456985487867076,
    longitude: -52.03217359386774,
  };

  if (!location) return <Loading />;

  return (
    <VStack flex={1}>
      <OrderCollapse />

      <MapView
        initialRegion={{
          ...origin,
          latitudeDelta: 0.0008,
          longitudeDelta: 0.0008,
        }}
        ref={mapRef}
        style={{ height: '100%', width: '100%' }}
      >
        <Marker coordinate={destination} />

        {/* {hasLocationPermission && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            strokeWidth={3}
            strokeColor="blue"
            apikey=""
          />
        )} */}
      </MapView>
    </VStack>
  );
}
