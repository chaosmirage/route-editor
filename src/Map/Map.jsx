import React, { useMemo, useState } from 'react';
import { Map } from 'react-yandex-maps';

export default () => {
  const [zoom, setZoom] = useState(9)

  const mapState = useMemo(() => ({ center: [55.75, 37.57], zoom }), [
    zoom,
  ])

  return (
    <Map state={mapState} style={{ width: "100%", height: "100%" }}/>
  )
}
