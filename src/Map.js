import React, { useEffect, useContext } from "react";

import { MapContainer, useMap } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import { ErrorContext } from "./Context/ErrorContext";

function Map(props) {
  const { isShowingError, setShowingError } = useContext(ErrorContext);

  const MapUrl = () => {
    const map = useMap();

    let activeMapLayer = L.tileLayer(
      props.currentMapList[props.activeMap].mapUrl,
      {
        attribution: props.currentMapList[props.activeMap].mapAttribution,
      }
    );

    activeMapLayer.on("tileerror", () => {
      setShowingError(true);
    });

    useEffect(() => {
      console.log(props.activeMap);
      map.eachLayer((layer) => {
        map.removeLayer(layer);
      });
      map.addLayer(activeMapLayer);
    }, [props.activeMap]);

    return null;
  };

  return (
    <>
      <MapContainer
        center={{ lat: 52.52437, lng: 13.41053 }}
        zoom={3}
        zoomControl={false}
      >
        <MapUrl />
      </MapContainer>
    </>
  );
}

export default Map;
