import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { cart } from "../../pages/components/helper/images";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import "./cart.css";

class Cart extends React.Component<{ show: boolean }> {
  state = {
    activeLink: "1",
    isShowCard: false,
  };
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.title = constant.cart + getAppName();
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", true);
  }

  handleClick = (id: any) => {
    this.setState({ activeLink: id });
  };

  handleChange() {
    console.log("e");
  }

  render() {
    return (
      <>
        <header className="header">
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                <Link className="back-arrow" to="/">
                  <img src={cart.backarrow} alt="logo" />
                </Link>
                <h4 className="res-tt1">Confirm order</h4>
              </div>
              <div className="right-content">
                <Link className="sign-tt" to="/signin">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </header>
        <section className="place-order">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-flex">
                  <div className="right-box1">
                    <div className="pay-box">
                      <div className="your-card">
                        <h3>Your Cart ( 5 Items )</h3>
                        <hr />
                      </div>
                      <div className="market-name">
                        From <a href="#">Bhatia Super Market</a>
                      </div>
                      <div className="flex-box">
                        <div className="l-flex">
                          <div className="bdr-roud"></div>
                          <div className="item-title">
                            <h4>Marlboro Gold Light</h4>
                            <span className="pak">Pack of 20</span>
                          </div>
                        </div>

                        <div className="r-flex">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              type="text"
                              value="1"
                              onChange={this.handleChange}
                            />
                            <span className="plus">+</span>
                          </div>
                          <span className="price">R28</span>
                        </div>
                      </div>
                      <div className="flex-box">
                        <div className="l-flex">
                          <div className="bdr-roud"></div>
                          <div className="item-title">
                            <h4>Marlboro Gold Light</h4>
                            <span className="pak">Pack of 20</span>
                          </div>
                        </div>

                        <div className="r-flex">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              type="text"
                              value="1"
                              onChange={this.handleChange}
                            />
                            <span className="plus">+</span>
                          </div>
                          <span className="price">R28</span>
                        </div>
                      </div>
                      <div className="flex-box">
                        <div className="l-flex">
                          <div className="bdr-roud"></div>
                          <div className="item-title">
                            <h4>Marlboro Gold Light</h4>
                            <span className="pak">Pack of 20</span>
                          </div>
                        </div>

                        <div className="r-flex">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              type="text"
                              value="1"
                              onChange={this.handleChange}
                            />
                            <span className="plus">+</span>
                          </div>
                          <span className="price">R28</span>
                        </div>
                      </div>{" "}
                      <div className="flex-box">
                        <div className="l-flex">
                          <div className="bdr-roud"></div>
                          <div className="item-title">
                            <h4>Marlboro Gold Light</h4>
                            <span className="pak">Pack of 20</span>
                          </div>
                        </div>

                        <div className="r-flex">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              type="text"
                              value="1"
                              onChange={this.handleChange}
                            />
                            <span className="plus">+</span>
                          </div>
                          <span className="price">R28</span>
                        </div>
                      </div>{" "}
                      <div className="flex-box">
                        <div className="l-flex">
                          <div className="bdr-roud"></div>
                          <div className="item-title">
                            <h4>Marlboro Gold Light</h4>
                            <span className="pak">Pack of 20</span>
                          </div>
                        </div>

                        <div className="r-flex">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              type="text"
                              value="1"
                              onChange={this.handleChange}
                            />
                            <span className="plus">+</span>
                          </div>
                          <span className="price">R28</span>
                        </div>
                      </div>{" "}
                      <div className="flex-box">
                        <div className="l-flex">
                          <div className="bdr-roud"></div>
                          <div className="item-title">
                            <h4>Marlboro Gold Light</h4>
                            <span className="pak">Pack of 20</span>
                          </div>
                        </div>

                        <div className="r-flex">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              type="text"
                              value="1"
                              onChange={this.handleChange}
                            />
                            <span className="plus">+</span>
                          </div>
                          <span className="price">R28</span>
                        </div>
                      </div>{" "}
                      <div className="flex-box">
                        <div className="l-flex">
                          <div className="bdr-roud"></div>
                          <div className="item-title">
                            <h4>Marlboro Gold Light</h4>
                            <span className="pak">Pack of 20</span>
                          </div>
                        </div>

                        <div className="r-flex">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              type="text"
                              value="1"
                              onChange={this.handleChange}
                            />
                            <span className="plus">+</span>
                          </div>
                          <span className="price">R28</span>
                        </div>
                      </div>
                    </div>
                    <div className="pay-box">
                      <div className="flex-box flex-box2">
                        <img src={cart.eddnote} alt="" />
                        <textarea
                          value=" Any instructions for the delivery partner?"
                          onChange={this.handleChange}
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
        <div className="bottom-fix-box">
          <div className="left-box">
            <span>
              <i className="fas fa-shopping-cart"></i>
            </span>
            <span className="totle-item">6 Items</span>
            <span className="dot-m">•</span>
            <span className="price">R 1230</span>
          </div>
          {localStorage.getItem("mobile") ? (
            <div className="right-btn1">
              <Link to="/">Add</Link>
            </div>
          ) : (
            <div className="right-btn1">
              <Link to="/signin">Sign in</Link>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Cart;
