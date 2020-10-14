import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  findstore,
  header,
  trackorder,
} from "../../pages/components/helper/images";
import { scrollToTop } from "../utils";
import "./find-store.css";

class FindStore extends React.Component<{ show: boolean }> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    scrollToTop();
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
                <Link to ="/">
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
                <Link to ="/cart">
                  <img src={trackorder.shopping} alt="cart-icon" />
                  </Link>
                </div>

                <Link className="sign-tt" to ="/signin">
                  Sign in
                </Link>
              
              </div>
            </div>
          </div>
        </header>
        <section className="page-name">
          <div className="container-fluid">
            <div className="menu-item">
            <Link to="/"> Home </Link> / <a href="#"> Pretoria </a> /{" "}
                <span>Groceries & Essentials</span>
            </div>
          </div>
        </section>
        </div>
        <section className="store-dtl">
          <div className="tt-bdr">
            <div className="container-fluid">
              <h3>Grocery Stores in Pretoria </h3>
              <div className="small-text">4 outlets</div>
            </div>
          </div>
          <div className="store-box">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Link to="/store-item">
                    <div className="box-1">
                      <img src={findstore.store} alt="" />
                      <div className="box-text">
                        <h4>Godrej Nature's Basket Powai</h4>
                        <div className="small-text">Mango Drink, Kulfi</div>
                        <div className="big-text">
                          Veera Desai Area, Andheri West
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Link to="/store-item">
                    <div className="box-1">
                      <img src={findstore.store} alt="" />
                      <div className="box-text">
                        <h4>Godrej Nature's Basket Powai</h4>
                        <div className="small-text">Mango Drink, Kulfi</div>
                        <div className="big-text">
                          Veera Desai Area, Andheri West
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Link to="/store-item">
                    <div className="box-1">
                      <img src={findstore.store} alt="" />
                      <div className="box-text">
                        <h4>Godrej Nature's Basket Powai</h4>
                        <div className="small-text">Mango Drink, Kulfi</div>
                        <div className="big-text">
                          Veera Desai Area, Andheri West
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <a href="#">
                    <div className="box-1">
                      <img src={findstore.store} alt="" />
                      <div className="box-text">
                        <h4>Godrej Nature's Basket Powai</h4>
                        <div className="small-text">Mango Drink, Kulfi</div>
                        <div className="big-text">
                          Veera Desai Area, Andheri West
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-12">
                  <div className="pagination">
                    <ul>
                      <li className="prev">
                        <a href="#">
                          <img src={findstore.left} alt="prev-img" />
                        </a>
                      </li>
                      <li className="page-numbr">
                        <a href="#">1</a>
                      </li>
                      <li className="page-numbr">
                        <a href="#">2</a>
                      </li>
                      <li className="page-numbr">
                        <a href="#">3</a>
                      </li>
                      <li className="page-numbr">
                        <a href="#">4</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <img src={findstore.right} alt="next-img" />
                        </a>
                      </li>
                    </ul>
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

export default FindStore;
