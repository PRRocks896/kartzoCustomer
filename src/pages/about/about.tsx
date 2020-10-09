import React from "react";
import { about, applink } from "../components/helper/images";
import {scrollToTop} from '../utils';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './about.css';

class About extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    scrollToTop();
  }

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
              <div className="col-md-12">
                <div className="banr-tt">
                  <h1 className="tt1">About Us </h1>
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
          </div>
        </section>

        <section className="about-section-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Living in the city, we never have enough time to do all the
                  things we want to do.
                </p>
                <p>
                  Dunzo can change the way you move things, how you shop and
                  lets you access your city like never before. We’re an app that
                  connects you to the nearest delivery partner who can make
                  purchases, pick up items from any store or restaurant in the
                  city and bring them to you.
                </p>
                <p>
                  It’s never easy to make purchases or drop off packages when
                  you get busy with work, get stuck in traffic, or you might
                  even end up forgetting about it completely.
                </p>
                <p>
                  All you need to do is,
                  <br />
                  Tell us where to go, what needs to be done and when.
                  <br />
                  What happens next? Sit back, and let us worry about your
                  task-at-hand.
                  <br />
                  You could say that we are always on the move for you.
                </p>
                <p>
                  <b>Kartzo</b>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-one-app">
          <div className="container-fluid">
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
                    {/* <img src="images/appstore.png" alt="appstore-icon" /> */}
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
        </section>
      </>
    );
  }
}

export default About;
