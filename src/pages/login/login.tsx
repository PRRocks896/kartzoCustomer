import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { loginimg } from "../../pages/components/helper/images";
import constant from "../constant/constant";
import OtpInput from "react-otp-input";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
import { loginService } from "../../redux/index";
import "./login.css";
import { getAppName } from "../utils";
import { getAdminTokenRequest, loginCreateRequest, loginStateRequest, verifyOtpRequest } from "../../modelController";
const interceptor = require("../../intercepter");

class Login extends React.Component<{
  login: any;
  verifyOtp: any;
  history: any;
  getAdminToken: any;
}> {
  /** loginstate = state define in login page */
  loginState : loginStateRequest = constant.loginpage.state;
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
    disabled: this.loginState.disabled,
    disabled1: this.loginState.disabled1,
    isButton: this.loginState.isButton,
    isButtonVerify: this.loginState.isButtonVerify,
    disabledInput: this.loginState.disabledInput,
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.verifyotp = this.verifyotp.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.loginpage.title.login + getAppName();
    /** Login Page Header  */
    EventEmitter.dispatch("isShow", true);
    /** Login Page In Fotter Hide  */
    EventEmitter.dispatch("isShowFooter", true);
  }

  /**
   * 
   * @param nextProps : get updated props value
   */
  componentWillReceiveProps(nextProps: any) {
    // console.log("props", nextProps);
    const data: any = nextProps;

    /** otp get success response */
    if (data.userDetail) {
      this.otpSentRequestSuccess(data);
    } else {
      this.setState({
        disabledInput: false,
        isButton: false,
        disabled: false,
        isDisplay: false,
      });
    }

    /** otp verify success response */
    if (data.otpverify) {
      this.verifySucess(data);
    } else {
      this.setState({
        isButtonVerify: false,
        disabled1: false,
      });
    }
  }

  /**
   * 
   * @param data : otp request success response
   */
  otpSentRequestSuccess(data: any) {
    if (data.userDetail.status === 200) {
      this.setState({
        disabledInput: true,
        isButton: false,
        isDisplay: true,
      });
    } else {
      this.setState({
        disabledInput: false,
        disabled: false,
        isButton: false,
        isDisplay: false,
      });
    }
  }

  /**
   * 
   * @param data : otp verify success response 
   */
  async verifySucess(data: any) {
    if (data.otpverify.status === 200) {
      this.setState({
        isButtonVerify: false,
      });
      if (localStorage.getItem("token")) {
        const users: any = localStorage.getItem("user");
        let user = JSON.parse(users);
        const obj : getAdminTokenRequest = {
          deviceType: 1,
          deviceId: "deviceId",
          ipAddress: "156.32.3.32",
          loginToken: user.token,
          refreshToken: user.refreshToken,
        };
        this.props.getAdminToken(obj);
      }
      this.props.history.goBack();
    } else {
      this.setState({
        isButtonVerify: false,
        disabled1: false,
      });
    }
  }

  /**
   * 
   * @param event : onChange update state value
   */
  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /**
   * 
   * @param otp : get otp
   */
  handleChange(otp: any) {
    this.setState({
      otp: otp,
    });
  }

  /** Check (valid || invalid) mobile number */
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

    /** Check (valid || invalid) otp */
  validateOtp() {
    let otperror = "";

    const otpRegex: any = /^[0-9]{6}$/;
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

  /** Login API call */
  async login() {
    this.setState({
      isButton: true,
      disabled: true,
    });
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        mobileerror: "",
      });
      if (this.state.mobile) {
        const obj : loginCreateRequest = {
          phone: this.state.mobile,
        };
        this.props.login(obj);
      }
    } else {
      this.setState({
        isButton: false,
        disabled: false,
      });
    }
  }

  /** Enter key press */
  enterPressed(event: any) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.login();
    }
  }

  /** Verify OTP */
  verifyotp() {
    const isValid = this.validateOtp();
    if (isValid) {
      this.setState({
        otperror: "",
      });
      if (this.state.otp && this.state.mobile) {
        const obj : verifyOtpRequest = {
          otp: this.state.otp,
          mobile: this.state.mobile,
        };
        this.props.verifyOtp(obj);
      }
    } else {
     
    }
  }

  /** Render DOM */
  render() {
    return (
      <>
        <header className="header">
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                <a className="back-arrow" onClick={() => this.props.history.goBack()}>
                  <img src={loginimg.backarrow} alt="logo" />
                </a>
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
                        disabled={this.state.disabledInput}
                      />
                    </div>
                    {this.state.isButton === false ? (
                      <div className="btn-box">
                        <button
                          className="otp-btn"
                          onClick={this.login}
                          disabled={this.state.disabled}
                        >
                          Send OTP
                        </button>
                      </div>
                    ) : (
                      <div className="spinerButton">
                        <div className="btn-box">
                          <button
                            className="otp-btn"
                            disabled={this.state.disabled}
                          >
                            Send OTP
                          </button>
                        </div>
                        <div className="spinners"></div>
                      </div>
                    )}

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
                          Enter Your OTP
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
                        </div>
                      </div>
                      <div className="mb-4 text-danger">
                        {this.state.otperror}
                      </div>
                    </div>
                    <p className="resend-tt" onClick={this.login}>
                      Resend
                    </p>
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

        {/* {this.state.isDisplay === true ? (
          this.state.isButtonVerify === false ? (
            <div className="bottom-fix-box">
              <div className="right-btn">
                <button
                  onClick={this.verifyotp}
                  disabled={this.state.disabled1}
                >
                  Verify and continue
                </button>
              </div>
            </div>
          ) : (
            <div className="bottom-fix-box">
              <div className="spinerButton1">
                <div className="right-btn">
                  <button>Verify and continue</button>
                </div>
                <div className="spinners1"></div>
              </div>
            </div>
          )
        ) : (
          ""
        )} */}
      </>
    );
  }
}

/**
 * 
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  userDetail: state.auth.user,
  otpverify: state.auth.otpdetail,
});

/**
 * 
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({

  /** Login Functionality */
  login: (data: any) => dispatch(loginService.login(data)),

  /** Verify OTP */
  verifyOtp: (data: any) => dispatch(loginService.verifyOtp(data)),

  /** Get Admin Token */
  getAdminToken: (data: any) => dispatch(loginService.getAdminToken(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
