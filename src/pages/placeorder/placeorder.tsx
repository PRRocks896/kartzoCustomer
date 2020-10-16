import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { placeorderStateRequest } from "../../modelController";
import {
  header,
  trackorder,
  placeorder
} from "../../pages/components/helper/images";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import "./placeorder.css";

class PlaceOrder extends React.Component<{ show: boolean }> {

  /** place order state */
  placeOrderState : placeorderStateRequest = constant.placeorderPage.state;
  state = {
    checkedvalue: this.placeOrderState.checkedvalue,
    showSection: this.placeOrderState.showSection,
    checkedpaymentvalue: this.placeOrderState.checkedpaymentvalue,
    checkedpaymentvaluewallets: this.placeOrderState.checkedpaymentvaluewallets,
    checkedpaymentvaluecard: this.placeOrderState.checkedpaymentvaluecard,
    checkedpaymentvaluenetbanking: this.placeOrderState.checkedpaymentvaluenetbanking
  };

  constructor(props: any) {
    super(props);

    this.change = this.change.bind(this);
    this.showSection = this.showSection.bind(this);
    this.changePaymentUPI = this.changePaymentUPI.bind(this);
    this.changePaymentWallets = this.changePaymentWallets.bind(this);
    this.changePaymentCard = this.changePaymentCard.bind(this);
    this.changePaymentNetBanking = this.changePaymentNetBanking.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.title = constant.placeorder + getAppName();
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", true);
  }

  change(e: any) {
    this.setState({
      checkedvalue: !this.state.checkedvalue,
    });
  }

  showSection() {
    this.setState({
      showSection: true,
    });
  }

  changePaymentUPI(e: any) {
    this.setState({
      checkedpaymentvalue: !this.state.checkedpaymentvalue,
    });
  }

  changePaymentWallets(e: any) {
    this.setState({
      checkedpaymentvaluewallets: !this.state.checkedpaymentvaluewallets,
    });
  }

  changePaymentCard(e: any) {
    this.setState({
      checkedpaymentvaluecard: !this.state.checkedpaymentvaluecard
    });
  }

  changePaymentNetBanking(e: any) {
    this.setState({
      checkedpaymentvaluenetbanking: !this.state.checkedpaymentvaluenetbanking
    });
  }

  handleChange() {

  }
  

  

  

