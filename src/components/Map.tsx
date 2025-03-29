
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// You'll need to set your Mapbox token as an environment variable
// For development purposes, we're including it directly here, but in production
// this should be loaded from environment variables
const MAPBOX_TOKEN = 'pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbHhhbXBsZS10b2tlbi0xMjM0NSJ9.example';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Define the location coordinates and settings
  const longitude = 47.737598; // Moramanga, Madagascar approximate longitude
  const latitude = -18.939822; // Moramanga, Madagascar approximate latitude
  const zoom = 14;

  useEffect(() => {
    // Check if mapboxgl is supported in this browser
    if (!mapboxgl.supported()) {
      setError('Your browser does not support Mapbox GL');
      return;
    }

    // Don't initialize map if it already exists or container is missing
    if (map.current || !mapContainer.current) return;

    try {
      // Set your access token
      mapboxgl.accessToken = MAPBOX_TOKEN;

      // Initialize map with error handling options
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: zoom,
        failIfMajorPerformanceCaveat: false, // Don't fail on performance issues
      });

      // Add navigation control (zoom buttons)
      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      // Add a marker for the location
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map.current);

      // Handle map load success
      map.current.on('load', () => {
        console.log('Map loaded successfully');
      });

      // Handle map error
      map.current.on('error', (e) => {
        console.error('Map error:', e);
        setError('Error loading map');
      });
    } catch (err) {
      console.error('Failed to initialize map:', err);
      setError('Failed to initialize map. Try using a different browser or device.');
    }

    // Cleanup on unmount
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // If there's an error, show fallback content with location information and a link to Google Maps
  if (error) {
    return (
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <p className="text-red-600 mb-2">{error}</p>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Notre Adresse:</p>
          <p>Lot 108T Moramanga 514, Madagascar</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:text-brand-700 underline mt-2"
          >
            Voir sur Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer}
      className="h-[300px] w-full rounded-lg overflow-hidden border border-gray-200"
      style={{ backgroundColor: '#e5e7eb' }}
    />
  );
};

export default Map;
