import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import EventEmitter from "../../event";

const MyMapComponent:any = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs:any = {};

      this.setState({
        position: null,
        onMarkerMounted: (ref:any) => {
          refs.marker = ref;
        },

        onPositionChanged: () => {
          const position = refs.marker.getPosition();
          EventEmitter.dispatch('latlong', position);
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)((props:any) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 22.2856, lng: 70.7561 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 22.2856, lng: 70.7561 }}
        draggable={true}
        ref={props.onMarkerMounted}
        onPositionChanged={props.onPositionChanged}
      />
    )}
  </GoogleMap>
));

export default MyMapComponent;