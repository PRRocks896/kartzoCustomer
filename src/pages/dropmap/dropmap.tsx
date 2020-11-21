import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import EventEmitter from "../../event";

/** Google Map Intialize with current location */
const MyMapDropComponent:any = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`,borderRadius: '10px 10px 0px 0px',overflow:'none'}} />,
    containerElement: <div style={{ height: `250px` }} />,
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
          EventEmitter.dispatch('latlongdrop', position);
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)((props:any) => (
  
  /** Google Map */
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.long }} options={{streetViewControl: false,fullscreenControl:false,mapTypeControl:false}}>
  {props.isMarkerShown && (
    <Marker
      position={{ lat: props.lat, lng: props.long }}
      draggable={true}
      ref={props.onMarkerMounted}
      onPositionChanged={props.onPositionChanged}
    />
  )}
</GoogleMap>
));

export default MyMapDropComponent;