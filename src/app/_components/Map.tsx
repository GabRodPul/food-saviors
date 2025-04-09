"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../lib/fixLeafletIcons";

// Optional fix for default marker icons in Next.js

export default function SimpleMap() {
  return (
    <MapContainer
      center={[28.1235, -15.4363]}
      zoom={13}
      scrollWheelZoom={false}
      className="z-0 h-[500px] w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.4168, -3.7038]}>
        <Popup>Hello from Madrid! 📍</Popup>
      </Marker>
    </MapContainer>
  );
}
