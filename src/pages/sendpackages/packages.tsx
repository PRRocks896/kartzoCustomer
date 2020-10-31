import React from "react";
import ReactDOM from "react-dom";
import MyMapComponent from "../map/map";
import EventEmitter from "../../event";
import constant from "../constant/constant";
import { packageStateRequest } from "../../modelController/packageModel";

class Packages extends React.Component {

  /** Package state */
  packagesState : packageStateRequest = constant.packagesPage.state;
  state = {
    lat:this.packagesState.lat,
    long: this.packagesState.long,
    isMarkerShown: this.packagesState.isMarkerShown,
    city: this.packagesState.city,
    cityerror: this.packagesState.cityerror,
    area: this.packagesState.area,
    country: this.packagesState.country,
    countryerror: this.packagesState.countryerror,
    state: this.packagesState.state,
    stateerror: this.packagesState.stateerror,
    pincode: this.packagesState.pincode,
    pincodeerror: this.packagesState.pincodeerror,
    addresserror: this.packagesState.addresserror,
    address: this.packagesState.address,
    name: this.packagesState.name,
    nameerror: this.packagesState.nameerror,
    addresstype:this.packagesState.addresstype,
    addresstypeerror: this.packagesState.addresstypeerror,
    mobileerror: this.packagesState.mobileerror,
    mobile: this.packagesState.mobile,
    landmark: this.packagesState.landmark,
    landmarkerror: this.packagesState.landmarkerror,
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

  /**
   * 
   * @param latitude : latitude
   * @param longitude : longitude
   */
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

  /** Render DOM */
  render() {
    return (
      <div style={{margin:'auto',width:'500px'}}>
        <MyMapComponent isMarkerShown={true} />
      </div>
    );
  }
}

export default Packages;
