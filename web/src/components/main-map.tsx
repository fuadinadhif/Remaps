"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import CurrentLocButton from "./current-loc-button";
import Places from "./places";

export default function MainMap() {
  const [userLoc, setUserLoc] = useState({
    lat: -6.175214455875171,
    lng: 106.82714183664612,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((loc) => {
        setUserLoc({ lat: loc.coords.latitude, lng: loc.coords.longitude });
      });
    }
  }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        defaultCenter={userLoc}
        defaultZoom={15}
        disableDefaultUI={true}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
      >
        <AdvancedMarker position={userLoc}>
          <Pin />
        </AdvancedMarker>
        <CurrentLocButton userLoc={userLoc} />
        <Places />
      </Map>
    </APIProvider>
  );
}
