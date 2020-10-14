import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { loginimg } from "../../pages/components/helper/images";
import constant from "../constant/constant";
import OtpInput from "react-otp-input";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
import { loginService } from "../../redux/actions/index";
import "./login.css";

class Login extends React.Component<{ login: any; verifyOtp: any }> {
  /** loginstate = state define in login page */
  loginState = constant.loginpage.state;

  /** state
   * mobile = mobile number register
   * mobileerror = mobile number register error
   * otp = otp verification
   * otperror = otp error
   * isDisplay = otp section show and hide with conditionally
   */
  state = {
    mobile: this.loginState.mobile,
    mobileerror: this.loginState.mobileerror,
    otp: this.loginState.otp,
    otperror: this.loginState.otperror,
    isDisplay: this.loginState.isDisplay,
    disabled: this.loginState.disabled
  };

  constructor(props: any) {
    super(props);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.verifyotp = this.verifyotp.bind(this);
  }

  componentDidMount() {
    /** Login Page Header  */
    EventEmitter.dispatch("isShow", true);
    /** Login Page In Fotter Hide  */
    EventEmitter.dispatch("isShowFooter", true);
  }

  componentWillReceiveProps(nextProps: any, newState: any) {
    console.log("props",nextProps)
    const data: any = nextProps;
    if (data.userDetail) {
      if (data.userDetail.status === 200) {
        this.setState({
          isDisplay: true,
        });
      }
    }
  }

  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleChange(otp: any) {
    this.setState({
      otp: otp,
    });
  }

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

  validateOtp() {
    let otperror = "";

    const otpRegex: any = /^[0-9]{4,6}$/;
    if (!this.state.otp) {
      otperror = "please enter otp";
    } else if (!otpRegex.test(this.state.otp)) {
      otperror = "please enter valid otp";
    }

    if (otperror) {
      this.setState({
        otperror,
      });
      return false;
    }
    return true;
  }

  async login() {
    this.setState({
      disabled:true
    });
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        mobileerror: "",
      });
      if (this.state.mobile) {
        const obj = {
          phone: this.state.mobile,
        };
        this.props.login(obj);
      }
    } else {
      this.setState({
        disabled:false
      });
    }
  }

  enterPressed(event: any) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.login();
    }
  }

  verifyotp() {
    console.log("otp", this.state.otp);
    console.log("otp", this.state.mobile);
    const isValid = this.validateOtp();
    if (isValid) {
      this.setState({
        otperror: "",
      });
      if (this.state.otp && this.state.mobile) {
        const obj = {
          otp: this.state.otp,
          mobile: this.state.mobile,
        };
        this.props.verifyOtp(obj);
      }
    }
  }

  render() {
    return (
      <>
        <header className="header">
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                <Link className="back-arrow" to="/">
                  <img src={loginimg.backarrow} alt="logo" />
                </Link>
                <h4 className="res-tt1">Enter your mobile number</h4>
              </div>
              {/* <div className="right-content">
                <a href="#" className="sign-tt">
                  Sign in
                </a>
              </div> */}
            </div>
          </div>
        </header>
        <section className="m-verify">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="box1">
                  <div className="innr-box">
                    <div className="innr-flex">
                      <div className="numr-1">
                        <span className="code-n">+91</span>
                      </div>
                      <input
                        autoComplete="off"
                        className="input-box1"
                        name="mobile"
                        type="text"
                        maxLength={10}
                        onKeyPress={this.enterPressed.bind(this)}
                        onChange={this.handleChangeEvent}
                      />
                    </div>
                    <div className="btn-box">
                      <button className="otp-btn" onClick={this.login} disabled={this.state.disabled}>
                        Send OTP
                      </button>
                    </div>
                    <p className="text-1">
                      Your 10 digit mobile number
                      <span className="clr-1">*</span>
                    </p>
                  </div>
                  <div className="bdr-bottom"></div>
                  <div className="mb-4 text-danger">
                    {this.state.mobileerror}
                  </div>
                </div>

                {this.state.isDisplay === true ? (
                  <>
                    <div className="box2">
                      <div className="hide-div">
                        <p className="text-2">
                          Your 10 digit mobile number
                          <span className="clr-1">*</span>
                        </p>
                        <div className="main-box-otp">
                          <div className="otp-box">
                            <OtpInput
                              inputStyle={{ width: "100%" }}
                              value={this.state.otp}
                              onChange={this.handleChange}
                              numInputs={6}
                              // separator={<span>-</span>}
                            />
                          </div>
                          <div className="mb-4 text-danger">
                            {this.state.otperror}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="resend-tt">Resend</p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>
        {this.state.isDisplay === true ? (
          <div className="bottom-fix-box">
            <div className="right-btn">
              <button onClick={this.verifyotp}>Verify and continue</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userDetail: state.auth.user
});
const mapDispatchToProps = (dispatch: any) => ({
  login: (data: any) => dispatch(loginService.login(data)),
  verifyOtp: (data: any) => dispatch(loginService.verifyOtp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
