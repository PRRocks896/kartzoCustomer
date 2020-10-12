import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  findstore,
  header,
  login,
  trackorder,
} from "../../pages/components/helper/images";
import "./login.css";

class Login extends React.Component<{ show: boolean }> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    EventEmitter.dispatch("isShow", true);
  }

  render() {
    // console.log("TrackOrder",this.props)
    return (
      <>
        <header className="header">
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                  <Link className="back-arrow" to = "/">
                  <img src={login.backarrow} alt="logo" />
                  </Link>
                <h4 className="res-tt1">Enter your mobile number</h4>
              </div>
              <div className="right-content">
                <a href="#" className="sign-tt">
                  Sign in
                </a>
              </div>
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
                        name="phone"
                        type="tel"
                        value=""
                      />
                    </div>
                    <div className="btn-box">
                      <button className="otp-btn" disabled>
                        Send OTP
                      </button>
                    </div>
                    <p className="text-1">
                      Your 10 digit mobile number
                      <span className="clr-1">*</span>
                    </p>
                  </div>
                  <div className="bdr-bottom"></div>
                </div>

                <div className="box2">
                  <div className="hide-div">
                    <p className="text-2">
                      Your 10 digit mobile number
                      <span className="clr-1">*</span>
                    </p>
                    <div className="main-box-otp">
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
                    </div>
                  </div>
                </div>
                <p className="resend-tt">Resend</p>
              </div>
            </div>
          </div>
        </section>
        <div className="bottom-fix-box">
          <div className="right-btn">
            <a href="#">Verify and continue</a>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