  render() {
    // console.log("TrackOrder",this.props)
    return (
      <>
        <header className="header">
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                <Link to="/">
                  <img src={header.logo} alt="logo" />
                </Link>
                {/* <!-- <a href="#">
                        <div className="search-box">
                            <img src="images/location.svg" alt="location" />
                            <span className="search-text"> Pretoria</span>
                        </div>
                    </a> --> */}
              </div>
              <div className="right-content">
                <div className="cart-icon">
                <Link to ="/cart">
                  <img src={trackorder.shopping} alt="cart-icon" />
                  </Link>
                </div>

                {
                  localStorage.getItem('token') ? (
                    <div className="cart-icon m-0">
                    <Link className="cart-icon" to="/profile">
                    <i className="fas fa-user-circle user_icon1"></i>
                    </Link>
                    </div>
                  ) : (
                    <Link className="sign-tt" to = '/signin'>
                    Sign in
                    </Link>
                  )
                }
              
              </div>
            </div>
          </div>
        </header>
        <section className="place-order">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-flex">
                  <div className="left-box">
                    <div className="pro-box1 login-box">
                      <div className="dis-box">
                        <div className="dis-left">
                          <div className="tt-1">
                            <span className="numbr">1</span>
                            <h2 className="tt-l">LOGIN</h2>
                          </div>
                          <div className="nm-info  show-1">
                            <p>
                              <span className="b-tt">Kuldeep akbari</span>{" "}
                              +919998577793
                            </p>
                          </div>
                          <div className="nm-info  hidediv-1">
                            <div className="dis-f1">
                              <div className="tt-left">
                                <p>
                                  Name{" "}
                                  <span className="b-tt">Kuldeep akbari</span>
                                </p>
                                <p>
                                  Email{" "}
                                  <span className="b-tt">
                                    jayvir009@gmail.com
                                  </span>
                                </p>
                                <a href="#" className="logout-tt">
                                  Logout & Siggn in to another account
                                </a>
                                <a href="#" className="chk-outbtn">
                                  CONTINUE CHECKOUT
                                </a>
                              </div>
                              <div className="tt-right">
                                <p>Advantages of our secure login</p>
                                <ul>
                                  <li>
                                    <svg
                                      className="icon-tt"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g fill="#F7B62B" fillRule="evenodd">
                                        <path d="M9.466 18.257h4.87c0 1.764 1.42 3.195 3.174 3.195a3.185 3.185 0 0 0 3.175-3.195H22.5c.276 0 .499-.23.499-.496v-5.57l-3.273-4.868h-3.261V4.645a.497.497 0 0 0-.497-.502H1.497A.498.498 0 0 0 1 4.645v13.11c0 .277.219.502.497.502h1.62a3.185 3.185 0 0 0 3.175 3.195 3.185 3.185 0 0 0 3.174-3.195zm6.978-8.381H18.7l2.214 3.057h-4.47V9.876zm2.644 8.381c0 .877-.706 1.588-1.578 1.588a1.583 1.583 0 0 1-1.578-1.588c0-.877.706-1.588 1.578-1.588.872 0 1.578.71 1.578 1.588zm-11.218 0c0 .877-.707 1.588-1.578 1.588a1.583 1.583 0 0 1-1.579-1.588c0-.877.707-1.588 1.579-1.588.871 0 1.578.71 1.578 1.588z"></path>
                                      </g>
                                    </svg>
                                    Easily Track Orders, Hassle free Returns
                                  </li>
                                  <li>
                                    <svg
                                      className="icon-tt"
                                      width="18"
                                      height="18"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g fill="#F7B62B" fillRule="evenodd">
                                        <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z"></path>
                                      </g>
                                    </svg>
                                    Get Relevant Alerts and Recommendation
                                  </li>
                                  <li>
                                    <span className="icon-tt">★</span>Wishlist,
                                    Reviews, Ratings and more.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <span className="small-tt">
                              Please note that upon clicking "Logout" you will
                              lose all items in cart and will be redirected to
                              Flipkart home page.
                            </span>
                          </div>
                        </div>
                        <div className="dis-right">
                          <button className="change1">CHANGE</button>
                        </div>
                      </div>
                    </div>

                    <div className="pro-box1 delvy-adres">
                      <div className="dis-box">
                        <div className="dis-left">
                          <div className="tt-1">
                            <span className="numbr">2</span>
                            <h2 className="tt-l">Delivery Address</h2>
                          </div>
                          {/* <!-- <div className="nm-info  show-1">
                                        <p><span className="b-tt">Kuldeep akbari</span> shreerangnagar block no 59 , nanamava road, opp om residansy rajkot, Rajkot, Gujarat</p>
                                    </div> --> */}
                          <div className="nm-info">
                            <div className="main0adress">
                              <div className="adrss-1">
                                <div className="edit-adres">EDIT</div>
                                <label className="rdio-box1">
                                  <span className="b-tt">Rayjada Jayvir</span>{" "}
                                  <span className="add-type">HOME</span>{" "}
                                  <span className="b-tt">9726883005</span>
                                  <span className="adress-rdio">
                                    shreerangnagar block no 59 , nanamava road,
                                    opp om residansy rajkot, Rajkot, Gujarat
                                    <span className="b-tt"> - 360005</span>
                                  </span>
                                  <input
                                    type="radio"
                                    id="1"
                                    className="form-control"
                                    checked={
                                      this.state.checkedvalue === true
                                        ? true
                                        : false
                                    }
                                    onChange={this.change}
                                    name="address"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <a href="#" className="chk-outbtn">
                                  CONTINUE CHECKOUT
                                </a>
                              </div>

                              <div className="adrss-1">
                                <label className="rdio-box1">
                                  <span className="b-tt">Rayjada Jayvir</span>{" "}
                                  <span className="add-type">HOME</span>{" "}
                                  <span className="b-tt">9726883005</span>
                                  <span className="adress-rdio">
                                    shreerangnagar block no 59 , nanamava road,
                                    opp om residansy rajkot, Rajkot, Gujarat
                                    <span className="b-tt"> - 360005</span>
                                  </span>
                                  <input
                                    type="radio"
                                    id="2"
                                    checked={false}
                                   onChange={this.handleChange}
                                    name="address"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>

                              <div className="adrss-1">
                                <label className="rdio-box1">
                                  <span className="b-tt">Rayjada Jayvir</span>{" "}
                                  <span className="add-type">HOME</span>{" "}
                                  <span className="b-tt">9726883005</span>
                                  <span className="adress-rdio">
                                    shreerangnagar block no 59 , nanamava road,
                                    opp om residansy rajkot, Rajkot, Gujarat
                                    <span className="b-tt"> - 360005</span>
                                  </span>
                                  <input
                                    type="radio"
                                    className="form-control"
                                    checked={false}
                                    onChange={this.change}
                                    name="radio3"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>

                              <div className="adrss-1">
                                <label className="rdio-box1">
                                  <span className="b-tt">Rayjada Jayvir</span>{" "}
                                  <span className="add-type">HOME</span>{" "}
                                  <span className="b-tt">9726883005</span>
                                  <span className="adress-rdio">
                                    shreerangnagar block no 59 , nanamava road,
                                    opp om residansy rajkot, Rajkot, Gujarat
                                    <span className="b-tt"> - 360005</span>
                                  </span>
                                  <input
                                    type="radio"
                                    checked={false}
                                    onChange={this.change}
                                    name="radio4"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                            <div
                              className="add-new-adres"
                              onClick={this.showSection}
                            >
                              <span className="add-icon">+</span>
                              <div>Add a new address</div>
                            </div>
                            {this.state.showSection === true ? (
                              <div className="edit-dtle">
                                <form className="form-1">
                                  <label className="rdio-box1">
                                    <span className="b-tt">
                                      ADD A NEW ADDRESS
                                    </span>
                                    <input
                                      type="radio"
                                      checked={true}
                                      onChange={this.change}
                                      name="radio"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                  <button className="add-location">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      className="-fgCFc"
                                    >
                                      <g fill="none" fillRule="evenodd">
                                        <path d="M0 0h16v16H0z"></path>
                                        <path
                                          className=""
                                          fill="#fff"
                                          d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"
                                        ></path>
                                      </g>
                                    </svg>
                                    Use my current location
                                  </button>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          id="from"
                                          className="form-control"
                                          required
                                        />
                                        <label
                                          className="form-control-placeholder"
                                          htmlFor="from"
                                        >
                                          Name
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          id="from"
                                          className="form-control"
                                          required
                                        />
                                        <label
                                          className="form-control-placeholder"
                                          htmlFor="from"
                                        >
                                          10-digit mobile number
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          id="from"
                                          className="form-control"
                                          required
                                        />
                                        <label
                                          className="form-control-placeholder"
                                          htmlFor="from"
                                        >
                                          Pincode
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          id="from"
                                          className="form-control"
                                          required
                                        />
                                        <label
                                          className="form-control-placeholder"
                                          htmlFor="from"
                                        >
                                          Locality
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <textarea
                                          id="from"
                                          className="form-control"
                                        ></textarea>
                                        <label
                                          className="form-control-placeholder"
                                          htmlFor="from"
                                        >
                                          Address (Area and Street)
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          id="from"
                                          className="form-control"
                                          required
                                        />
                                        <label
                                          className="form-control-placeholder"
                                          htmlFor="from"
                                        >
                                          City/District/Town
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label className="select-text">
                                        Travelers
                                      </label>
                                      <select className="form-control">
                                        <option value="" data-display-text="0">
                                          State
                                        </option>
                                        <option value="1">Gujarat</option>
                                        <option value="2">Goa</option>
                                        <option value="3">Dilhi</option>
                                        <option value="3">Bihar</option>
                                        <option value="3">Assam</option>
                                        <option value="3">Haryana</option>
                                      </select>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="address-type">
                                        <span className="text-add">
                                          Address Type
                                        </span>
                                        <div className="radio-dis">
                                          <div className="adrss-1">
                                            <label className="rdio-box1">
                                              <span className="b-tt">
                                                Home (All day delivery)
                                              </span>
                                              <input
                                                type="radio"
                                                checked={true}
                                                onChange={this.change}
                                                name="radio"
                                              />
                                              <span className="checkmark"></span>
                                            </label>
                                          </div>
                                          <div className="adrss-1">
                                            <label className="rdio-box1">
                                              <span className="b-tt">
                                                Work (Delivery between 10 AM - 5
                                                PM)
                                              </span>
                                              <input
                                                type="radio"
                                                checked={true}
                                                onChange={this.change}
                                                name="radio"
                                              />
                                              <span className="checkmark"></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <button className="save-delivry">
                                        Save and Deliver Here
                                      </button>
                                      <button className="btb-text">
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="dis-right">
                          <button className="change1">CHANGE</button>
                        </div>
                      </div>
                    </div>

                    {this.state.checkedvalue === true ? (
                      <div className="pro-box1 paymt-opton">
                        <div className="dis-box">
                          <div className="dis-left">
                            <div className="tt-1">
                              <span className="numbr">3</span>
                              <h2 className="tt-l">Payment Options</h2>
                            </div>
                            <div className="nm-info  hidediv-1">
                              <div className="adrss-1">
                                <label className="rdio-box1">
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.checkedpaymentvalue === true
                                        ? true
                                        : false
                                    }
                                    onChange={this.changePaymentUPI}
                                    name="payment"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <div className="upi-payment">
                                  <div className="tt-line">
                                    <img src={placeorder.upiLogo} alt="" />
                                    <span className="tt-radio">
                                      UPI (PhonePe / Paytm / Google Pay)
                                    </span>
                                  </div>
                                  {this.state.checkedpaymentvalue === true ? (
                                    <div className="pey-upi">
                                      <span className="b-tt">
                                        Choose an option
                                      </span>
                                      <div className="opti1">
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            PhonePe
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <button className="continue-btn">
                                          CONTINUE
                                        </button>
                                      </div>

                                      <div className="opti1 opti2">
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            Your UPI ID
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <div className="box-input1">
                                          <div className="form-group">
                                            <span className="verfy-tt">
                                              VERIFY
                                            </span>
                                            <input
                                              type="text"
                                              id="from"
                                              className="form-control"
                                              required
                                            />
                                            <label
                                              className="form-control-placeholder"
                                              htmlFor="from"
                                            >
                                              Enter UPI ID
                                            </label>
                                          </div>
                                          <button className="continue-btn">
                                            PAY R400
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>

                              {/* <!-- wallet --> */}
                              <div className="adrss-1">
                                <label className="rdio-box1">
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.checkedpaymentvaluewallets === true
                                        ? true
                                        : false
                                    }
                                    onChange={this.changePaymentWallets}
                                    name="payment"
                                  />
                                  <span className="checkmark"></span>
                                </label>

                                <div className="upi-payment">
                                  <div className="tt-line">
                                    <img src={placeorder.paytm} alt="" />
                                    <span className="tt-radio">Wallets</span>
                                  </div>
                                  {this.state.checkedpaymentvaluewallets === true ? (
                                    <div className="pey-upi">
                                      <div className="opti1 opti2">
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            Paytm
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <div className="box-input1">
                                          <div className="form-group">
                                            <span className="verfy-tt">
                                              Link Now
                                            </span>
                                            <input
                                              type="text"
                                              id="from"
                                              className="form-control"
                                              required
                                            />
                                            <label
                                              className="form-control-placeholder"
                                              htmlFor="from"
                                            >
                                              Enter Paytm linked no.
                                            </label>
                                          </div>
                                          <button className="continue-btn">
                                            PAY R400
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>

                              {/* <!-- Credit / Debit / ATM Card --> */}
                              <div className="adrss-1 pay-credit">
                                <label className="rdio-box1">
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.checkedpaymentvaluecard === true
                                        ? true
                                        : false
                                    }
                                    onChange={this.changePaymentCard}
                                    name="payment"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <div className="upi-payment">
                                  <div className="tt-line">
                                    <img src={placeorder.paytm} alt="" />
                                    <span className="tt-radio">
                                      Credit / Debit / ATM Card
                                    </span>
                                  </div>
                                  {this.state.checkedpaymentvaluecard === true ? (
                                    <div className="pey-upi">
                                      <div className="opti1 opti2">
                                        <div className="box-input1">
                                          <div className="form-group card-nombr">
                                            <span className="verfy-tt">
                                              Link Now
                                            </span>
                                            <input
                                              type="text"
                                              id="from"
                                              className="form-control"
                                              required
                                            />
                                            <label
                                              className="form-control-placeholder"
                                              htmlFor="from"
                                            >
                                              Enter Card Number
                                            </label>
                                          </div>
                                          <div className="flex-input">
                                            <div className="valid-date">
                                              <span className="vilid-tt">
                                                Valid thru
                                              </span>
                                              <select
                                                className="monthnm"
                                                name="month"
                                                required
                                                tabIndex={4}
                                              >
                                                <option disabled value="MM">
                                                  MM
                                                </option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                              </select>
                                              <select
                                                className="yearnm"
                                                name="year"
                                                required
                                                tabIndex={5}
                                              >
                                                <option disabled value="YY">
                                                  YY
                                                </option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                                <option value="32">32</option>
                                                <option value="33">33</option>
                                                <option value="34">34</option>
                                                <option value="35">35</option>
                                                <option value="36">36</option>
                                                <option value="37">37</option>
                                                <option value="38">38</option>
                                                <option value="39">39</option>
                                                <option value="40">40</option>
                                                <option value="41">41</option>
                                                <option value="42">42</option>
                                                <option value="43">43</option>
                                                <option value="44">44</option>
                                                <option value="45">45</option>
                                                <option value="46">46</option>
                                                <option value="47">47</option>
                                                <option value="48">48</option>
                                                <option value="49">49</option>
                                                <option value="50">50</option>
                                                <option value="51">51</option>
                                                <option value="52">52</option>
                                                <option value="53">53</option>
                                                <option value="54">54</option>
                                                <option value="55">55</option>
                                                <option value="56">56</option>
                                                <option value="57">57</option>
                                                <option value="58">58</option>
                                                <option value="59">59</option>
                                              </select>
                                            </div>
                                            <div className="form-group enter-cvv">
                                              <div className="verfy-tt">
                                                ?
                                                <div className="togle-box">
                                                  <img
                                                    src="images/cvv-card.png"
                                                    alt="cvv-card"
                                                  />
                                                  <h4 className="cvv-title">
                                                    What is CVV?
                                                  </h4>
                                                  <span className="small-tt">
                                                    The CVV number is the last
                                                    three digits on the back of
                                                    your card
                                                  </span>
                                                  <button className="close-btn">
                                                    Close
                                                  </button>
                                                </div>
                                              </div>
                                              <input
                                                type="text"
                                                id="from"
                                                className="form-control"
                                                required
                                              />
                                              <label
                                                className="form-control-placeholder"
                                                htmlFor="from"
                                              >
                                                CVV
                                              </label>
                                            </div>
                                          </div>
                                          <button className="continue-btn">
                                            PAY R400
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                              {/* <!-- Net Banking --> */}
                              <div className="adrss-1 net-banking">
                                <label className="rdio-box1">
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.checkedpaymentvaluenetbanking === true
                                        ? true
                                        : false
                                    }
                                    onChange={this.changePaymentNetBanking}
                                    name="payment"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <div className="upi-payment">
                                  <div className="tt-line">
                                    <span className="tt-radio">
                                      Net Banking
                                    </span>
                                  </div>
                                  {this.state.checkedpaymentvaluenetbanking === true ? (
                                    <div className="pey-upi">
                                      <span className="b-tt">
                                        Popular Banks
                                      </span>
                                      <div className="opti1 opti2">
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            <img
                                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRUQyMzJBIiBkPSJNMCAwaDI2djI2SDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNC42IDQuNmgxNi44djE2LjhINC42Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExLjcgMGgyLjZ2MjZoLTIuNiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDExLjdoMjZ2Mi42SDAiLz48cGF0aCBmaWxsPSIjMDA0QzhGIiBkPSJNOSA5aDh2OEg5Ii8+PC9nPjwvc3ZnPg=="
                                              className="_2PKwvL"
                                            />
                                            HDFC Bank
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            <img
                                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctNmg0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRjk5RDI3IiBkPSJNNy41IDZjNi4zLTYuMiAxNC04IDE3LTMuNiAzIDQuMy40IDEzLTYgMTkuMi02LjIgNi4zLTE0IDgtMTcgMy42LTMtNC4zLS4zLTEzIDYtMTkuMiIvPjxwYXRoIGZpbGw9IiNCMDJBMzAiIGQ9Ik0xMS43IDIuN2MtLjcuNS0xLjQgMS0yIDEuOC01LjYgNS41LTggMTMtNS4yIDE2LjcgMi44IDMuOCA5LjYgMi40IDE1LjMtMyAzLTMgNS02LjUgNi05LjcgMC0yLjQtLjItNC41LTEuMy02QzIyLTEgMTctLjUgMTEuNyAyLjUiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTkuMyAyLjVjLjcuNy4zIDIuNC0xIDMuNi0xLjMgMS43LTMgMi0zLjYgMS0uOC0uMy0uMy0yIDEtMy4yIDEuMi0xLjMgMy0xLjcgMy42LTF6bS00LjUgMjIuMmMtMyAyLjItNiAzLjMtOSAzIDEuMyAwIDIuMy0xLjQgMy0zLjMgMS0yIDEuNS0zLjcgMi01LjQuNS0yLjYuNS00LjUuMi01LS41LS42LTEuNy0uNC0zIC40LS42LjMtMS40IDAtLjQtMSAxLTEuMyA1LTQuMiA2LjMtNC42IDEuMi0uNSAzIDAgMi4zIDEuOC0uNCAxLjMtNS44IDE1LjYtMS44IDE0eiIvPjwvZz48L3N2Zz4="
                                              className="_2PKwvL"
                                            />
                                            ICICI Bank
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            <img
                                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjMTZEIiBkPSJNMTIuNiAyN0M1LjQgMjYuNS0uMiAyMC40IDAgMTMgLjIgNiA2LjIgMCAxMy41IDBTMjYuOCA1LjggMjcgMTNjLjIgNy40LTUuNCAxMy41LTEyLjYgMTRWMTZjMS0uNSAxLjctMS42IDEuNS0yLjgtLjQtMS4yLTEuNC0yLTIuNi0ycy0yLjIuOC0yLjQgMmMwIDEuMi41IDIuMyAxLjYgMi43Ii8+PC9nPjwvc3ZnPg=="
                                              className="_2PKwvL"
                                            />
                                            State Bank of India
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            <img
                                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtOGg0MHY0MEgtNnoiLz48cGF0aCBmaWxsPSIjQkM0MTcwIiBkPSJNMjggMjRoLTguN0wxNCAxNWg4LjdtLTQuNC03LjZMOC43IDI0SDBMMTQgMCIvPjwvZz48L3N2Zz4="
                                              className="_2PKwvL"
                                            />
                                            Axis Bank
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                        <label className="rdio-box1">
                                          <span className="tt-radio">
                                            <img
                                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMjggMEgwdjIzLjhoMjhWMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtOGg0MHY0MEgtNnoiLz48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjMDAzODc0IiBkPSJNMCAxMkMwIDUuMiA2LjMgMCAxNCAwczE0IDUuMyAxNCAxMmMwIDYuNS02LjMgMTEuOC0xNCAxMS44cy0xNC01LjMtMTQtMTIiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRUQxQzI0IiBkPSJNMTIuMyAzLjhsMy4yLTFWMjBsLTMuMiAxLjIiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQuMiAxNC43QzEyLjggMTYuMyAxMS40IDE4IDkgMThjLTMuNyAwLTUuNC0zLjQtNS40LTYuMyAwLTIuOCAxLjMtNiA0LjgtNiAxLjUgMCAzIDEgNCAyVjEwYy0xLS43LTIuNS0xLTMuNi0xLTIuMiAwLTQuMi43LTQgMyAwIDEuNCAxLjQgMi40IDMgMi40IDIuMiAwIDMuNi0yIDQuNy0zLjZMMTQgOWMxLTEuNiAyLjYtMy4yIDUtMy4yIDMgMCA0LjcgMi40IDUuMiA1SDIzYy0uNS0xLTEuNS0xLjQtMi42LTEuNC0yLjMgMC0zLjggMi01IDMuN2wtMS4yIDJ6TTI0LjUgMTNjLS4zIDIuNi0xLjcgNS00LjggNS0xLjggMC0zLjItMS00LjItMi42di0xLjdjMS4zLjYgMi40IDEuMiAzLjggMS4yIDEuNyAwIDMuMi0xIDMuOC0yaDJ6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvc3ZnPg=="
                                              className="_2PKwvL"
                                            />
                                            Kotak Bank
                                          </span>
                                          <input
                                            type="radio"
                                            checked={true}
                                            onChange={this.change}
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                      </div>

                                      <div className="select-bank">
                                        <span className="b-tt">
                                          Other Banks
                                        </span>
                                        <select className="_1CV081">
                                          <option value="SELECT_BANK">
                                            ---Select Bank---
                                          </option>
                                          <option value="AIRTELMONEY">
                                            Airtel Payments Bank
                                          </option>
                                          <option value="ALLAHABAD">
                                            Allahabad Bank
                                          </option>
                                          <option value="ANDHRA">
                                            Andhra Bank
                                          </option>
                                          <option value="AUSMALLFINBANK">
                                            AU Small Finance Bank
                                          </option>
                                          <option value="BANDHAN">
                                            Bandhan Bank
                                          </option>
                                          <option value="BASSIENCATHOLICCOOPB">
                                            Bassien Catholic Co-Operative Bank
                                          </option>
                                          <option value="BNPPARIBAS">
                                            BNP Paribas
                                          </option>
                                          <option value="BOBAHRAIN">
                                            Bank of Bahrain and Kuwait
                                          </option>
                                          <option value="BOBARODA">
                                            Bank of Baroda
                                          </option>
                                          <option value="BOBARODAC">
                                            Bank of Baroda Corporate
                                          </option>
                                          <option value="BOBARODAR">
                                            Bank of Baroda Retail
                                          </option>
                                          <option value="BOI">
                                            Bank of India
                                          </option>
                                          <option value="BOM">
                                            Bank of Maharashtra
                                          </option>
                                          <option value="CANARA">
                                            Canara Bank
                                          </option>
                                          <option value="CATHOLICSYRIAN">
                                            Catholic Syrian Bank
                                          </option>
                                          <option value="CBI">
                                            Central Bank
                                          </option>
                                          <option value="CITYUNION">
                                            City Union Bank
                                          </option>
                                          <option value="CORPORATION">
                                            Corporation Bank
                                          </option>
                                          <option value="COSMOS">
                                            Cosmos Co-op Bank
                                          </option>
                                          <option value="DBS">
                                            digibank by DBS
                                          </option>
                                          <option value="DCB">
                                            DCB BANK LTD
                                          </option>
                                          <option value="DENA">
                                            Dena Bank
                                          </option>
                                          <option value="DEUTSCHE">
                                            Deutsche Bank
                                          </option>
                                          <option value="DHANBANK">
                                            Dhanalakshmi Bank
                                          </option>
                                          <option value="FEDERALBANK">
                                            Federal Bank
                                          </option>
                                          <option value="IDBI">
                                            IDBI Bank
                                          </option>
                                          <option value="IDFC">
                                            IDFC FIRST Bank
                                          </option>
                                          <option value="INDIANBANK">
                                            Indian Bank
                                          </option>
                                          <option value="INDUSIND">
                                            IndusInd Bank
                                          </option>
                                          <option value="IOB">
                                            Indian Overseas Bank
                                          </option>
                                          <option value="JANATABANKPUNE">
                                            JANATA SAHAKARI BANK LTD PUNE
                                          </option>
                                          <option value="JKBANK">
                                            J&amp;K Bank
                                          </option>
                                          <option value="KARNATAKA">
                                            Karnataka Bank
                                          </option>
                                          <option value="KARURVYSYA">
                                            Karur Vysya Bank
                                          </option>
                                          <option value="LAKSHMIVILAS">
                                            Lakshmi Vilas Bank - Retail
                                          </option>
                                          <option value="LAKSHMIVILASC">
                                            Lakshmi Vilas Bank - Corporate
                                          </option>
                                          <option value="OBC">
                                            Oriental Bank of Commerce
                                          </option>
                                          <option value="PNB">
                                            Punjab National Bank
                                          </option>
                                          <option value="PNBC">
                                            Punjab National Bank Corporate
                                          </option>
                                          <option value="PNSB">
                                            Punjab &amp; Sind Bank
                                          </option>
                                          <option value="PUNJABMAHA">
                                            Punjab &amp; Maharashtra Co-op Bank
                                          </option>
                                          <option value="RATNAKAR">
                                            RBL Bank – Net Banking
                                          </option>
                                          <option value="RBS">RBS</option>
                                          <option value="SARASWAT">
                                            Saraswat Co-op Bank
                                          </option>
                                          <option value="SHAMRAOVITHAL">
                                            Shamrao Vithal Co-op Bank
                                          </option>
                                          <option value="SHIVAMERCOOP">
                                            Shivalik Mercantile Co-op Bank
                                          </option>
                                          <option value="SOUTHINDIAN">
                                            The South Indian Bank
                                          </option>
                                          <option value="STANC">
                                            Standard Chartered Bank
                                          </option>
                                          <option value="SYNDICATE">
                                            Syndicate Bank
                                          </option>
                                          <option value="TMBANK">
                                            Tamilnad Mercantile Bank Limited
                                          </option>
                                          <option value="TNMERCANTILE">
                                            Tamil Nadu Merchantile Bank
                                          </option>
                                          <option value="TNSC">
                                            TNSC Bank
                                          </option>
                                          <option value="UCO">UCO Bank</option>
                                          <option value="UNIONBANK">
                                            Union Bank of India
                                          </option>
                                          <option value="UNITEDBANK">
                                            United Bank of India
                                          </option>
                                          <option value="VIJAYABANK">
                                            Vijaya Bank
                                          </option>
                                          <option value="YESBANK">
                                            Yes Bank
                                          </option>
                                          <option value="ZOROACOPBANK">
                                            The Zoroastrian Co-Operative Bank
                                          </option>
                                        </select>
                                      </div>

                                      <button className="continue-btn">
                                        PAY R400
                                      </button>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>

                              {/* <!-- Net Banking end--> */}
                            </div>
                          </div>
                          <div className="dis-right">
                            <button className="change1">CHANGE</button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="right-box">
                    <div className="pay-box">
                      <div className="your-card">
                        <h3>Your Cart ( 5 Items )</h3>
                        <hr />
                      </div>
                      <div className="market-name">
                        From <a href="#">Bhatia Super Market</a>
                      </div>
                      <div className="flex-box">
                        <div className="bdr-roud"></div>
                        <div className="item-title">
                          <h4>Marlboro Gold Light</h4>
                          <span className="pak">Pack of 20</span>
                        </div>
                        <div className="number">
                          <span className="minus">-</span>
                          <input type="text" value="1" onChange={this.change} />
                          <span className="plus">+</span>
                        </div>
                        <span className="price">R28</span>
                      </div>
                    </div>
                    <div className="pay-box">
                      <div className="flex-box flex-box2">
                        <img src="images/edd-note.svg" alt="" />
                        <textarea
                          value="Any instructions for the delivery partner?"
                          onChange={this.change}
                        >
                          Any instructions for the delivery partner?
                        </textarea>
                      </div>
                    </div>
                    <div className="pay-box">
                      <div className="your-card">
                        <h3>Invoice</h3>
                        <hr />
                        <span className="bt-tt-signin">
                          • Delivery charges may change after signing in{" "}
                        </span>
                      </div>
                      <div className="invoice-box">
                        <div className="tilte">Item total</div>
                        <div className="price">R 1304</div>
                      </div>
                      <div className="invoice-box">
                        <div className="tilte">Item total</div>
                        <div className="price free">Free</div>
                      </div>
                      <div className="invoice-box total-pay ">
                        <div className="tilte">To pay</div>
                        <div className="price">R 140</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PlaceOrder;
