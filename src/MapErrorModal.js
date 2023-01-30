import React, { Component, useContext } from "react";

import { Close } from "@carbon/icons-react";
import { ErrorContext } from "./Context/ErrorContext";
import { MapContext } from "./Context/MapContext";

export default function MapErrorModal(props) {
  const { isShowingError, setShowingError } = useContext(ErrorContext);
  const { setShowingNewMapModal } = useContext(MapContext);

  return (
    <div className={`mapErrorModal modal  ${isShowingError ? "show" : null}`}>
      <div className="mapErrorContainer">
        <p className="mapErrorTitle">Error</p>
        <div
          className="closeIconContainer"
          onClick={() => {
            setShowingError(false);
            props.changeMap(0);
          }}
        >
          <Close size={32} />
        </div>
        <p className="errorText">The basemap URL is invalid!</p>
        <div className="btnContainer">
          <button
            className="btn primBtn"
            onClick={() => {
              setShowingError(false);
              props.changeMap(0);
              setShowingNewMapModal(true);
            }}
          >
            Back
          </button>
          <button
            className="btn"
            onClick={() => {
              setShowingError(false);
              props.changeMap(0);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

