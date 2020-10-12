import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  header,
  findstore,
  trackorder,
  storeitem,
} from "../../pages/components/helper/images";
import "./store-item.css";

class StoreItem extends React.Component<{ show: boolean }> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", true);
  }

  render() {
    // console.log("TrackOrder",this.props)
    return (
      <>
        <div className="sticky-menu" id="fix-top">
          <header className="header">
            <div className="container-fluid">
              <div className="dis-flx">
                <div className="left-content">
                    <Link to = '/'>
                  <img src={header.logo} alt="logo" />
                    </Link>
                  <a href="#">
                    <div className="search-box">
                      <img src={trackorder.location} alt="location" />
                      <span className="search-text"> Pretoria</span>
                    </div>
                  </a>
                </div>
                <div className="right-content">
                  
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
          <section className="page-name">
            <div className="container-fluid">
              <div className="menu-item">
                <a href="#"> Home </a> / <a href="#"> Pretoria </a> /{" "}
                <span>Groceries & Essentials</span>
              </div>
            </div>
          </section>
          <section className="store-name">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="store">
                    <img src={findstore.store} alt="store-img" />
                    <div className="name">
                      <div className="small-text">Mango Drink</div>
                      <h3>Atul Dairy</h3>
                      <p>Veera Desai Area, Andheri West</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="main-item">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-flex">
                  <div className="item-menu">
                    <ul>
                      <li className="icon-add">
                        <a className="page-link" href="#paan">
                          Paan
                        </a>
                      </li>
                      <li>
                        <a className="page-link" href="#breakfast">
                          Breakfast & Dairy
                        </a>
                      </li>
                      <li>
                        <a href="#">Provisions</a>
                      </li>
                      <li>
                        <a href="#">Condiments</a>
                      </li>
                      <li>
                        <a href="#">Instant foods & rea...</a>
                      </li>
                      <li>
                        <a href="#">Snacks & frozen food</a>
                      </li>
                      <li>
                        <a href="#">Chocolates & ice-cr...</a>
                      </li>
                      <li>
                        <a href="#">Personal care</a>
                      </li>
                      <li>
                        <a href="#">Cleaning & household</a>
                      </li>
                      <li>
                        <a href="#">Fresh fruits</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item-dtl">
                    <div className="serch-box">
                      <input
                        type="search"
                        name="search"
                        placeholder="Search for an item"
                      />
                    </div>

                    <div className="all-item">
                      <div className="item-details-1" id="paan">
                        <div className="item-nm-tt">Paan</div>
                        <h3 className="tt-1">
                          Bread & Buns <span className="clr-1">(1 item)</span>
                        </h3>
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>

                        {/* <!-- box-2 add  --> */}
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>
                        {/* <!-- box-2 add end --> */}

                        {/* <!-- box-3 add  --> */}
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>
                        {/* <!-- box-3 add end --> */}

                        {/* <!-- box-4 add  --> */}
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>
                        {/* <!-- box-4 add end --> */}
                      </div>

                      {/* <!-- item-menu 2 --> */}
                      <div className="item-details-1" id="breakfast">
                        <div className="item-nm-tt">breakfast & dairy</div>
                        <h3 className="tt-1">
                          Bread & Buns <span className="clr-1">(1 item)</span>
                        </h3>
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>

                        {/* <!-- box-2 add  --> */}
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>
                        {/* <!-- box-2 add end --> */}

                        {/* <!-- box-3 add  --> */}
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>
                        {/* <!-- box-3 add end -->

                                 <!-- box-4 add  --> */}
                        <div className="box-1">
                          <div className="product-img">
                            <img src={storeitem.product} alt="" />
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">
                              Britannia Whole Wheat Brown Bread
                            </h4>
                            <span className="price">R 300</span>
                            <p>
                              Whole wheat bread made from the choicest
                              ingredients soft and fresh loaded with the
                              goodness of whole wheat readily enjoyed as a part
                              of a healthy ...
                            </p>
                            <div className="dis-q">
                              <span className="quntity">Quantity</span>
                              <a href="#" className="item-gm">
                                450 Gms
                              </a>
                            </div>
                          </div>
                          <div className="btn-add-item">
                            <a href="#">+ Add</a>
                          </div>
                        </div>
                        {/* <!-- box-4 add end --> */}
                      </div>

                      {/* <!-- item-menu 2 end--> */}
                    </div>
                  </div>
                  <div className="card-item">
                    <div className="your-card">
                      <h3>Your Cart </h3>
                      <hr />
                    </div>
                    <div className="scroller-con">
                      <img src={storeitem.Untitled} alt="" />
                      <span className="card-text">
                        Your cart is empty Add items to get started
                      </span>
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

export default StoreItem;
