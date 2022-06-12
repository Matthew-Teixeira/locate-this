import React, { useRef, useEffect, useState } from "react";
import Maps, { Marker, Popup } from "react-map-gl";
import MAP_TOKEN from "../config/keys";
import getCenter from "geolib/es/getCenter";

import Pin from "../assets/images/pin.svg";

const locations = [
  {
    name: "The Village",
    description: "This place is ...",
    lat: 35.4150158,
    long: -80.8071362,
  },
  {
    name: "Taco Bell",
    description: "This place is ...",
    lat: 35.4148722,
    long: -80.8077347,
  },
  {
    name: "Rhino Park",
    description: "This place is ...",
    lat: 35.41530043,
    long: -80.8062991,
  },
];

const coords = locations.map((result) => ({
  latitude: result.lat,
  longitude: result.long,
}));

const Map = () => {
  const center = getCenter(coords);

  const [selectedLocation, setSelectedLocation] = useState({});

  console.log(selectedLocation);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 14,
  });

  return (
    <div className="map">
      <Maps
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        mapboxAccessToken={MAP_TOKEN}
        {...viewport}
        onMove={(nextViewport) => setViewport(nextViewport)}
      >
        {locations.map((spot) => (
          <div key={spot.lat}>
            <Marker
              longitude={spot.long}
              latitude={spot.lat}
              anchor="bottom"
            >
              <img
                className="pin"
                src={Pin}
                alt="push-pin"
                aria-label="push-pin"
                onClick={() => setSelectedLocation(spot)}
              />
            </Marker>
            {selectedLocation.lat === spot.lat ? (
              <Popup 
              longitude={selectedLocation.long}
              latitude={selectedLocation.lat}
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
              >
                {spot.name}
              </Popup>
            ) : false}
          </div>
        ))}
      </Maps>
    </div>
  );
};

export default Map;
