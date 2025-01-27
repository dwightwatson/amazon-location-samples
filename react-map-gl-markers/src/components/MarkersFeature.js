// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Marker } from "react-map-gl";
import PinIcon from "./PinIcon";
import styles from "./MarkersFeature.module.css";
import geoJsonData from "../data/AmazonHubLockers.json"; // Amazon Hub Lockers in Vancouver

// Displays a single marker with interaction and custom icon
const SingleMarker = ({marker, selectedMarker, onMarkerClicked}) => {
  const latitude = marker.geometry.coordinates[1];
  const longitude = marker.geometry.coordinates[0];

  return (
    <>
    
      {/* Display marker with click handler that passes data back to top component */}
      <Marker latitude={latitude} longitude={longitude} onClick={(e) => onMarkerClicked(marker)} className={styles.marker}>

        {/* Amazon Location Service pin is used as the icon. Colour is updated when marker is selected */}
        <PinIcon size={35} isSelected={marker.properties.title === selectedMarker} />
      </Marker>
    </>
  );
}

// Display markers from GeoJSON data.
const MarkersFeature = ({ selectedMarker, onMarkerClicked}) => {
  return (
    <>
      {

        // Loop through each marker from the GeoJSON to have them displayed
        geoJsonData.features.map((marker, index) => {
          return (
            <SingleMarker key={index} marker={marker} selectedMarker={selectedMarker} onMarkerClicked={onMarkerClicked} />
          );
        })
      }
    </>
  );
}

export default MarkersFeature;