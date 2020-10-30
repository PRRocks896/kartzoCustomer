import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker: any = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props: any) => (
  <GoogleMap
    defaultZoom={8}
    center={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{
          lat: props.currentLocation.lat,
          lng: props.currentLocation.lng,
        }}
        // onClick={props.onMarkerClick}
        // onDragend={(t:any, map:any, coord:any):any => this.onMarkerDragEnd(coord)}
     
        draggable
      />
    )}
  </GoogleMap>
));

export default MapWithAMarker;