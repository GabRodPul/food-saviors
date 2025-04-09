"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "../../lib/fixLeafletIcons";
import "leaflet/dist/leaflet.css";
// Optional fix for default marker icons in Next.js

export default function SimpleMap() {
  return (
    <MapContainer
      center={[28.1235, -15.4363]}
      zoom={13}
      scrollWheelZoom={false}
      className="z-0 my-6 h-[500px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
