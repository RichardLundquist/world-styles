import { ArrowUpRight } from "@carbon/icons-react";

export default function InfoModal() {
  return (
    <div className="infoModal">
      <div className="infoModalContainer">
        <div>
          <h4 className="linkfield_header">Who is this for?</h4>
          <p>People wanting to style their leaflet maps</p>
        </div>
        <div>
          <h4 className="linkfield_header">How do I use it?</h4>
          <p>1. Use one of the basemaps available from the MAPS dropdown, or link to your own map. </p>
          <p>2. Tweak the styles of the maps by moving the sliders. Click the "copy CSS" button in the bottom of the dropdown to paste into your own project.</p>
        </div>

        <div>
          <h4>Improvements or feedback?</h4>
          <p>Don't hesitate to write</p>
        </div>
        <div className="linkField">
          <a
            className="baseMapLink linkfield_link"
            href="https://leafletjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>leafletjs.com/</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            className="baseMapLink linkfield_link"
            href="https://www.richardlundquist.xyz"
            target="_blank"
            rel="noreferrer"
          >
            <span>richardlundquist.xyz</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
