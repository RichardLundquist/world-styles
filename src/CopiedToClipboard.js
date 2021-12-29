import { useContext } from 'react';
import {MapContext} from './Context/MapContext';

export default function CopiedToClipboard (props) {  

    const {isShowingToast, setShowingToast} = useContext(MapContext);

    return (
        <div 
            className={`copiedToClipboard modal ${isShowingToast ? 'show' : 'hide'}`}
        >
            <p>Copied to clipboard!</p>
        </div>
    )
}