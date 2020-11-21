import React from "react";
import { features } from "../../components/helper/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Features extends React.Component {

  /** Constructor call */
  constructor(props: any) {
    super(props);
  }

  /** Render DOM */
  render() {
    return (
      <section className="we-kart">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="tt1">What do you want to get done?</h1>
              <div className="bdr-tt">
                <span className="big"></span>
                <span className="small"></span>
              </div>
            </div>
          </div>
          <div className="main-div">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-6">
                <div className="box-1 clr1">
                  <div className="bdr-bottom bclr1"></div>
                  <LazyLoadImage className="lazy-order"   alt="" effect="blur" src={features.order} />
                  <h3 className="tt-1">No minimum order</h3>
                  <p>Deliveries with no minimum order value</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-6">
                <div className="box-1 clr2">
                  <div className="bdr-bottom bclr2"></div>
                  <LazyLoadImage  className="lazy-order" alt="" effect="blur" src={features.clock} />

                  <h3 className="tt-1">Delivered in Quick Time</h3>
                  <p>The quickest way to get things delivered</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-6">
                <div className="box-1 clr3">
                  <div className="bdr-bottom bclr3"></div>
                  <LazyLoadImage  className="lazy-order" alt="" effect="blur" src={features.delivery} />

                  <h3 className="tt-1">Free delivery for new users</h3>
                  <p>Avail free delivery for a limited time</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-6">
                <div className="box-1 clr4">
                  <div className="bdr-bottom bclr4"></div>
                  <LazyLoadImage  className="lazy-order" alt="" effect="blur" src={features.map} />

                  <h3 className="tt-1">Available flexible hours</h3>
                  <p>Day or night, get it delivered</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pd-top-40">
            <div className="col-md-6">
              <div className="blog-1">
                <LazyLoadImage alt="img-1" effect="blur" src={features.img5} />

                <div className="buttom-text">
                  <h3 className="tt-1">You too can deliver in your city</h3>
                  <p>
                    Want to help us make deliveries in your city and earn up to
                    R 8000 per month? With flexible work hours of your choice,
                    all you need is a bike and a smartphone.
                  </p>
                  <a href="#" className="btn-kartzo-b">
                    Become a Kartzo Partner{" "}
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-1">
                <LazyLoadImage alt="img-1" effect="blur" src={features.img6} />

                <div className="buttom-text">
                  <h3 className="tt-1">Your business is our business</h3>
                  <p>
                    Does your business need on-demand hyperlocal deliveries?
                    With live tracking and express support, Kartzo for Business
                    is the one-stop solution for all your delivery needs.
                  </p>
                  <a href="#" className="btn-kartzo-b">
                    Get your business on Kartzo
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
