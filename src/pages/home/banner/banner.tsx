import React from "react";
import { Link } from "react-router-dom";

class Banner extends React.Component {
  constructor(props: any) {
    super(props);
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
