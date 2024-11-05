import React, { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return; // Initialize map only once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // URL for map tiles
      center: [-74.5, 40], // Initial map center [lng, lat]
      zoom: 5, // Initial zoom level
    });

    // Clean up map instance on component unmount
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-wrap" />
    </div>
  );
};

export default MapComponent;
