import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  Marker
} from "react-google-maps";
import EventEmitter from "../../event";

/** Google Map Intialize with current location */

const TrackingMap:any = compose(
  
   
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`,borderRadius: '10px 10px 0px 0px',overflow:'none'}} />,
    containerElement: <div style={{ height: `500px` }} />,
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
    /** Google Map */

    <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.latlong.lat, lng: props.latlong.lng }} options={{streetViewControl: false,fullscreenControl:false,mapTypeControl:false}}>
    {props.isMarkerShown && (
        <>
        {/* <Polyline
               path={[{ lat:21.9612, lng: 70.7939 }, { lat: 21.9614, lng: 70.7940 }]}
               
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2
                }}
            /> */}
        <Marker
         position={{ lat:21.9612, lng: 70.7939 }}
         draggable={true}
         ref={props.onMarkerMounted}
       />
      <Marker
        position={{ lat: props.latlong.lat, lng: props.latlong.lng }}
        draggable={true}
        ref={props.onMarkerMounted}
      />
      </>
    )}
  </GoogleMap>
));

export default TrackingMap;

// import React, { Component } from "react";
// import {
//     withGoogleMap,
//     withScriptjs,
//     GoogleMap,
//     DirectionsRenderer,
//     Marker
// } from "react-google-maps";

// class TrackingMap extends Component {
//     state:any = {
//         directions: undefined,
//         position:null,
//         isReached:false,
//         source: {
//             latitude: 26.4667,
//             longitude: 73.4500
//         },
//         destination: {
//             latitude: 22.2856,
//             longitude: 70.7561
//         },
//         origin:[
//             {lat: 26.4669, lng:  73.4503},
//             {lat: 26.4669, lng:  73.4503},
//             {lat: 26.4671, lng:  73.4573},
//             {lat: 26.4674, lng:  73.4576},
//             {lat: 26.4677, lng:  73.4580}
//         ]
//     }

//     constructor(props:any) {
//         super(props);
//     }

// componentDidMount() {
//     let len = this.state.origin.length;
//     setInterval(() => {
//         if(len !== 0) {
//             this.liveMap(len - 1);
//             len--;
//         }
//     },5000)
// }

// liveMap(originIndex: number) {
//     console.log("Index: ", originIndex);
//     const directionsService = new google.maps.DirectionsService();

//     const origin = this.state.origin[originIndex];
//     const destination = { lat: 26.4667, lng:  73.4500};

//     directionsService.route(
//         {
//             origin: origin,
//             destination: destination,
//             travelMode: google.maps.TravelMode.DRIVING,
//             waypoints: [
                
//             ]
//         },
//         (result:any, status:any) => {
//             console.log("result",result);
//             if (status === google.maps.DirectionsStatus.OK) {
//                 console.log(result)
//                 this.setState({
//                     directions: result
//                 });
//             } else {
//                 console.error(`error fetching directions ${result}`);
//             }
//         }
//     );
//     // this.startTimer();
// }

// // startTimer = () => {
// //     let timer = setInterval(this.manageTimer, 3000);
// //     this.setState({ timer });
// //   };

  
// //   componentWillUnmount() {
// //     clearInterval(this.state.timer);
// //   }

// //   manageTimer = () => {
// //     var states = this.state;

// //     if (states.isReached) {
// //       clearInterval(this.state.timer);
// //     } else {
// //       this.getLocation();
// //     }
// //   };

// //   getLocation() {
// //     let updatearray:any = [
// //     {lat: 26.4669, lng:  73.4503},
// //     {lat: 26.4669, lng:  73.4503},
// //     {lat: 26.4671, lng:  73.4573},
// //     {lat: 26.4674, lng:  73.4576},
// //     {lat: 26.4677, lng:  73.4580}
// //     ]
// //     this.setState({
// //         source:{
// //             latitude: updatearray[0].lat,
// //             longitude: updatearray[0].lng
// //         }
// //     })
// // }

// // onMarkerMounted(ref:any) {
// //     const refs:any = {};
// //     refs.marker = ref;
// // }

// // onPositionChanged: () => {
// //     const position = refs.marker.getPosition();
// //     // EventEmitter.dispatch('latlong', position);
// //   }

// render() {
//     const GoogleMapExample = withGoogleMap((props:any) => (
//         <GoogleMap
//             defaultCenter={{ lat: 22.2856, lng:  70.7561 }}
//             defaultZoom={8}
//             options={{streetViewControl: false,fullscreenControl:false,mapTypeControl:false}}
            
//         >
//              {/* <Marker title='You' draggable={true} position={{ lat: this.state.source.latitude, lng:this.state.source.longitude }}>
//              <img src={require('../../assets/images/delivery.png')}/>
//             </Marker> */}
//             {/* <Marker draggable title='You' position={{ lat: this.state.source.latitude, lng:this.state.source.longitude }}>
//                 <img src={require('../../assets/images/delivery.png')}/>
//             </Marker> */}
//             {/* {this.state.directions && 
//             (<DirectionsRenderer directions={this.state.directions}>
//                  <img src={require('../../assets/images/delivery.png')}/>
//                 </DirectionsRenderer>)
//             } */}
//         </GoogleMap>
//     ));

//     return (
//         <div>
//             <GoogleMapExample
//                 containerElement={<div style={{ height: `500px`}} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//             />
//         </div>
//        );
//     }
// }

// export default TrackingMap;