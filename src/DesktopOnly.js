import {useState, useEffect} from 'react';

export default function DesktopOnly() {

    const [showDeviceAlert, setShowDeviceAlert] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 500) {
            setShowDeviceAlert(true);
        }
    }, [])

    


    return (
        <div className={`desktopOnlyContainer modal ${showDeviceAlert ? 'show' : ''}`}>
            <h4 className="linkfield_header">Desktop only!</h4>
            <p>World Styles is a GUI for styling leaflet maps with CSS filters</p>
            <br></br>
            <p>The webapp is not optimized for mobile devices. Please try out the app on a desktop computer.</p>
        </div>
    )
}