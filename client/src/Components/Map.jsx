import React, { useState } from "react";
import Maps, { Marker, Popup } from "react-map-gl";
import MAP_TOKEN from "../config/keys";
import getCenter from "geolib/es/getCenter";

import Pin from "../assets/images/pin.svg";

const Map = ({ locations }) => {
  const coords = locations.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coords);

  const [selectedLocation, setSelectedLocation] = useState({});

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: locations.length === 1 ? locations[0].long : center.longitude,
    latitude: locations.length === 1 ? locations[0].lat : center.latitude,
    zoom: 10,
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
            <Marker longitude={spot.long} latitude={spot.lat} anchor="bottom">
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
            ) : (
              false
            )}
          </div>
        ))}
      </Maps>
    </div>
  );
};

export default Map;
