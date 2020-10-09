import React from "react";
import "./footer.css";
import { footer } from "../helper/images";
import { Link } from "react-router-dom";
// import ProtectedRoute from 'react-protected-route-component'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="logo-footer">
                <img src={footer.logo} alt="3" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h3 className="tt-1">Kartzo</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                  {/* <a href="#"></a> */}
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy </a>
                </li>
                <li>
                  <a href="#">Kartzo for partner</a>
                </li>
                <li>
                  <a href="#">Kartzo for business</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="tt-1">Serviceable Cities</h3>
              <ul>
                <li>
                  <a href="#">Johannesburg</a>
                </li>
                <li>
                  <a href="#">Pretoria</a>
                </li>
                <li>
                  <a href="#">Durban</a>
                </li>
                <li>
                  <a href="#">Cape Town</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="tt-1">Get in touch</h3>
              <ul>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
