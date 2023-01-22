import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import React, { useState, useEffect } from "react";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Location() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(location);
      },

      (error) => console.log(error)
    );
  }, []);

  return (
    <div>
      {location ? (
        <MapContainer
          center={[30.9157057, 75.8257028]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "500px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[30.9157057, 75.8257028]}>
            <Popup>Punjab Mandi Board</Popup>
          </Marker>
          <Marker position={[30.9179164, 75.8578784]}>
            <Popup>Ghass Mandi</Popup>
          </Marker>
          <Marker position={[30.9167423, 75.8524598]}>
            <Popup>Gur Mandi</Popup>
          </Marker>
          <Marker position={[30.9243026, 75.8412298]}>
            <Popup>Kesar Ganj Mandi</Popup>
          </Marker>
          <Marker position={[30.9027274, 75.8248498]}>
            <Popup>Ghumar Mandi</Popup>
          </Marker>
          <Marker position={[30.9109058, 75.8867516]}>
            <Popup>Vardhman Sabji Mandi</Popup>
          </Marker>
          <Marker position={[30.9169575, 75.7792684]}>
            <Popup>Chhoti Puli Sabzi Mandi</Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </div>
  );
}

export default Location;

// 19.0759837, 72.8776559
