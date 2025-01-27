// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Popup } from "react-map-gl";

// Display a popup that appears when points are clicked
const LocationPopup = ({popupData, onPopupClose}) => {
  return (
    <Popup
      latitude={popupData.latitude}
      longitude={popupData.longitude}
      offsetTop={-15}
      offsetLeft={0}
      closeButton={true}
      closeOnClick={true}
      onClose={onPopupClose}
      anchor="bottom" >
        <div>
          <div><strong>{popupData.title}</strong></div>
          <div>{popupData.description}</div>
        </div>
    </Popup>
  );
}

export default LocationPopup;