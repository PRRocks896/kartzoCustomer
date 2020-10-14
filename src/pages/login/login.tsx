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
import { getAppName } from "../utils";
const interceptor = require("../../intercepter");

class Login extends React.Component<{
  login: any;
  verifyOtp: any;
  history: any;
}> {
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
    disabled: this.loginState.disabled,
    disabled1: this.loginState.disabled1,
    isButton: this.loginState.isButton,
    isButtonVerify: this.loginState.isButtonVerify,
    disabledInput: this.loginState.disabledInput,
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
    document.title = constant.loginpage.title.login + getAppName();
    /** Login Page Header  */
    EventEmitter.dispatch("isShow", true);
    /** Login Page In Fotter Hide  */
    EventEmitter.dispatch("isShowFooter", true);
  }

  componentWillReceiveProps(nextProps: any, newState: any) {
    console.log("props", nextProps);
    const data: any = nextProps;

    /** otp get success response */
    if (data.userDetail) {
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
      if (data.otpverify.status === 200) {
        this.setState({
          isButtonVerify: false,
        });
        this.props.history.push("/");
      } else {
        this.setState({
          isButtonVerify: false,
          disabled1: false,
        });
      }
    } else {
      this.setState({
        isButtonVerify: false,
        disabled1: false,
      });
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
        const obj = {
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

  enterPressed(event: any) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.login();
    }
  }

  verifyotp() {
    // this.setState({
    //   isButtonVerify: true,
    //   disabled1: true,
    // });
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
    } else {
      // this.setState({
      //   isButtonVerify: false,
      //   disabled1: false,
      // });
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
              <button onClick={this.verifyotp}>
                Verify and continue
              </button>
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

const mapStateToProps = (state: any) => ({
  userDetail: state.auth.user,
  otpverify: state.auth.otpdetail,
});
const mapDispatchToProps = (dispatch: any) => ({
  login: (data: any) => dispatch(loginService.login(data)),
  verifyOtp: (data: any) => dispatch(loginService.verifyOtp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
