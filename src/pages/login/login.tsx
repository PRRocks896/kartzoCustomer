import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  loginimg
} from "../../pages/components/helper/images";
import constant from "../constant/constant";
import OtpInput from "react-otp-input";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loginService} from '../../redux/actions/login';
import "./login.css";

class Login extends React.Component<{login:any}> {

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

    console.log("login",this.props)
  
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
    console.log("otp",this.state.otp);
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

  async login() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        mobileerror: "",
      });
      if (this.state.mobile) {
        const obj = {
          phone:this.state.mobile
        }
        this.props.login(obj);
      }
    }
  }

  enterPressed(event: any) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.login();
    }
  }

  verifyotp(){
    this.setState({
      isDisplay:true
    })
  }

  render() {
    console.log('userDetail: ', this.props)
    const data:any = this.props;
    if(data.userDetail && data.userDetail.status === 200) {
      this.verifyotp();
    }
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
                      <button className="otp-btn" onClick={this.login}>
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
                        </div>
                        {/* <div className="main-box-otp">
                          <div className="otp-box">
                            <input
                              name="otp-input-0"
                              type="text"
                              autoComplete="off"
                              // pattern="\d*"
                              className="input-otp"
                              onChange={this.handleChangeEvent}
                            />
                          </div>
                          <div className="otp-box">
                            <input
                              name="otp-input-0"
                              type="text"
                              autoComplete="off"
                              pattern="\d*"
                              className="input-otp"
                              value=""
                            />
                          </div>
                          <div className="otp-box">
                            <input
                              name="otp-input-0"
                              type="text"
                              autoComplete="off"
                              pattern="\d*"
                              className="input-otp"
                              value=""
                            />
                          </div>
                          <div className="otp-box">
                            <input
                              name="otp-input-0"
                              type="text"
                              autoComplete="off"
                              pattern="\d*"
                              className="input-otp"
                              value=""
                            />
                          </div>
                          <div className="otp-box">
                            <input
                              name="otp-input-0"
                              type="text"
                              autoComplete="off"
                              pattern="\d*"
                              className="input-otp"
                              value=""
                            />
                          </div>
                          <div className="otp-box">
                            <input
                              name="otp-input-0"
                              type="text"
                              autoComplete="off"
                              pattern="\d*"
                              className="input-otp"
                              value=""
                            />
                          </div>
                        </div> */}
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
              <a href="#">Verify and continue</a>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = (state:any) => ({
  userDetail: state.auth.user
});
const mapDispatchToProps = (dispatch:any) => ({
  login:(data:any) => dispatch(loginService.login(data))
});

export default connect(mapStateToProps, mapDispatchToProps) (Login);
