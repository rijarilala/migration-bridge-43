
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

// Moramanga, Madagascar coordinates
const OFFICE_LOCATION = {
  lng: 48.1974,
  lat: -18.9297,
  name: "MigraPro Cabinet - Moramanga"
};

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      // This should be replaced with your actual Mapbox token
      // For security reasons, consider storing this in environment variables in production
      mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZXNhbXBsZSIsImEiOiJjbHV1cTEyeWUwN2ZpMmpwZ3M5OWVqaWh0In0.1bAAJHpdcNVXTpEHW9qrKw';

      // Check if WebGL is supported before initializing the map
      if (!mapboxgl.supported()) {
        setMapError("Your browser does not support Mapbox GL");
        return;
      }

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [OFFICE_LOCATION.lng, OFFICE_LOCATION.lat],
        zoom: 13,
        failIfMajorPerformanceCaveat: false // Be more tolerant of performance issues
      });

      // Handle map load error
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError("Unable to load the map");
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
    } catch (error) {
      console.error("Map initialization error:", error);
      setMapError("Unable to initialize the map");
      return;
    }
  }, []);

  // Fallback UI when map cannot be displayed
  if (mapError) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-100 bg-gray-50">
        <div className="flex flex-col items-center justify-center p-8 h-64 text-center">
          <MapPin size={32} className="text-brand-600 mb-3" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">{OFFICE_LOCATION.name}</h3>
          <p className="text-gray-600 mb-3">Lot 108T Moramanga 514, Madagascar</p>
          <p className="text-sm text-gray-500">{mapError}</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${OFFICE_LOCATION.lat},${OFFICE_LOCATION.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-brand-600 hover:text-brand-700 text-sm flex items-center"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    );
  }

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
