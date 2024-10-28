"use client";

import { useEffect, useState } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

function Geocoding() {
  const geocodingApiLoaded = useMapsLibrary("geocoding");
  const [geocodingService, setGeocodingService] =
    useState<google.maps.Geocoder>();
  const [geocodingResult, setGeocodingResult] =
    useState<google.maps.GeocoderResult>();
  const [address] = useState("Jakarta");

  useEffect(() => {
    if (!geocodingApiLoaded) return;
    setGeocodingService(new google.maps.Geocoder());
  }, [geocodingApiLoaded]);

  useEffect(() => {
    if (!geocodingService || !address) return;

    geocodingService.geocode({ address }, (results, status) => {
      if (results && status === "OK") {
        console.log(results);
        setGeocodingResult(results[0]);
      }
    });
  }, [geocodingService, address]);

  if (!geocodingService) return <div>Loading...</div>;
  if (!geocodingResult) return <div>Geocoding...</div>;

  return (
    <div>
      <h1>{geocodingResult.formatted_address}</h1>
      <p>Latitude: {geocodingResult.geometry.location.lat()}</p>
      <p>Longitude: {geocodingResult.geometry.location.lng()}</p>
    </div>
  );
}

export default function AddPlace() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Geocoding />
    </APIProvider>
  );
}
