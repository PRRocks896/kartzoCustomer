import React from "react";
import { about, partners } from "../components/helper/images";
import { scrollToTop } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./partners.css";

class Partners extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    scrollToTop();
  }

  render() {
    return (
      <>
        <section className="partner-bnr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <img className="logo1" src={about.logo1} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="dis-flex">
                  <div className="left-box">
                    <h1 className="tt1">
                      Become a delivery superhero and start earning{" "}
                    </h1>
                    <div className="bdr-tt">
                      <span className="big"></span>
                      <span className="small"></span>
                    </div>
                    <p>
                      With Dunzo, you can have flexible working hours and help
                      us make deliveries in your city.{" "}
                    </p>
                    <div className="btn-1">
                      <a href="#">
                        Become a Kartzo Partner{" "}
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="img-bnr">
                    <img src={partners.partner} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="box-1">
                  <img src={partners.partner1} alt="" />
                  <div className="box-tt">
                    <h2 className="sub-tt">You’re in charge</h2>
                    <p>There is no one to report to, you are your own boss</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="box-1">
                  <img src={partners.partner2} alt="" />
                  <div className="box-tt">
                    <h2 className="sub-tt">You pick the time</h2>
                    <p>
                      Log in and log out anytime you want. We are live 24x7 s
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="box-1">
                  <img src={partners.partner3} alt="" />
                  <div className="box-tt">
                    <h2 className="sub-tt">Your ride, your city</h2>
                    <p>All deliveries will be made within city limits </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="box-1">
                  <img src={partners.partner4} alt="" />
                  <div className="box-tt">
                    <h2 className="sub-tt">You’re in charge</h2>
                    <p>There is no one to report to, you are your own boss</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="box-1">
                  <img src={partners.partner5} alt="" />
                  <div className="box-tt">
                    <h2 className="sub-tt">You pick the time</h2>
                    <p>
                      Log in and log out anytime you want. We are live 24x7 s
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-6">
                <div className="box-1">
                  <img src={partners.partner6} alt="" />
                  <div className="box-tt">
                    <h2 className="sub-tt">Your ride, your city</h2>
                    <p>All deliveries will be made within city limits </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="he-said">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tt1">He said; She said</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
                <p className="tt-text">
                  Hear from our delivery partners about their experience on
                  Dunzo.{" "}
                </p>
              </div>
            </div>
            <div className="main-div">
              <div className="row">
                <div className="col-md-4">
                  <div className="said-box">
                    <div className="img-name-box">
                      <LazyLoadImage
                        alt="testimonial"
                        effect="blur"
                        src={partners.testimonial}
                      />

                      <div className="name-1">
                        <h4 className="tt1">Dipali M</h4>
                        <span className="tt2">Pune</span>
                      </div>
                    </div>
                    <p className="text-box">
                      <span className="big-tt">"</span>Being a Dunzo Partner has
                      given me the wings to go after my dreams.{" "}
                      <span className="big-tt big-tt2">"</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="said-box">
                    <div className="img-name-box">
                      <LazyLoadImage
                        alt="testimonial"
                        effect="blur"
                        src={partners.testimonial}
                      />
                      <div className="name-1">
                        <h4 className="tt1">Dipali M</h4>
                        <span className="tt2">Pune</span>
                      </div>
                    </div>
                    <p className="text-box">
                      <span className="big-tt">"</span>Being a Dunzo Partner has
                      given me the wings to go after my dreams.{" "}
                      <span className="big-tt big-tt2">"</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="said-box">
                    <div className="img-name-box">
                      <LazyLoadImage
                        alt="testimonial"
                        effect="blur"
                        src={partners.testimonial}
                      />
                      <div className="name-1">
                        <h4 className="tt1">Dipali M</h4>
                        <span className="tt2">Pune</span>
                      </div>
                    </div>
                    <p className="text-box">
                      <span className="big-tt">"</span>Being a Dunzo Partner has
                      given me the wings to go after my dreams.{" "}
                      <span className="big-tt big-tt2">"</span>
                    </p>
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

export default Partners;
