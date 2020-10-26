import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { profileStateRequest } from "../../modelController";
import { profile } from "../../pages/components/helper/images";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import "./profile.css";

class Profile extends React.Component<{ show: boolean; history: any }> {
  /** Profile Page State */
  profileState: profileStateRequest = constant.profilePage.state;
  state = {
    mobile: this.profileState.mobile,
  };

  constructor(props: any) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    document.title = constant.profile + getAppName();
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    this.setState({
      mobile: user.phone,
    });
    EventEmitter.dispatch("isShow", false);
    EventEmitter.dispatch("isShowFooter", false);
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("cartcount");
    localStorage.removeItem("adminToken");
    this.props.history.push("/");
    // window.location.href = "/";
  }

  render() {
    return (
      <>
        <section className="profile-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="dix-flex">
                  <div className="profile-name">
                    <img src={profile.profilepic} alt="" />
                    <div className="pro-tt1">
                      <div className="name">+91-{this.state.mobile}</div>
                      {/* <span className="mobl-no">{this.state.mobile}</span> */}
                      {/* <span className="mobl-no"> | </span>
                      <span className="mobl-no">jay@wd.com</span> */}
                    </div>
                  </div>
                  <div className="logout-btn">
                    <button onClick={this.logout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="flex-tabs">
                  <ul
                    className="nav nav-pills flex-column"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Orders List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Addresses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Manage Payments
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        id="kartzocash-tab"
                        data-toggle="tab"
                        href="#kartzocash"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Kartzo Cash
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="support-tab"
                        data-toggle="tab"
                        href="#support"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Support
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade "
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="order-list">
                        <div className="col-md-12">
                          <h3 className="dlt-tt">Past Order</h3>
                          <div className="order-list1">
                            <div className="dlt-1">
                              <div className="img-box">
                                <img src={profile.food} alt="" />
                              </div>
                              <div className="order-dtl1">
                                <h4 className="sub-tt">Sargam Food</h4>
                                <div className="address-nm">
                                  Race Couse Road
                                </div>
                                <div className="shop-id">
                                  ORDER # 85474154056 | Sun, Oct 11, 2020, 12:19
                                  PM
                                </div>
                                <button className="view-dtl">
                                  View Details
                                </button>
                              </div>
                            </div>

                            <div className="order-food">
                              <div className="food-nm">
                                Paneer Tikka Masala x1
                              </div>
                              <div className="btn-box">
                                <button className="order-btn">REORDER</button>
                                <button className="help-btn">HELP</button>
                              </div>
                            </div>
                          </div>
                          <div className="order-list1">
                            <div className="dlt-1">
                              <div className="img-box">
                                <img src={profile.food} alt="" />
                              </div>
                              <div className="order-dtl1">
                                <h4 className="sub-tt">Sargam Food</h4>
                                <div className="address-nm">
                                  Race Couse Road
                                </div>
                                <div className="shop-id">
                                  ORDER # 85474154056 | Sun, Oct 11, 2020, 12:19
                                  PM
                                </div>
                                <button className="view-dtl">
                                  View Details
                                </button>
                              </div>
                            </div>

                            <div className="order-food">
                              <div className="food-nm">
                                Paneer Tikka Masala x1
                              </div>
                              <div className="btn-box">
                                <button className="order-btn">REORDER</button>
                                <button className="help-btn">HELP</button>
                              </div>
                            </div>
                          </div>
                          <div className="order-list1">
                            <div className="dlt-1">
                              <div className="img-box">
                                <img src={profile.food} alt="" />
                              </div>
                              <div className="order-dtl1">
                                <h4 className="sub-tt">Sargam Food</h4>
                                <div className="address-nm">
                                  Race Couse Road
                                </div>
                                <div className="shop-id">
                                  ORDER # 85474154056 | Sun, Oct 11, 2020, 12:19
                                  PM
                                </div>
                                <button className="view-dtl">
                                  View Details
                                </button>
                              </div>
                            </div>

                            <div className="order-food">
                              <div className="food-nm">
                                Paneer Tikka Masala x1
                              </div>
                              <div className="btn-box">
                                <button className="order-btn">REORDER</button>
                                <button className="help-btn">HELP</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="add-addresses">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Manage Addresses</h3>
                          </div>
                          <div className="col-md-6">
                            <div className="addresses">
                              <img src={profile.bag} alt="" />
                              <div className="addresses-list">
                                <h4 className="sub-tt">OFFICE</h4>
                                <div className="address-nm">
                                  Cubbon Park Rd, Nunegundlapalli, Ambedkar
                                  Veedh, Cubbon Park Rd, Nunegundlapalli,
                                  Ambedkar Veedhi, Sampangi Rama Nagar,
                                  Bengaluru, Karnataka 560001, India
                                </div>

                                <div className="edit-delt-btn">
                                  <button className="edit-btn">EDIT</button>
                                  <button className="edit-btn">DELETE</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="addresses">
                              <img src={profile.home} alt="" />
                              <div className="addresses-list">
                                <h4 className="sub-tt">HOME</h4>
                                <div className="address-nm">
                                  Cubbon Park Rd, Nunegundlapalli, Ambedkar
                                  Veedh, Cubbon Park Rd, Nunegundlapalli,
                                  Ambedkar Veedhi, Sampangi Rama Nagar,
                                  Bengaluru, Karnataka 560001, India
                                </div>

                                <div className="edit-delt-btn">
                                  <button className="edit-btn">EDIT</button>
                                  <button className="edit-btn">DELETE</button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="addresses">
                              <img src={profile.other} alt="" />
                              <div className="addresses-list">
                                <h4 className="sub-tt">NEW</h4>
                                <div className="address-nm">
                                  Cubbon Park Rd, Nunegundlapalli, Ambedkar
                                  Veedh, Cubbon Park Rd, Nunegundlapalli,
                                  Ambedkar Veedhi, Sampangi Rama Nagar,
                                  Bengaluru, Karnataka 560001, India
                                </div>

                                <div className="edit-delt-btn">
                                  <button className="edit-btn">EDIT</button>
                                  <button className="edit-btn">DELETE</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="manage-payment">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Wallets</h3>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.paytm} alt="" />
                                <div className="pay-tt">Paytm</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.simple} alt="" />
                                <div className="pay-tt">Simpl</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.lazypay} alt="" />
                                <div className="pay-tt">LazyPay</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="kartzocash"
                      role="tabpanel"
                      aria-labelledby="kartzocash-tab"
                    >
                      <div className="kartzo-cash">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="flex-box-trms">
                              <h3 className="dlt-tt">Kartzo Cash</h3>
                              <button className="view-dtl">
                                Terms & Conditions
                              </button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="kartzo-cash1">
                              <div className="kartzo-cash-tt">
                                Your Kartzo Cash Balance
                              </div>
                              <div className="total-cash">R 200</div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="kartzo-cash2">
                              <img src={profile.eligible} alt="" />
                              <div className="eligible-box">
                                <div className="kartzo-eligible-tt">
                                  Sorry, You are not eligible{" "}
                                </div>
                                <div className="kartzo-eligible-small-tt">
                                  But don't worry, you will be eligible once you
                                  start using the Dunzo platform.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="how-it-work">
                              <h3 className="dlt-tt">How it works</h3>
                              <div className="box-how-work">
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.friends} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Share the referral link with your friends
                                  </span>
                                </div>
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.friends} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Your friend clicks on the link or signs up
                                    through the code
                                  </span>
                                </div>
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.wallet} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Your friend gets ₹50 Dunzo Cash on sign up.
                                    You get ₹50 when they complete an order of
                                    ₹100 or more within 7 days. You can earn
                                    upto ₹500 Dunzo Cash.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="support"
                      role="tabpanel"
                      aria-labelledby="support-tab"
                    >
                      <div className="kartzo-support">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Support</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div id="accordion">
                              <div className="card">
                                <div className="card-header" id="heading-2">
                                  <h5 className="mb-0">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="#collapse-1"
                                      aria-expanded="false"
                                      aria-controls="collapse-2"
                                    >
                                      I have a payment related query
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id="collapse-1"
                                  className="collapse"
                                  data-parent="#accordion"
                                  aria-labelledby="heading-2"
                                >
                                  <div className="card-body">
                                    Please let us know how we may help
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-header" id="heading-3">
                                  <h5 className="mb-0">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="#collapse-2"
                                      aria-expanded="false"
                                      aria-controls="collapse-3"
                                    >
                                      I have a promotion or Dunzo cash related
                                      query
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id="collapse-2"
                                  className="collapse"
                                  data-parent="#accordion"
                                  aria-labelledby="heading-3"
                                >
                                  <div className="card-body">
                                    Please let us know how we may help.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default Profile;
