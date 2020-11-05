import React from "react";
import { applink } from "../../components/helper/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import constant from "../../constant/constant";
import { loginService } from "../../../redux/actions/index";
import { connect } from "react-redux";

class AppLink extends React.Component<{getAppLink:any}> {

  /** Contact State */
  applinkState = constant.servicePage.state;
  state = {
    mobile: this.applinkState.mobile,
    mobileerror: this.applinkState.mobileerror,
    hide: this.applinkState.hide
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getAppLink = this.getAppLink.bind(this);
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

  render() {
    return (
      <section className="one-app">
        <div className="container-fluid">
          <div className="flex-box">
            <div className="left-box">
              <h1 className="tt1">One app to do it all Just Thabo Pule it! </h1>
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
            <div className="right-img wow slideInRight" data-wow-duration="2s" data-wow-delay="5s">
              <LazyLoadImage
                alt="location-app"
                // effect="blur"
                src={applink.applocationimg}
              />
            </div>
          </div>
        </div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppLink);
