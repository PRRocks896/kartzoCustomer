import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  findstore,
  header,
  trackorder,
} from "../../pages/components/helper/images";
import constant from "../constant/constant";
import { getAppName, scrollToTop, pageNumber } from "../utils";
import "./find-store.css";
import { connect } from "react-redux";
import SelectSearch from "react-select-search";
import { findstoreStateRequest } from "../../modelController";
import { merchantService } from "../../redux/actions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class FindStore extends React.Component<{
  getMerchantData: any;
  location: any;
}> {
  /** Find Store State */
  findstoreState: findstoreStateRequest = constant.findStorePage.state;
  state = {
    count: this.findstoreState.count,
    currentPage: this.findstoreState.currentPage,
    items_per_page: this.findstoreState.items_per_page,
    upperPageBound: this.findstoreState.upperPageBound,
    lowerPageBound: this.findstoreState.lowerPageBound,
    pageBound: this.findstoreState.pageBound,
    onItemSelect: this.findstoreState.onItemSelect,
    switchSort: this.findstoreState.switchSort,
    isStatus: this.findstoreState.isStatus,
    slugname: this.findstoreState.slugname,
    location: this.findstoreState.location,
    merchantdata: this.findstoreState.merchantdata,
    isLoading: this.findstoreState.isLoading,
  };
  constructor(props: any) {
    super(props);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.pagination = this.pagination.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = constant.findstore + getAppName();
    const slug = this.props.location.pathname.split("/")[2];
    if (slug) {
      this.setState({
        slugname: this.state.slugname = slug,
      });
    }
    scrollToTop();
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", true);
    this.getMerchantData();
  }

  getMerchantData(searchText: string = "", page: number = 1, size: number = 4) {
    const obj = {
      searchText: searchText,
      slug: this.state.slugname,
      page: page,
      size: size,
    };
    this.props.getMerchantData(obj);
  }

  componentWillReceiveProps(nextProps: any, newState: any) {
    // console.log("props", nextProps);
    if (nextProps.merchantDetail) {
      this.setState({
        isLoading: false,
      });
      this.getMerchantList(nextProps.merchantDetail);
    }
  }

  getMerchantList(data: any) {
    this.setState({
      count: this.state.count = data.totalcount,
      merchantdata: this.state.merchantdata = data.data,
    });
  }

  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
  }

  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
  }

  async handleClick(event: any) {
    this.setState({
      currentPage: this.state.currentPage = event.target.id,
    });
    const obj = {
      searchText: "",
      slug: this.state.slugname,
      page: parseInt(event.target.id),
      size: parseInt(this.state.items_per_page),
    };
    this.getMerchantData(obj.searchText, obj.page, obj.size);
  }

  pagination(pageNumbers: any) {
    var res = pageNumbers.map((number: any) => {
      if (number === 1 && parseInt(this.state.currentPage) === 1) {
        return (
          <li
            key={number}
            id={number}
            className={
              parseInt(this.state.currentPage) === number
                ? "active"
                : "page-item"
            }
          >
            <a className="page-link" onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      } else if (
        number < this.state.upperPageBound + 1 &&
        number > this.state.lowerPageBound
      ) {
        return (
          <li
            key={number}
            id={number}
            className={
              parseInt(this.state.currentPage) === number
                ? "active"
                : "page-item"
            }
          >
            <a className="page-link" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      }
    });
    return res;
  }

  getPageData(
    pageDecrementBtn: any,
    renderPageNumbers: any,
    pageIncrementBtn: any
  ) {
    return (
      <div className="filter">
        <div>
          <ul className="pagination" id="page-numbers">
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    var pageNumbers = pageNumber(this.state.count, this.state.items_per_page);
    var renderPageNumbers = this.pagination(pageNumbers);

    let pageIncrementBtn = null;
    if (pageNumbers.length > this.state.upperPageBound) {
      pageIncrementBtn = (
        <li className="page-item">
          <a className="page-link" onClick={this.btnIncrementClick}>
            &hellip;
          </a>
        </li>
      );
    }

    let pageDecrementBtn = null;
    if (this.state.lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="page-item">
          <a className="page-link" onClick={this.btnDecrementClick}>
            &hellip;
          </a>
        </li>
      );
    }

    const options = [
      { name: "Rajkot", value: "sv" },
      { name: "Ahmedabad", value: "en" },
      { name: "Surat", value: "en" },
      { name: "Baroda", value: "en" },
    ];

    return (
      <>
        <div className="sticky-menu" id="fix-top">
          <header className="header">
            <div className="container-fluid">
              <div className="dis-flx">
                <div className="left-content">
                  <Link to="/">
                    <img src={header.logo} alt="logo" />
                  </Link>
                  <div className="position-relative d-none d-sm-block">
                    <SelectSearch
                      options={options.length > 0 ? options : []}
                      search
                      value="Rajkot"
                      // placeholder="Select Delivery Boy"
                      // onChange={this.onItemSelectId}
                    />
                    <span className="find-map-icon">
                      <i className="fas fa-map-marker-alt map-icon"></i>
                    </span>
                  </div>

                  {/* <a href="#">
                    <div className="search-box">
                      <img src={trackorder.location} alt="location" />
                      <span className="search-text"> Rajkot</span>
                    </div>
                  </a> */}
                </div>
                <div className="right-content">
                  <div className="cart-icon">
                    <Link to="/cart">
                      <img src={trackorder.shopping} alt="cart-icon" />
                    </Link>
                  </div>

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
          <section className="page-name">
            <div className="container-fluid">
              <div className="menu-item">
                <Link to="/"> Home </Link> /{" "}
                <Link to={`/${this.state.location}`}>
                  {" "}
                  <span>{this.state.location}</span>
                </Link>{" "}
                / <span>{this.state.slugname}</span>
              </div>
            </div>
          </section>
        </div>
        <section className="store-dtl">
          <div className="tt-bdr">
            <div className="container-fluid">
              <h3>
                {this.state.slugname} in {this.state.location}{" "}
              </h3>
              <div className="small-text">4 outlets</div>
            </div>
          </div>
          <div className="store-box">
            <div className="container-fluid">
              <div className="row">
                {this.state.isLoading === false
                  ? this.state.merchantdata
                    ? this.state.merchantdata.length > 0 &&
                      this.state.merchantdata.map(
                        (data: any, index: number) => (
                          <div
                            key={index}
                            className="col-lg-6 col-md-6 col-sm-12"
                          >
                            <Link to="/store-item">
                              <div className="box-1">
                                <img
                                  className="merchant_img"
                                  src={
                                    constant.filemerchantpath + data.logoPath
                                  }
                                  alt={data.shopName}
                                />
                                <div className="box-text">
                                  <h4>{data.shopName}</h4>
                                  <div className="small-text">
                                    Mango Drink, Kulfi
                                  </div>
                                  <div className="big-text">{data.address}</div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      )
                    : ""
                  : [1, 2, 3, 4].map((data: any, index: number) => (
                      <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                        <SkeletonTheme color="#202020" highlightColor="#444">
                          <div className="box-1">
                          <Skeleton className="merchant_img" count={1} />
                            <div className="box-text">
                              <Skeleton count={1} />
                              <div className="small-text">
                                <Skeleton count={1} />
                              </div>
                              <div className="big-text">
                                {" "}
                                <Skeleton count={1} />
                              </div>
                            </div>
                            {/* <img alt="img"className="category_img">
                            <Skeleton count={1} />
                          </img> */}
                          </div>
                        </SkeletonTheme>
                      </div>
                    ))}

                <div className="col-md-12">
                  <div className="pagination">
                    {this.getPageData(
                      pageIncrementBtn,
                      renderPageNumbers,
                      pageDecrementBtn
                    )}
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

const mapStateToProps = (state: any) => ({
  merchantDetail: state.merchant.merchant,
});

const mapDispatchToProps = (dispatch: any) => ({
  getMerchantData: (data: any) =>
    dispatch(merchantService.getMerchantData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindStore);
