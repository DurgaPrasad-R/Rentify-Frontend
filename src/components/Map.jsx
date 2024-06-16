import React from "react";
import GoogleMapReact from "google-map-react";
import icon from "../assets/marker1.png";

const AnyReactComponent = ({ icon }) => (
  <div>
    <img src={icon} alt="marker" className="z-50 w-6" />
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 16.566,
      lng: 81.5225,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={16.544893} lng={81.52124} icon={icon} />
      </GoogleMapReact>
    </div>
  );
}
