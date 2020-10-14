import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import "./profile.css";

class Profile extends React.Component<{ show: boolean,history:any }> {
  constructor(props: any) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    document.title = constant.profile + getAppName();
    // EventEmitter.dispatch("isShow", true);
    // EventEmitter.dispatch("isShowFooter", true);
  }

  logout() {
    localStorage.removeItem("mobile");
    this.props.history.push('/');
    // window.location.href = "/";
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-11">
            <h5>Update-Profile</h5>
            <h1>{localStorage.getItem("mobile")}</h1>
          </div>
          <div className="col-md-1 mt-4">
            <div className="btn-box">
              <button
                className="otp-btn"
                onClick={this.logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;