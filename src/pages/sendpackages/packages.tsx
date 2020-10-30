import React from "react";
import ReactDOM from "react-dom";
import MapWithMarker from '../map/map';

class Packages extends React.Component {
    state = {
      currentLatLng: {
        lat: 22.2856,
        lng: 70.7561
      },
      isMarkerShown: false
    }
    constructor(props:any) {
      super(props)
      this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
    }
  
    showCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState((prevState:any) => ({
              currentLatLng: {
                ...prevState.currentLatLng,
                lat: position.coords.latitude,
                lng: position.coords.longitude
              },
              isMarkerShown: true
            }))
            console.log("state",this.state);
            console.log("props",this.props)
          }
        )
      } else {
        // error => console.log(error)
      }
    }

    onMarkerDragEnd = (event:any) => {
        console.log("event",event);
    }
  
  
    componentDidMount() {
      this.showCurrentLocation()
    }
  
    render() {
      return (
        <div>
          <MapWithMarker
            isMarkerShown={this.state.isMarkerShown}
            currentLocation={this.state.currentLatLng}
           
            />
        </div>
      );
    }
  }

  export default Packages;