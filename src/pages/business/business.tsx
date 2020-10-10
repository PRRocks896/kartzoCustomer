import React from "react";
import { partners, business } from "../components/helper/images";
import { scrollToTop } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./business.css";

class Business extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    scrollToTop();
  }

  render() {
    return (
      <>
        <section className="business-bnr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="left-box">
                  <h1 className="tt1">Kartzo for your deliveries </h1>
                  <div className="bdr-tt">
                    <span className="big"></span>
                    <span className="small"></span>
                  </div>
                  <p>
                    Does your business need on-demand, hyperlocal deliveries?
                    Dunzo for Business is the one-stop solution you’re looking
                    for.
                  </p>
                  <div className="btn-1">
                    <a href="#">
                      Sign up for free<i className="fas fa-angle-right"></i>
                    </a>
                    <a href="#" className="login">
                      Login<i className="fas fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-use-kartzo">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tt1">Why use Kartzo</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
              </div>
            </div>
            <div className="box-div">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="box">
                    <img src={business.express} alt="" />
                    <h2 className="sub-title">
                      {" "}
                      Express
                      <br /> Support{" "}
                    </h2>
                    <p>We’re always here to answer your queries</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="box">
                    <img src={business.tracking} alt="" />
                    <h2 className="sub-title">
                      {" "}
                      Live <br /> tracking{" "}
                    </h2>
                    <p>Get live updates about your delivery</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="box">
                    <img src={business.scheduled} alt="" />
                    <h2 className="sub-title">
                      {" "}
                      Scheduled
                      <br />
                      deliveries{" "}
                    </h2>
                    <p>Pick up and deliver your goods anytime you choose</p>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="box">
                    <img src={business.order} alt="" />
                    <h2 className="sub-title"> Multiple orders </h2>
                    <p>Raise multiple orders at the same time</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="box">
                    <img src={business.integration} alt="" />
                    <h2 className="sub-title"> API integration </h2>
                    <p>Reduces the hassle of raising orders manually</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="box">
                    <img src={business.express} alt="" />
                    <h2 className="sub-title"> Expand your business </h2>
                    <p>
                      Grow as a hyper-local business with no added cost &amp;
                      service fee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brands-association">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tt1">Brands in association</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
              </div>
            </div>
            <div className="logo-div">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand1} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand2} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand3} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand4} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand5} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand6} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand7} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <img src={business.brand8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sell-on">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="dis-flex">
                  <div className="left-box">
                    <h1 className="tt1">Sell on Kartzo </h1>
                    <div className="bdr-tt">
                      <span className="big"></span>
                      <span className="small"></span>
                    </div>
                    <p>
                      List your business on the fastest growing hyperlocal
                      delivery service
                    </p>
                    <div className="btn-1">
                      <a href="#" className="sign-up-btn">
                        Sign up for free<i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="img-bnr">
                    <img src={business.design} alt="" />
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
                      <img src={partners.testimonial} alt="" />
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
                      <img src={partners.testimonial} alt="" />
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
                      <img src={partners.testimonial} alt="" />
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

export default Business;
