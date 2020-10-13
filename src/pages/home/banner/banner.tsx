import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { header } from "../../components/helper/images";


class Banner extends React.Component<{history:any}> {
  state = {
    lat:'',
    long:'',
    city:'',
    area:''
  }
  constructor(props: any) {
    super(props);
    this.searchLocationDataKeyUp = this.searchLocationDataKeyUp.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  async searchLocationDataKeyUp(e: any) {
   
  //   axios
  //   .get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I`,{headers:{'Access-Control-Allow-Origin': '*'}})
  //   .then((res: any) => {
  //     console.log("searchLocationDataKeyUp", res);

  // }).catch((err:any) => {
  //   console.log("error", err);
  // })
}

componentDidMount() {
}

async getCurrentLocation() { 
  navigator.geolocation.getCurrentPosition((position:any) => {
    this.setState({
      lat:position.coords.latitude,
      long:position.coords.longitude
    })
  this.getAddress(this.state.lat,this.state.long);
  });
}

async getAddress (latitude:any, longitude:any) {
  let _this = this;
  return new Promise(function (resolve, reject) {
      var request:any = new XMLHttpRequest();

      var method = 'GET';
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true&key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I';
      var async = true;

     request.open(method, url, async);
      request.onreadystatechange = function() {
          if (request.readyState === 4) {
              if (request.status === 200) {
                  var data = JSON.parse(request.responseText);
                  var address = data.results[0];
                  if(address && address.address_components.length > 0) {
                    _this.setState({
                      area:address.address_components[0].long_name.toString().toLowerCase(),
                      city:address.address_components[3].long_name.toString().toLowerCase()
                    })
                    _this.props.history.push(`/${_this.state.city}/${_this.state.area}`)
                  }
                  resolve(address);
              }
              else {
                  reject(request.status);
              }
          }
      };
      request.send();
  });
};

  render() {
    return (
      <section className="banners-home">
        <div className="slider-box">
          <h1>Many needs, one app</h1>
          <p>Need groceries, food or pet supplies delivered? Get it Dun!</p>
          
          <div className="src-location">
            <span className="location-img" onClick={this.getCurrentLocation}>
              <img src={require('../../../assets/images/track-location.svg')}/>
            </span>
            <input
              type="search"
              name="search"
              className="src-input"
              placeholder="Search for a location"
              onKeyUp={this.searchLocationDataKeyUp}
            />
            <button>
              <Link to="/search-city" style={{ color: "#fff" }}>
                Proceed
              </Link>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
