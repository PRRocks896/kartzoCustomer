import React from "react";
import "./header.css";
// import ProtectedRoute from 'react-protected-route-component'
import {header} from '../helper/images';
import { Link } from "react-router-dom";
class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="container-fluid">
          <div className="dis-flx">
            <div className="left-content">
              <Link to='/'>
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
              <a className="btn-partnr c-btn" href="#">
                Kartzo for Partners
              </a>
              <a className="btn-business c-btn" href="#">
                Kartzo for Business
              </a>
              <div className="cart-icon">
                <img src={header.cart} alt="cart-icon" />
              </div>
              <a href="#" className="sign-tt">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
