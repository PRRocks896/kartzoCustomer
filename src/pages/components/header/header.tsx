import React from "react";
import "./header.css";
// import ProtectedRoute from 'react-protected-route-component'
import {header,trackorder} from '../helper/images';
import { Link } from "react-router-dom";

class Header extends React.Component {

  state = {
    isShow:false
  }

  constructor(props:any) {
    super(props);

  }

  componentDidMount() {
    // const route = this.props.location.pathname;
    // console.log("props",route);
    // if(route === '/track-order'){
    //   this.setState({
    //     isShow:this.state.isShow = true
    //   })
    // } else {
    //   this.setState({
    //     isShow:this.state.isShow = false
    //   })
    // }
  }
  
  render() {
   

    if(this.state.isShow === false) {
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
                <Link className="btn-partnr c-btn" to = "/partners">
                  Kartzo for Partners
                </Link>
                <Link className="btn-business c-btn"to = "/business">
                  Kartzo for Business
                </Link>
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
    } else {
      return (
        <header className="header">
        <div className="container-fluid">
          <div className="dis-flx">
            <div className="left-content">
              <img src={header.logo} alt="logo" />
              <a href="#">
                <div className="search-box">
                  <img src={trackorder.location} alt="location" />
                  <span className="search-text"> Pretoria</span>
                </div>
              </a>
            </div>
            <div className="right-content">
            <Link className="btn-partnr c-btn" to = "/partners">
                Kartzo for Partners
              </Link>
              <Link className="btn-business c-btn"to = "/business">
                Kartzo for Business
              </Link>
              <div className="cart-icon">
                <img src={trackorder.shopping} alt="cart-icon" />
              </div>
              <a href="#" className="sign-tt">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </header>
      )
    }
  }
}

export default Header;
