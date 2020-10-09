import React from "react";
import { testimonials } from "../../components/helper/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Testimonials extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section className="he-said">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="tt1">He said; She said</h1>
              <div className="bdr-tt">
                <span className="big"></span>
                <span className="small"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="comt-1">
                <div className="inr-box">
                  <LazyLoadImage
                    alt="user-1"
                    effect="blur"
                    src={testimonials.user1}
                  />
                  <div className="name">
                    <div>Surya V (26)</div>
                    <div>
                      <i className="fas fa-map-marker-alt"></i>Johannesburg{" "}
                    </div>
                  </div>
                  <p>
                    Kartzo has been extremely useful with reference to getting
                    things done in an unknown city. Delhi is sometimes too
                    cumbersome to deal with - Kartzo makes this easier.
                  </p>
                </div>
                <div className="inr-box inr-box12">
                  <LazyLoadImage
                    alt="user-2"
                    effect="blur"
                    src={testimonials.user2}
                  />
                  <div className="name">
                    <div>Surya V (26)</div>
                    <div>
                      <i className="fas fa-map-marker-alt"></i>Pretoria{" "}
                    </div>
                  </div>
                  <p>
                    Kartzo has pretty much become an integral part of my life
                    now, from getting food delivered to my workplace to pranking
                    a friend by sending him a potato anonymously.
                  </p>
                </div>
              </div>
              <div className="comt-1">
                <div className="inr-box inr-box12">
                  <LazyLoadImage
                    alt="user-3"
                    effect="blur"
                    src={testimonials.user3}
                  />
                  <div className="name">
                    <div>Surya V (26)</div>
                    <div>
                      <i className="fas fa-map-marker-alt"></i>Durban{" "}
                    </div>
                  </div>
                  <p>
                    Kartzo has pretty much become an integral part of my life
                    now, from getting food delivered to my workplace to pranking
                    a friend by sending him a potato anonymously.
                  </p>
                </div>
                <div className="inr-box">
                  <LazyLoadImage
                    alt="user-4"
                    effect="blur"
                    src={testimonials.user4}
                  />
                  <div className="name">
                    <div>Surya V (26)</div>
                    <div>
                      <i className="fas fa-map-marker-alt"></i>Cape Town{" "}
                    </div>
                  </div>
                  <p>
                    Kartzo has been extremely useful with reference to getting
                    things done in an unknown city. Delhi is sometimes too
                    cumbersome to deal with - Kartzo makes this easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
