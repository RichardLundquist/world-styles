import React, { useContext, useState } from 'react';

export const ErrorContext = React.createContext();


export default function ErrorProvider (props) {

    const [isShowingError, setShowingError] = useState(false);

    return (
        <ErrorContext.Provider value={{isShowingError, setShowingError}}>
            {props.children}
        </ErrorContext.Provider>
    )

}