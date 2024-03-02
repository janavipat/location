"use client"
import React, { useState } from 'react';
import Map from "./Map";

const LocationTracker = () => {
  const [userLocation, setUserLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  };

  return (
    <div>
      <h1>Live Location Tracker</h1>
      <button onClick={getLocation}>Get Location</button>
      {userLocation && (
        <p>
          Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
          <Map latitude={userLocation.latitude} longitude={userLocation.longitude} />
        </p>
      )}
    </div>
  );
};

export default LocationTracker;
