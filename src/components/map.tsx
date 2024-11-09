import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import React, { useEffect, useRef } from "react";

interface MapComponentProps {
	className?: string;
	children?: React.ReactNode; // In react components, anything in-between the component tags will be passed to this prop.
}

function MapComponent({ className, children }: MapComponentProps) {
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
		<div ref={mapContainer} className={className}>
			{children}
		</div>
	);
}

export default MapComponent;
