import React, { useState, useContext, useEffect } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  CopyFile,
  Reset,
  DocumentAdd,
  Checkmark,
} from "@carbon/icons-react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import world from "./world.svg";
import { MapContext } from "./Context/MapContext";

import InfoModal from "./InfoModal";
import { ErrorContext } from "./Context/ErrorContext";

const TopNav = (props) => {
  const [copyFilterCss, setCopyFilterCss] = useState({
    value: props.theCss,
    copied: false,
  });

  const [copyMapComponent, setCopyMapComponent] = useState({
    value: `<TileLayer 
        url='${props.currentMapList[props.activeMap].mapUrl}' 
        attribution='${props.currentMapList[props.activeMap].mapAttribution}'
      />`,
    copied: false,
  });

  useEffect(() => {
    setCopyMapComponent({
      value: `<TileLayer 
        url='${props.currentMapList[props.activeMap].mapUrl}' 
        attribution='${props.currentMapList[props.activeMap].mapAttribution}'
      />`,
    });
  }, [props.activeMap]);

  const {
    isShowingToast,
    setShowingToast,
    isShowingNewMapModal,
    setShowingNewMapModal,
  } = useContext(MapContext);

  const { isShowingError, setShowingError } = useContext(ErrorContext);

  const copyCss = () => {
    /* console.log(props.theCss);
    console.log(isShowingToast); */
  };

  return (
    <div className="TopNav">
      <div className="topBar">
        <div className="titleContainer">
          <div className="titleTab">
            <div className="title_logo_container">
              <h2 className="title">World styles</h2>
              <img className="logo" src={world} alt="world icon" />
            </div>
            <p className="info">info</p>
          </div>

          <InfoModal />
        </div>

        <div className="menuElements">
          <div className="filterContainer">
            <div className="filterTab">
              <p>Filters</p>
              <ExpandMoreIcon className="dropDownArrow"></ExpandMoreIcon>
            </div>

            <div className="sliderContainer">
              <div className="colorFilterContainer">
                <div className="filterContainer">
                  <p className="dropdownLabel">Color</p>

                  {props.colorFilters.map((f) => (
                    <div className="styleSlider" key={f.label}>
                      <p className="sliderLabel">{f.label}</p>
                      <div className="sliderGroup">
                        <Slider
                          className="slider"
                          getAriaValueText={"valuetext"}
                          valueLabelDisplay="auto"
                          value={f.state}
                          min={0}
                          max={f.maxValue}
                          step={1}
                          onChange={f.handleState}
                        />
                        <input
                          type="number"
                          className={"sliderInputValue"}
                          value={f.state}
                          onChange={(e) => {
                            console.log(e.target.value);
                            f.handleState(e.target.value);
                          }}
                        ></input>
                        <Reset size={16}
                          className="resetValues"
                          onClick={() => {
                            f.handleState(f.initialValue);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="otherFilterContainer">
                <div className="filterContainer">
                  <p className="dropdownLabel">Other</p>

                  {props.otherFilters.map((f) => (
                    <div className="styleSlider" key={f.label}>
                      <p className="sliderLabel">{f.label}</p>
                      <div className="sliderGroup">
                        <Slider
                          className="slider"
                          getAriaValueText={"valuetext"}
                          valueLabelDisplay="auto"
                          value={f.state}
                          min={0}
                          max={f.maxValue}
                          step={1}
                          onChange={f.handleState}
                        />
                        <input
                          type="number"
                          className={"sliderInputValue"}
                          value={f.state}
                          onChange={(e) => {
                            console.log(e.target.value);
                            f.handleState(e.target.value);
                          }}
                        ></input>
                        <Reset size={16}
                          className="resetValues"
                          onClick={() => {
                            f.handleState(f.initialValue);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="filterActionsContainer">
                <CopyToClipboard
                  text={props.theCss}
                  onCopy={(text, result) => {
                    setCopyFilterCss({
                      value: copyFilterCss.value,
                      copied: true,
                    });
                  }}
                >
                  <div
                    className="copyCssBtn listActionBtn"
                    onClick={() => {
                      copyCss();
                      console.log(setShowingToast);
                      setShowingToast(true);
                      setTimeout(() => {
                        setShowingToast(false);
                      }, 500);
                    }}
                  >
                    <CopyFile size={16} className="filterActionsIcon" />
                    <p className="filterActionsLabel">Copy CSS</p>
                    {/* <button className="filterBtn" onClick={copyCss}>
                  
                    Copy CSS
                  </button> */}
                  </div>
                </CopyToClipboard>
                <div
                  className="resetFiltersBtn listActionBtn"
                  onClick={() => {
                    props.colorFilters.forEach((f) => {
                      f.handleState(f.initialValue);
                    });
                    props.otherFilters.forEach((f) => {
                      f.handleState(f.initialValue);
                    });
                  }}
                >
                  <Reset size={16} className="filterActionsIcon" />
                  <p className="filterActionsLabel">Reset all</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mapListContainer">
            <div className="mapTab">
              <p>Maps{/* {props.currentMapList[0].mapName */}</p>
              <ExpandMoreIcon className="dropDownArrow"></ExpandMoreIcon>
            </div>
            <div className="mapContainer">
              <div className="labeledMapsContainer">
                <p className="dropdownLabel labeledMapsTitle">
                  Leaflet providers
                </p>
                <ul>
                  {props.currentMapList.map((m, i) => (
                    // <MapItem />
                    <li
                      className="mapListItem"
                      key={i}
                      onClick={() => {
                        //setActiveMap(i);
                        props.changeMap(i);
                      }}
                    >
                      <span>
                        {m.mapName.length <= 20
                          ? m.mapName
                          : m.mapName.slice(0, 20) + "..."}
                      </span>

                      {props.activeMap === i ? (
                        <Checkmark size={24} className="mapCheckmark" />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="myMapsContainer"></div>
              <div className="mapActionsContainer">
                <CopyToClipboard
                  text={copyMapComponent.value}
                  onCopy={(text, result) => {
                    setCopyMapComponent({
                      value: copyMapComponent.value,
                      copied: true,
                    });
                  }}
                >
                  <div
                    className="copyCssBtn listActionBtn"
                    onClick={() => {
                      setShowingToast(true);

                      setTimeout(() => {
                        setShowingToast(false);
                      }, 500);
                    }}
                  >
                    <CopyFile size={16} className="filterActionsIcon" />
                    <p className="filterActionsLabel">Copy component</p>
                  </div>
                </CopyToClipboard>
                <div
                  className="addNewMapBtn listActionBtn"
                  onClick={() => {
                    setShowingNewMapModal(true);
                    if (isShowingError) {
                      setShowingError(false);
                      props.changeMap(0);
                    }
                  }}
                >
                  <DocumentAdd size={16} className="addNewMapIcon" />
                  <span>Add new map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
