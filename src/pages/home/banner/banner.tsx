import React from "react";
import { Link } from "react-router-dom";
import constant from "../../constant/constant";
import SelectSearch from "react-select-search";
import './banner.css';
import { merchantService } from "../../../redux/index";
import { connect } from "react-redux";
import { searchCityListRequest } from "../../../modelController";

class Banner extends React.Component<{ history: any,searchLocationResponse:any }> {

  /** Banner Page State */
  bannerState = constant.bannerPage.state;
  state = {
    lat: this.bannerState.lat,
    long: this.bannerState.long,
    city: this.bannerState.city,
    area: this.bannerState.area,
    isSearch: this.bannerState.isSearch,
    location: this.bannerState.location,
    locationData:this.bannerState.locationData,
    cityid:this.bannerState.cityid
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.searchLocationDataKeyUp = this.searchLocationDataKeyUp.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.getLocationData = this.getLocationData.bind(this);
    this.onlocationSelectId = this.onlocationSelectId.bind(this);
  }

  /** Page Render */
  componentDidMount() {}

  /**
   * 
   * @param e : onKeyPress search value response get
   */
  async searchLocationDataKeyUp(e: any) {
    // console.log("e",e.target.value)
    const obj : searchCityListRequest= {
      value:e.target.value
    }
    if(obj.value) {
      this.props.searchLocationResponse(obj);
    }
  }

  /**
   * 
   * @param nextProps : get updated props value
   */
  componentWillReceiveProps(nextProps: any) {
    // console.log("props", nextProps);
    if (nextProps.locationDetail) {
      this.locationdetails(nextProps.locationDetail);
    }
  }

  /**
   * 
   * @param data : get lcoation details
   */
  locationdetails(data:any) {
    // console.log("data",data);
    this.setState({
      locationData:this.state.locationData = data
    })
  }

  /**
   * 
   * @param data : get selected city id
   */
  onlocationSelectId(data:any) {
    // console.log("data",data);
   this.setState({
     cityid:this.state.cityid = data
   })
  }

  /** Get current location */
  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      this.getAddress(this.state.lat, this.state.long);
    });
  }

  /** Get location and redirect in location page */
  getLocationData() {
    if(this.state.cityid) {
      this.state.locationData.map((city:any,index:number) => (
        city.value === this.state.cityid ? (
          this.props.history.push(`/${city.name}`)
        ) : ('')
      ))
    } else {
      this.props.history.push(`/${this.state.location}`);
    }
  }

  /**
   * 
   * @param latitude : get current location latitude
   * @param longitude : get current location longitude
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
            if (address && address.address_components.length > 0) {
              _this.setState({
                area: address.address_components[1].long_name
                  .toString()
                  .toLowerCase(),
                city: address.address_components[2].long_name
                  .toString()
                  .toLowerCase(),
              });
              _this.props.history.push(
                `/${_this.state.city}/${_this.state.area}`
              );
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
      <section className="banners-home">
        <div className="slider-box">
          <h1>Many needs, one app</h1>
          <p>Need groceries, food or pet supplies delivered? Get it Dun!</p>

          <div className="src-location" onKeyUp={this.searchLocationDataKeyUp}>
            <span className="location-img" onClick={this.getCurrentLocation}>
              <img src={require("../../../assets/images/track-location.svg")} />
            </span>
            <SelectSearch
            options={ this.state.locationData && this.state.locationData.length > 0 ? this.state.locationData : []}
            placeholder="Search for a location"
            search
            onChange={this.onlocationSelectId}
          />
            <button className="search-btn" onClick={this.getLocationData}>Proceed</button>
          </div>
        </div>
      </section>
    );
  }
}

/**
 * 
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  locationDetail: state.merchant.locationdata
});

/**
 * 
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({

  /** Search Location */
    searchLocationResponse: (data: any) =>
    dispatch(merchantService.searchLocationResponse(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
