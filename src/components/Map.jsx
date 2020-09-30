import React, { useCallback, useRef, } from 'react';
import PropTypes from 'prop-types';
import { Map as YandexMap, Placemark, Polyline } from 'react-yandex-maps';
import { result } from 'lodash';

const Map = ({
  mapState,
  setCenter,
  points,
  coordinates,
  updatePoint,
}) => {
  const mapElement = useRef(null);

  const handleMapLoad = useCallback(() => {
    mapElement.current.events.add('actionend', (e) => {
      const newCenter = result(mapElement, 'current.getCenter');
      setCenter(newCenter);
    });
  }, [setCenter]);

  const handlePlacemarkDragEnd = useCallback((id) => {
    return (e) => {
      const attributes = {
        coordinates: result(e, 'originalEvent.target.geometry.getCoordinates')
      };

      updatePoint({ id, attributes });
    }
  }, [updatePoint]);

  return (
    <YandexMap
      instanceRef={mapElement}
      state={mapState}
      style={{ width: "100%", height: "100%" }}
      onLoad={handleMapLoad}
      modules={['geoObject.addon.balloon']}
    >
      { points.map(({ coordinates, id, name }) => {
        return (
          <Placemark
            key={id}
            geometry={coordinates}
            options={{ draggable: true }}
            onDragEnd={handlePlacemarkDragEnd(id)}
            properties={{
              hintContent: name,
              balloonContent: name,
            }}
          />
        );
      })}
    <Polyline
      geometry={coordinates}
      options={{
        balloonCloseButton: false,
        strokeColor: '#000',
        strokeWidth: 4,
        strokeOpacity: 0.5,
      }}
    />
    </YandexMap>
  )
};

Map.propTypes = {
  mapState: PropTypes.shape({
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
  }).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  updatePoint: PropTypes.func.isRequired,
  setCenter: PropTypes.func.isRequired,
};

export default Map;
