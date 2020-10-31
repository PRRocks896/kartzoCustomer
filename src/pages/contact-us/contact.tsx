import React from "react";
import { about, applink, contact } from "../components/helper/images";
import {getAppName, scrollToTop} from '../utils';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./contact.css";
import constant from "../constant/constant";

class ContactUs extends React.Component {

  /** Constructor call */
  constructor(props: any) {
    super(props);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.contact + getAppName();
    scrollToTop();
  }

  /** Render Call */
  render() {
    return (
      <>
        <section className="about-bnr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <LazyLoadImage
                  className="logo1"
                  alt=""
                  effect="blur"
                  src={about.logo1}
                />
              </div>
            </div>
            <div className="row">
              <div className="banr-tt">
                <h1 className="tt1">Contact Us</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
                <p>
                  With Dunzo, you can have flexible working hours and help us
                  make deliveries in your city.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="contact-box">
                  <div className="map-add">
                    <LazyLoadImage
                      className="logo1"
                      alt="map"
                      effect="blur"
                      src={contact.map}
                    />
                  </div>
                  <div className="address">
                    <p>
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <p>
                      Contact Lorem Ipsum is simply dummy
                      <br />
                      Contact: 123@kartzo.in{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-one-app">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="flex-box">
                  <div className="left-box">
                    <h1 className="tt1">
                      One app to do it all Just Thabo Pule it!{" "}
                    </h1>
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
                        <LazyLoadImage
                          alt="flag"
                          effect="blur"
                          src={applink.Flag_of_South_Africa}
                        />
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
                  <div className="right-img">
                    <LazyLoadImage
                      alt="location-app"
                      effect="blur"
                      src={about.about}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ContactUs;
