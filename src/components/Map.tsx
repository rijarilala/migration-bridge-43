
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Moramanga, Madagascar coordinates
const OFFICE_LOCATION = {
  lng: 48.1974,
  lat: -18.9297,
  name: "MigraPro Cabinet - Moramanga"
};

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // This should be replaced with your actual Mapbox token
    // For security reasons, consider storing this in environment variables in production
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZXNhbXBsZSIsImEiOiJjbHV1cTEyeWUwN2ZpMmpwZ3M5OWVqaWh0In0.1bAAJHpdcNVXTpEHW9qrKw';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [OFFICE_LOCATION.lng, OFFICE_LOCATION.lat],
      zoom: 13
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for office location
    const marker = new mapboxgl.Marker({ color: '#8b5cf6' })
      .setLngLat([OFFICE_LOCATION.lng, OFFICE_LOCATION.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="text-sm font-medium">${OFFICE_LOCATION.name}</h3>`)
      )
      .addTo(map.current);

    // Open popup by default
    marker.togglePopup();

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-100">
      <div ref={mapContainer} className="w-full h-64" />
      <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs text-gray-500">
        MigraPro Cabinet - Moramanga, Madagascar
      </div>
    </div>
  );
};

export default Map;
