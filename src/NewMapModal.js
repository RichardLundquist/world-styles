import React, { useState, Component, useContext } from "react";
//import { TextField } from "@material-ui/core";

import { Close32, ArrowUpRight16 } from "@carbon/icons-react";

import { MapContext } from "./Context/MapContext";
import { ErrorContext } from "./Context/ErrorContext";

export default function NewMapModal(props) {
  const [mapInput, setMapInput] = useState({
    mapUrl: "",
    mapName: "",
    mapAttribution: "attribution txt",
  });

  const { isShowingNewMapModal, setShowingNewMapModal } =
    useContext(MapContext);

  const { isShowingError, setShowingError } = useContext(ErrorContext);

  const [reqFieldError, setReqFieldError] = useState(false);

  const handleInputChange = (evt) => {
    setMapInput({ ...mapInput, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mapInput.mapUrl) {
      setReqFieldError(true);
      return;
    }

    props.handleSubmittedInput(mapInput);
    console.log(mapInput);
    setShowingNewMapModal(false);

    setMapInput({
      mapUrl: "",
      mapName: "",
      mapAttribution: "attribution txt",
    });

    document.querySelector(".mapUrlInput").value = "";
    document.querySelector(".mapAttributionInput").value = "";
  };

  return (
    <div
      className={`newMapModalOverlay  ${isShowingNewMapModal ? "show" : ""} `}
      onClick={(e)=>{
        console.log(e.target);
        if(e.target == document.querySelector('.newMapModalOverlay')) {
          setShowingNewMapModal(false);
        }
      }
    }
    >
      <div className="newMapModal modal">
        <p className="newMapTitle">New map</p>
        <div
          className="closeIconContainer"
          onClick={() => {
            setShowingNewMapModal(false);
            setReqFieldError(false);
          }}
        >
          <Close32 />
        </div>
        <div className="newMapInput">
          <form onSubmit={handleSubmit} className="newMapInputForm">
            <div className={`reqField ${reqFieldError ? "errorField" : ""}`}>
              <div className="reqFieldLabels">
                <label>Map URL</label>
                <span className="required_txt">Required field!</span>
              </div>

              <input
                className="mapInput mapUrlInput"
                type="text"
                placeholder="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                name="mapUrl"
                label="New map URL"
                onChange={handleInputChange}
              />
            </div>
            <label>Map name</label>
            <input
              className="mapInput mapNameInput"
              
              name="mapName"
              label="Map name"
              onChange={handleInputChange}
              placeholder="Map by OpenStreetMap"
            />

            <label>Attribution</label>
            <input
              className="mapInput mapAttributionInput"
             
              name="mapAttribution"
              label="Map attribution"
              onChange={handleInputChange}
              placeholder="Map by OpenStreetMap"
            />

            
          </form>
          <div className="newMapInputExampleContainer linkField">
            <h4 className="linkfield_header">Find more basemaps</h4>
            
            <a
              className="baseMapLink linkfield_link"
              href="https://leaflet-extras.github.io/leaflet-providers/preview/"
              target="_blank"
            >
              <span>leaflet-providers</span>
              <ArrowUpRight16 className="linkArrowIcon" />
            </a>
            <a
              className="baseMapLink linkfield_link"
              href="https://wiki.openstreetmap.org/wiki/Tile_servers"
              target="_blank"
            >
              <span>wiki.openstreetmap</span>

              <ArrowUpRight16 className="linkArrowIcon" />
            </a>
            <p className="disclaimer">Check the license for basemaps before using in your project.   
               </p>
          </div>
          <div className="btnContainer">
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="newMapInputBtn primBtn btn"
            >
              Continue
            </button>
            <button
              onClick={(e) => {
                setShowingNewMapModal(false);
                setReqFieldError(false);
              }}
              className="secBtn btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
