"use client"
import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import Workertracking from "../workerlocation/Workertracking";

const WorkerLocationTracker = ({ workerId }) => {
    const [permissionGranted, setPermissionGranted] = useState(false);
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true, // You may want to enable high accuracy
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {
        if (isGeolocationEnabled && coords && !permissionGranted) {
            setPermissionGranted(true);
            updateWorkerLocation(workerId, coords);
            const res =  fetch("https://workdeal-a72bb-default-rtdb.firebaseio.com/location.json", {
    method: "POST", // Method should be in uppercase
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        workerId: workerId,
        latitude: coords.latitude,
        longitude: coords.longitude
    })
});
        }
        
    }, [coords, isGeolocationEnabled, permissionGranted, workerId]);

    const updateWorkerLocation = (workerId, coords) => {
        console.log("Worker's location updated:", coords);
    };

    return (
        <div>
            {!isGeolocationAvailable ? (
               console.log(" Your browser does not support geolocation")
            ) : !isGeolocationEnabled ? (
               console.log(" Geolocation is not enabled")
            ) : coords ? (
                <div>
                    {/* <p>Latitude: {coords.latitude}</p>
                    <p>Longitude: {coords.longitude}</p>
                    <p>Altitude: {coords.altitude}</p>
                    <p>Heading: {coords.heading}</p>
                    <p>Speed: {coords.speed}</p> */}
                    <Workertracking latitude={coords.latitude} longitude={coords.longitude} />
                </div>
            ) : (
                console.log("Getting the location data…")
            )}
        </div>
    );
};

export default WorkerLocationTracker;
