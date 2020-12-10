import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { header, trackorder } from "../../pages/components/helper/images";
import Layout from "../components/layout/layout";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import './trackorder.css';
import { withScriptjs } from "react-google-maps";
import TrackingMap from "../track-map/track-map";

class TrackOrder extends React.Component<{show: boolean}> {

  state = {
    isMarkerShown: false,
    lat: 22.2856,
    long: 70.7561,
    origin:[
        {lat: 26.4669, lng:  73.4503},
        {lat: 22.1573, lng:  70.7991},
        {lat: 22.1574, lng:  70.7992}
    ]
  }
  /** Constuctor call */
  constructor(props: any) {
    super(props);
  }

  /** Page Render call */
  componentDidMount() {
    document.title = constant.trackorder + getAppName();
    EventEmitter.dispatch('isShow', true);

    let len = this.state.origin.length;
        setInterval(() => {
            if(len !== 0) {
                this.getMap(len - 1);
                len--;
            }
        },5000)
  }

  liveMap(originIndex: number) {
    console.log("Index: ", originIndex);
    // const directionsService = new google.maps.DirectionsService();

    const origin = this.state.origin[originIndex];
    // const destination = { lat: 26.4667, lng:  73.4500};

    // directionsService.route(
    //     {
    //         origin: origin,
    //         destination: destination,
    //         travelMode: google.maps.TravelMode.DRIVING,
    //         waypoints: [
                
    //         ]
    //     },
    //     (result:any, status:any) => {
    //         console.log("result",result);
    //         if (status === google.maps.DirectionsStatus.OK) {
    //             console.log(result)
    //             this.setState({
    //                 directions: result
    //             });
    //         } else {
    //             console.error(`error fetching directions ${result}`);
    //         }
    //     }
    // );
    // this.startTimer();
}

  getMap(originIndex: number) {
    console.log("Index: ", originIndex);
    const origin = this.state.origin[originIndex];
    console.log("origin: ", origin);
    // const MapLoader = withScriptjs(TrackingMap);
    return (
      <TrackingMap
      isMarkerShown={true}
      latlong={origin}
    />
    // <MapLoader
    //     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I"
    //     loadingElement={<div style={{ height: `100%` }} />}
    // />
    );
  }

  /** Render DOM */
  render() {
      // console.log("TrackOrder",this.props)
    return (
      <>
        <header className="header">
            <div className="container-fluid">
              <div className="dis-flx">
                <div className="left-content">
                    <Link to = '/'>
                  <img src={header.logo} alt="logo" />
                    </Link>
                  {/* <a href="#">
                    <div className="search-box">
                      <img src={trackorder.location} alt="location" />
                      <span className="search-text"> Pretoria</span>
                    </div>
                  </a> */}
                </div>
                <div className="right-content">
                  <div className="cart-icon">
                    <img src={trackorder.shopping} alt="cart-icon" />
                  </div>
                  <a href="#" className="sign-tt">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </header>
        <section className="place-order">
          <div className="container-fluid">
            <div className="main-flex">
              <div className="left-box">
                {this.getMap}
                {/* <img src={trackorder.track} alt="" /> */}
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
