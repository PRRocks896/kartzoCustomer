import React from "react";
import ReactDOM from "react-dom";
import MyMapComponent from "../map/map";
import EventEmitter from "../../event";

class Packages extends React.Component {
  state = {
    lat: 22.2856,
    long: 70.7561,
    isMarkerShown: false,
    city: "",
    cityerror: "",
    area: "",
    country: "",
    countryerror: "",
    state: "",
    stateerror: "",
    pincode: "",
    pincodeerror: "",
    addresserror: "",
    address: "",
    name: "",
    nameerror: "",
    addresstype:"1",
    addresstypeerror: "",
    mobileerror: "",
    mobile: "",
    landmark: "",
    landmarkerror: "",
  };
  constructor(props: any) {
    super(props);
    EventEmitter.subscribe("latlong", (data: any) => {
      this.setState({
        lat: this.state.lat = data.lat().toString(),
        long: this.state.long = data.lng().toString(),
      });
      this.getAddress(this.state.lat,this.state.long);
    });
  }

  async getAddress(latitude: any, longitude: any) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      var request: any = new XMLHttpRequest();

      var method = "GET";
      var url =
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&sensor=true&key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I";
      var async = true;

      request.open(method, url, async);
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var address = data.results[0];
            console.log("address", address);
            if (address && address.address_components.length > 0) {
              _this.setState({
                // area: address.address_components[1].long_name
                //   .toString()
                //   .toLowerCase(),
                // city: address.address_components[3].long_name
                //   .toString()
                //   .toLowerCase(),
                // state: address.address_components[4].long_name
                //   .toString()
                //   .toLowerCase(),
                // country: address.address_components[5].long_name
                //   .toString()
                //   .toLowerCase(),
                // pincode: address.address_components[6].long_name,
                address: address ? address.formatted_address : '',
              });
            }
            resolve(address);
          } else {
            reject(request.status);
          }
        }
      };
      request.send();
    });
  }

  render() {
    return (
      <div style={{margin:'auto',width:'500px'}}>
        <MyMapComponent isMarkerShown={true} />
      </div>
    );
  }
}

export default Packages;
