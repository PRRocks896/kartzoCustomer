import React from "react";
import { Link } from "react-router-dom";
import { header, trackorder } from "../../pages/components/helper/images";
import Layout from "../components/layout/layout";
import './trackorder.css';

class TrackOrder extends React.Component<{show: boolean}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // <Layout show={}/>
  }

  render() {
      console.log("TrackOrder",this.props)
    return (
      <>
        <section className="place-order">
          <div className="container-fluid">
            <div className="main-flex">
              <div className="left-box">
                <img src={trackorder.track} alt="" />
              </div>
              <div className="right-box">
                <div className="track-box">
                  <div className="dis-box">
                    <span className="text-1">Order #58787175206</span>
                    <a className="link-tt" href="#">
                      HELP
                    </a>
                  </div>
                  <h6 className="tt-1">Meals And Memories</h6>
                  <span className="text-1">03:16 PM | 3 Items | R137</span>
                </div>

                <div className="track-box">
                  <div className="dis-box bdr-btm">
                    <h6 className="tt-2">Meals And Memories</h6>
                    <a className="btn-done" href="#">
                      DONE
                    </a>
                  </div>
                  <div className="dis-box bdr-btm">
                    <h6 className="tt-2">Food is Being Prepared</h6>
                    <a className="btn-done" href="#">
                      DONE
                    </a>
                  </div>
                  <div className="inr-box">
                    <img src={trackorder.orderpicked} alt="" />
                    <div className="tt-inr-box">
                      <h6 className="tt-2">Order Picked Up</h6>
                      <span className="text-1">
                        john is on the way to deliver your order. Tasty food en
                        route!
                      </span>
                      <div className="inr-box inr-box2">
                        <img src={trackorder.man} alt="" />
                        <div className="tt-inr-box">
                          <h6 className="tt-2">John</h6>
                          <span className="text-1">0123456789</span>
                        </div>
                      </div>
                    </div>
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

export default TrackOrder;
