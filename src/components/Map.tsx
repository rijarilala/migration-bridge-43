
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Using a valid Mapbox public token - in production, this should be loaded from environment variables
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Define the location coordinates and settings
  const longitude = 47.737598; // Moramanga, Madagascar approximate longitude
  const latitude = -18.939822; // Moramanga, Madagascar approximate latitude
  const zoom = 14;

  useEffect(() => {
    if (!mapContainer.current) return;

    // First check if WebGL is supported, which Mapbox GL requires
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      setError('WebGL is not supported by your browser. You may need to update your browser or use a different one.');
      return;
    }

    // Don't initialize map if it already exists
    if (map.current) return;

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
        antialias: true // Enable antialiasing for smoother rendering
      });

      // Add navigation control (zoom buttons)
      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      // Add a marker for the location with popup
      const marker = new mapboxgl.Marker({ color: '#E63946' })
        .setLngLat([longitude, latitude])
        .addTo(map.current);
      
      // Add a popup with address information
      new mapboxgl.Popup({ closeOnClick: false, anchor: 'bottom' })
        .setLngLat([longitude, latitude])
        .setHTML('<strong>MigraPro</strong><br>Lot 108T Moramanga 514<br>Madagascar')
        .addTo(map.current);

      // Handle map load success
      map.current.on('load', () => {
        console.log('Map loaded successfully');
        setMapLoaded(true);
      });

      // Handle map error
      map.current.on('error', (e) => {
        console.error('Map error:', e);
        setError('Error loading map: ' + e.error?.message || 'Unknown error');
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

  // If there's an error or map is still loading, show fallback content with location information and a link to Google Maps
  if (error || !mapLoaded) {
    return (
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        {error && <p className="text-red-600 mb-2">{error}</p>}
        {!mapLoaded && !error && <p className="text-gray-600 mb-2">Loading map...</p>}
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
