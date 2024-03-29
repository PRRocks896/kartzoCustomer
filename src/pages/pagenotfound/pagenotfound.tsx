import React, { Component } from "react";
import "./pagenotfound.css";
import { Link } from "react-router-dom";
import constant from "../../pages/constant/constant";

class Page404 extends Component {

  /** Render DOM */
  render() {
    return (
      <div className="main-box-404">
        <div className="page-404">
          <h2>Oops! Page not found.</h2>
          <h1>404</h1>
          <p>We can't find the page you're looking for.</p>
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    );
  }
}

export default Page404;
