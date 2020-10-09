import React from "react";
import { applink } from "../../components/helper/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class AppLink extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section className="one-app">
        <div className="container-fluid">
          <div className="flex-box">
            <div className="left-box">
              <h1 className="tt1">One app to do it all Just Thabo Pule it! </h1>
              <div className="img-flex">
                <a href="#">
                  <LazyLoadImage
                    alt="playstore-icon"
                    effect="blur"
                    src={applink.playstore}
                  />
                </a>
                <a href="#">
                  <LazyLoadImage
                    alt="appstore-icon"
                    effect="blur"
                    src={applink.appstore}
                  />
                </a>
              </div>
              <div className="src-location">
                <div className="input-box">
                  <LazyLoadImage alt="flag" effect="blur" src={applink.Flag_of_South_Africa} />

                  <input
                    type="search"
                    name="search"
                    className="src-input"
                    placeholder="Search for a location"
                  />
                </div>
                <button>Get App Link</button>
              </div>
            </div>
            <div className="right-img wow slideInRight" data-wow-duration="2s" data-wow-delay="5s">
              <LazyLoadImage
                alt="location-app"
                // effect="blur"
                src={applink.applocationimg}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AppLink;
