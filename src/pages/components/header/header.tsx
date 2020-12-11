import React from "react";
import "./header.css";
// import ProtectedRoute from 'react-protected-route-component'
import { header, trackorder } from "../helper/images";
import { Link } from "react-router-dom";
import EventEmitter from "../../../event";
import constant from "../../constant/constant";
import { layoutStateRequest } from "../../../modelController";

class Header extends React.Component {

  /** Header state */
  headerState : layoutStateRequest = constant.headerPage.state;
  state = {
    isShow: this.headerState.isShow,
    count: this.headerState.count
  };

  /** constructor call */
  constructor(props: any) {
    super(props);
    EventEmitter.subscribe("isShow", (data: any) => {
      this.setState({
        isShow: this.state.isShow = data,
      });
    });
    

    EventEmitter.subscribe("count", (data: any) => {
      this.setState({
        count: this.state.count = data,
      });
    });
  }

  /** Page Render Call */
  componentDidMount() {
    if(localStorage.getItem('cartcount') !== undefined) {
      this.setState({
        count: this.state.count = localStorage.getItem('cartcount')
      })
    } else {
      this.setState({
        count: this.state.count = 0
      })
    }
  }

  /** Render DOM */
  render() {
    if (this.state.isShow === false) {
      return (
        <header className="header">
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                <Link to="/">
                  <img src={header.logo} alt="logo" />
                </Link>
                {/* <a href="#">
                          <div className="search-box">
                              <img src="images/location.svg" alt="location" /> 
                              <span className="search-text"> Pretoria</span>
                          </div>
                      </a> --> */}
              </div>
              <div className="right-content">
                <Link className="btn-partnr c-btn" to="/partners">
                  Kartzo for Partners
                </Link>
                <Link className="btn-business c-btn" to="/business">
                  Kartzo for Business
                </Link>
                <Link className="cart-icon" to="/cart">
                  <div className="cart-icon m-0">
                  <div className="quty-icon">
                      {this.state.count
                        ? this.state.count
                        : 0}
                    </div>
                    <img src={header.cart} alt="cart-icon" />
                    {/* <i className="fas fa-shopping-cart user_icon"></i> */}
                  </div>
                </Link>

                {localStorage.getItem("token") ? (
                  <div className="cart-icon m-0">
                    <Link className="cart-icon" to="/profile">
                      <i className="fas fa-user-circle user_icon1"></i>
                    </Link>
                  </div>
                ) : (
                  <Link className="sign-tt" to="/signin">
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>
      );
    } else if (this.state.isShow === true) {
      return (
        <></>
      );
    }
  }
}

export default Header;
