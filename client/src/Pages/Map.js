import React, { useRef, useEffect, useState } from "react";
import Maps, { Marker, Popup } from "react-map-gl";
import MAP_TOKEN from "../config/keys";
import getCenter from "geolib/es/getCenter";

import Pin from "../assets/images/pin.svg";

const coords = [
  { latitude: 35.4150158, longitude: -80.8071362 },
  { latitude: 35.4148722, longitude: -80.8077347 },
  { latitude: 35.41530043, longitude: -80.8062991 },
];

const Map = () => {
  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 14,
  });

  return (
    <Maps
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxAccessToken={MAP_TOKEN}
      {...viewport}
      onMove={(nextViewport) => setViewport(nextViewport)}
    >
      {coords.map((spot) => (
        <Marker
          longitude={spot.longitude}
          latitude={spot.latitude}
          anchor="bottom"
        >
          <img className="pin" src={Pin} />
        </Marker>
      ))}
    </Maps>
  );
};

export default Map;
