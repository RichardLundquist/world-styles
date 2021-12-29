import React, { useState, useRef, useEffect } from "react";

import Map from "./Map";

import { MapList } from "./MapList";

import MapProvider from "./Context/MapContext";
import DesktopOnly from "./DesktopOnly";

import "./MapApp.scss";

import TopNav from "./TopNav";
import NewMapModal from "./NewMapModal";
import MapErrorModal from "./MapErrorModal";
import CopiedToClipboard from "./CopiedToClipboard";

function MapApp() {
  const [satValue, setSatValue] = useState(100);
  const [brightnessValue, setBrightnessValue] = useState(100);
  const [grayscaleValue, setGrayscaleValue] = useState(0);
  const [contrastValue, setContrastValue] = useState(100);
  const [hueRotationValue, setHueRotationValue] = useState(0);
  const [invertValue, setInvertValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(100);
  const [sepiaValue, setSepiaValue] = useState(0);

  const [activeMap, setActiveMap] = useState(0);

  const [theMaps, setTheMaps] = useState(MapList.maps);

  const filters = [
    {
      label: "Saturation",
      cssValue: "saturate",
      initialValue: 100,
      maxValue: 1000,
      state: satValue,
      unit: "%",
      handleState: setSatValue,
    },
    {
      label: "Hue rotation",
      cssValue: "hue-rotate",
      initialValue: 0,
      maxValue: 360,
      state: hueRotationValue,
      unit: "deg",
      handleState: setHueRotationValue,
    },

    {
      label: "Sepia",
      cssValue: "sepia",
      initialValue: 0,
      maxValue: 100,
      state: sepiaValue,
      unit: "%",
      handleState: setSepiaValue,
    },
    {
      label: "Invert",
      cssValue: "invert",
      initialValue: 0,
      maxValue: 100,
      state: invertValue,
      unit: "%",
      handleState: setInvertValue,
    },
    {
      label: "Brightness",
      cssValue: "brightness",
      initialValue: 100,
      maxValue: 100,
      state: brightnessValue,
      unit: "%",
      handleState: setBrightnessValue,
    },
    {
      label: "Grayscale",
      cssValue: "grayscale",
      initialValue: 0,
      maxValue: 100,
      state: grayscaleValue,
      unit: "%",
      handleState: setGrayscaleValue,
    },
    {
      label: "Contrast",
      cssValue: "contrast",
      initialValue: 100,
      maxValue: 100,
      state: contrastValue,
      unit: "%",
      handleState: setContrastValue,
    },
    {
      label: "Opacity",
      cssValue: "opacity",
      initialValue: 100,
      maxValue: 100,
      state: opacityValue,
      unit: "%",
      handleState: setOpacityValue,
    },
  ];

  const colorFilters = [
    {
      label: "Saturation",
      cssValue: "saturate",
      initialValue: 100,
      maxValue: 1000,
      state: satValue,
      unit: "%",
      handleState: setSatValue,
    },
    {
      label: "Hue rotation",
      cssValue: "hue-rotate",
      initialValue: 0,
      maxValue: 360,
      state: hueRotationValue,
      unit: "%",
      handleState: setHueRotationValue,
    },

    {
      label: "Sepia",
      cssValue: "sepia",
      initialValue: 0,
      maxValue: 100,
      state: sepiaValue,
      unit: "%",
      handleState: setSepiaValue,
    },
    {
      label: "Invert",
      cssValue: "invert",
      initialValue: 0,
      maxValue: 100,
      state: invertValue,
      unit: "%",
      handleState: setInvertValue,
    },
  ];

  const otherFilters = [
    {
      label: "Brightness",
      cssValue: "brightness",
      initialValue: 100,
      maxValue: 100,
      state: brightnessValue,
      handleState: setBrightnessValue,
    },
    {
      label: "Grayscale",
      cssValue: "grayscale",
      initialValue: 0,
      maxValue: 100,
      state: grayscaleValue,
      handleState: setGrayscaleValue,
    },
    {
      label: "Contrast",
      cssValue: "contrast",
      initialValue: 100,
      maxValue: 100,
      state: contrastValue,
      handleState: setContrastValue,
    },
    {
      label: "Opacity",
      cssValue: "opacity",
      initialValue: 100,
      maxValue: 100,
      state: opacityValue,
      handleState: setOpacityValue,
    },
  ];

  const values = [
    satValue,
    brightnessValue,
    grayscaleValue,
    contrastValue,
    hueRotationValue,
    invertValue,
    opacityValue,
    sepiaValue,
  ];

  let filterCss = `filter: `;

  filters.forEach((f) => {
    if (f.state !== f.initialValue) {
      filterCss += `${f.cssValue}(${f.state}${f.unit}) `;
    }
  });

  useEffect(() => {
    const mapStyle = mapRef.current.children[0].children[0].style;

    mapStyle.filter = `saturate(${satValue}%) brightness(${brightnessValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueRotationValue}deg) invert(${invertValue}%) contrast(${contrastValue}%) opacity(${opacityValue}%) sepia(${sepiaValue}%)`;
  }, [...values]);

  const mapRef = useRef(null);

  // NEW MAP SUBMISSION

  const handleSubmittedInput = (mapInput) => {
    const theUrl = mapInput.mapUrl.replace(/["']+/g, "").replaceAll("$", "");

    setTheMaps([
      ...theMaps,
      {
        mapUrl: theUrl,
        mapName: !mapInput.mapName
          ? "map #" + (theMaps.length + 1)
          : mapInput.mapName,
        mapAttribution: mapInput.mapAttribution,
      },
    ]);

    setActiveMap(theMaps.length);
  };

  const changeMap = (n) => {
    setActiveMap(n);
  };

  return (
    <div className="MapApp">
      <MapProvider>
        <NewMapModal handleSubmittedInput={handleSubmittedInput} />

        <MapErrorModal changeMap={changeMap} />

        <CopiedToClipboard />

        <DesktopOnly />

        <TopNav
          filters={filters}
          activeMap={activeMap}
          colorFilters={colorFilters}
          otherFilters={otherFilters}
          currentMapList={theMaps}
          changeMap={changeMap}
          theCss={filterCss}
          className="TopNav"
        />
      </MapProvider>

      <div className="mapContainer" ref={mapRef}>
        <Map
          className="map"
          currentMapList={theMaps}
          activeMap={activeMap}
          theMaps={theMaps}
          setTheMaps={setTheMaps}
        />
      </div>
    </div>
  );
}

export default MapApp;
