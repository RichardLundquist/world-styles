import React, { useContext, useState } from 'react';
// import {MapContext} from '../MapApp';

export const MapContext = React.createContext();

export default function MapProvider(props) {

    const [isShowingToast, setShowingToast] = useState(false);

    const [isShowingError, setShowingError] = useState(false);

    const [isShowingNewMapModal, setShowingNewMapModal] = useState(false);

    return (
        <MapContext.Provider value={{isShowingToast, setShowingToast, isShowingError, setShowingError, isShowingNewMapModal, setShowingNewMapModal}}>
            {props.children}
        </MapContext.Provider>
    )

}