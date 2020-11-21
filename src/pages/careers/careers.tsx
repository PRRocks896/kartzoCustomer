import React from "react";
import { carrers } from "../components/helper/images";
import { scrollToTop } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./careers.css";
import JobOpening from "../job-opening/job-opning";
import { Link } from "react-router-dom";

class Careers extends React.Component {

  /** constructor call */
  constructor(props: any) {
    super(props);
  }

  /** page render call */
  componentDidMount() {
    scrollToTop();
  }

  /** Render DOM */
  render() {
    return (
      <>
        <section className="career-bnr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="dis-flex">
                  <div className="left-box">
                    <h1 className="tt1">Discover your next move at Kartzo</h1>
                    <div className="bdr-tt">
                      <span className="big"></span>
                      <span className="small"></span>
                    </div>
                    <p>
                      With Kartzo, you can have flexible working hours and help
                      us make deliveries in your city.{" "}
                    </p>
                    <div className="btn-1">
                      <Link to="/carrers-job">
                        View Job Openings <i className="fas fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="img-bnr">
                    <img src={carrers.banner} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="career-con-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <h1 className="tt1">
                  Make every city accessible and local commerce efficient
                </h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
                <span className="bt-tt">
                  You can’t stop time, but you can save it!{" "}
                </span>
                <p className="tt-text">
                  Living in the city, there is never enough time to pick-up
                  supplies, grab food and wade through traffic on the way back
                  home. What if we could give you all that time back?{" "}
                </p>
                <p className="tt-text">
                  We are Kartzo. A 24/7, 3-sided platform for Merchants,
                  Delivery Partners, and Users. Think of us as the logistical
                  layer of every city, where our partners can pick and drop
                  anything within that city. From any store to your door, just
                  make a list and Dunzo will make it disappear. Armed with
                  technology and a customer-centric approach to our product, we
                  have become one of the most loved delivery and logistics
                  companies in India.
                </p>
                <p className="tt-text">
                  With thousands of merchants and delivery partners carrying out
                  millions of tasks every month, Kartzo is helping Indians get
                  things Dun - the smart way.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <img src={carrers.carrers1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="career-con-1 career-con-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <LazyLoadImage
                  alt="career-img2"
                  effect="blur"
                  src={carrers.carrers2}
                />
              </div>
              <div className="col-md-6">
                <h1 className="tt1">Be the best version of yourself </h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
                <span className="bt-tt">Work hard, Play hard! </span>
                <p className="tt-text">
                  We work in a fast-paced environment buzzing with exceptional
                  talent and endless creativity.Our time is spent working,
                  playing ping pong, listening to music that annoys our
                  neighbours, huddling around whiteboards, and working some
                  more.We’re trying to create a truly magical experience for our
                  users and we’re looking for some curious, innovative and open
                  minds to grow with us.If a spirited, fair and transparent work
                  space is what you’re looking, here's your opportunity to be
                  part of the Dunzo crew, and contribute in building the future
                  of convenience!{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="values-kartzo">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tt1">Values</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
              </div>
            </div>
            <div className="box-div">
              <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="customer-first"
                      effect="blur"
                      src={carrers.customer}
                    />

                    <h2 className="sub-title">Customer First </h2>
                    <p>
                      We deliver a 5-star experience for users, partners and
                      merchants on every order.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="be-dependable"
                      effect="blur"
                      src={carrers.dependable}
                    />
                    <img src="images/career/be-dependable.png" alt="" />
                    <h2 className="sub-title">Be Dependable </h2>
                    <p>We do what we say. On time, every time.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="kartzo-speed"
                      effect="blur"
                      src={carrers.kartzospeed}
                    />

                    <h2 className="sub-title"> Kartzo Speed </h2>
                    <p>We ship fast and often.</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="100-100"
                      effect="blur"
                      src={carrers.hundread}
                    />

                    <h2 className="sub-title">100 - 100</h2>
                    <p>
                      Every team member is entirely responsible for the final
                      outcome.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="more-less"
                      effect="blur"
                      src={carrers.moreless}
                    />
                    {/* <img src="images/career/more-less.png" alt="" /> */}
                    <h2 className="sub-title">Do More with Less</h2>
                    <p>
                      We get things done with efficient use of time, capital and
                      people.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="customer"
                      effect="blur"
                      src={carrers.customer}
                    />

                    <h2 className="sub-title">In Data we Trust</h2>
                    <p>We test, measure, learn, repeat.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="customer"
                      effect="blur"
                      src={carrers.customer}
                    />

                    <h2 className="sub-title">Radically Honest</h2>
                    <p>
                      We challenge openly and directly, but only attack the
                      idea, never the person.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <LazyLoadImage
                      alt="customer"
                      effect="blur"
                      src={carrers.customer}
                    />
                    <h2 className="sub-title">Celebrate</h2>
                    <p>We celebrate our wins - generously and together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="kartzo-benefits">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tt1">Kartzo Benefits</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  <ul className="carousel-indicators">
                    <li
                      data-target="#demo"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                  </ul>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="slider-caro">
                        <div className="box-text">
                          <h4 className="sub-tt">Medical Coverage</h4>
                          <p>
                            Medical Insurance covered for the individual, spouse
                            and two children{" "}
                          </p>
                        </div>
                        <div className="box-img">
                          <LazyLoadImage
                            alt="medical"
                            effect="blur"
                            src={carrers.medical}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="slider-caro">
                        <div className="box-text">
                          <h4 className="sub-tt">Medical Coverage</h4>
                          <p>
                            Medical Insurance covered for the individual, spouse
                            and two children{" "}
                          </p>
                        </div>
                        <div className="box-img">
                          <LazyLoadImage
                            alt="medical"
                            effect="blur"
                            src={carrers.medical}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="slider-caro">
                        <div className="box-text">
                          <h4 className="sub-tt">Medical Coverage</h4>
                          <p>
                            Medical Insurance covered for the individual, spouse
                            and two children{" "}
                          </p>
                        </div>
                        <div className="box-img">
                          <LazyLoadImage
                            alt="medical"
                            effect="blur"
                            src={carrers.medical}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <JobOpening />
      </>
    );
  }
}

export default Careers;
