import React from "react";
import { about, applink, contact } from "../components/helper/images";
import {getAppName, scrollToTop} from '../utils';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./contact.css";
import constant from "../constant/constant";
import { loginService } from "../../redux/actions/index";
import { connect } from "react-redux";

class ContactUs extends React.Component<{getAppLink:any}> {

  /** Contact State */
  contactState = constant.servicePage.state;
  state = {
    mobile: this.contactState.mobile,
    mobileerror: this.contactState.mobileerror,
    hide: this.contactState.hide
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getAppLink = this.getAppLink.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.contact + getAppName();
    scrollToTop();
  }

  /**
   * 
   * @param event : update state value
   */
  onChange(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /** Check valid || invalid data */
  validate() {
    let mobileerror = "";

    const mobileRegex: any = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!this.state.mobile) {
      mobileerror = "please enter mobile number";
    } else if (!mobileRegex.test(this.state.mobile)) {
      mobileerror = "please enter valid mobile number";
    }

    if (mobileerror) {
      this.setState({
        mobileerror,
      });
      return false;
    }
    return true;
  }

  /** Get AppLink */
  async getAppLink() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        mobileerror: "",
      });
      if (this.state.mobile) {
        const obj = {
          phone: this.state.mobile,
        };
        this.props.getAppLink(obj);

        await this.setState({
          hide: true,
        });
      }
    }
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
                      <a href="https://play.google.com/store/apps/details?id=com.dunzo.user&hl=en" target="_blank">
                        <LazyLoadImage
                          alt="playstore-icon"
                          effect="blur"
                          src={applink.playstore}
                        />
                      </a>
                      <a href="https://apps.apple.com/in/app/dunzoit/id1032391728" target="_blank">
                        <LazyLoadImage
                          alt="appstore-icon"
                          effect="blur"
                          src={applink.appstore}
                        />
                      </a>
                    </div>
                    {this.state.hide === false ? (
                  <>
                    <div className="src-location">
                      <div className="input-box">
                        <LazyLoadImage
                          alt="flag"
                          effect="blur"
                          src={applink.Flag_of_South_Africa}
                        />
                        <input
                          id="number"
                          type="text"
                          name="mobile"
                          className="src-input"
                          placeholder="Enter Mobile Number"
                          maxLength={10}
                          onChange={this.onChange}
                        />
                      </div>
                      <button onClick={this.getAppLink}>Get App Link</button>
                    </div>
                    <div className="text-danger">{this.state.mobileerror}</div>
                  </>
                ) : (
                  <h4 className="mt-5">
                    It's DUN! Thanks, we shall notify you on the launch of Your
                    Mobile
                  </h4>
                )}
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


/**
 *
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  
  /** Get AppLink */
  getAppLink: (data: any) => dispatch(loginService.getAppLink(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);

