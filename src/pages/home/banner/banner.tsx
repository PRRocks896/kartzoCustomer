import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { header } from "../../components/helper/images";


class Banner extends React.Component {
  constructor(props: any) {
    super(props);
    this.searchLocationDataKeyUp = this.searchLocationDataKeyUp.bind(this);
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

  render() {
    return (
      <section className="banners-home">
        <div className="slider-box">
          <h1>Many needs, one app</h1>
          <p>Need groceries, food or pet supplies delivered? Get it Dun!</p>

          <div className="src-location">
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
