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
import {
  findstoreStateRequest,
  getMerchantListRequest,
  searchCityListRequest,
} from "../../modelController";
import { merchantService } from "../../redux/actions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class FindStore extends React.Component<{
  getMerchantData: any;
  location: any;
  searchLocationResponse: any;
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
    locationData: this.findstoreState.locationData,
    cityid: this.findstoreState.cityid,
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.pagination = this.pagination.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onItemSelectId = this.onItemSelectId.bind(this);
    this.searchLocationKeyUp = this.searchLocationKeyUp.bind(this);
  }

  /** Page Render Call */
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

  /**
   *
   * @param searchText : search value
   * @param cityId : get data with city
   * @param page : page number
   * @param size : per page value
   */
  getMerchantData(
    searchText: string = "",
    cityId: number = 3,
    page: number = 1,
    size: number = 4
  ) {
    const obj: getMerchantListRequest = {
      searchText: searchText,
      cityId: cityId,
      slug: this.state.slugname,
      page: page,
      size: size,
    };
    this.props.getMerchantData(obj);
  }

  /**
   *
   * @param nextProps : get updated props value
   */
  componentWillReceiveProps(nextProps: any) {
    // console.log("props", nextProps);
    if (nextProps.merchantDetail) {
      this.setState({
        isLoading: false,
      });
      this.getMerchantList(nextProps.merchantDetail);
    }
    if (nextProps.locationDetail) {
      this.locationdetails(nextProps.locationDetail);
    } else {
      this.setState({
        locationData: this.state.locationData = [],
      });
    }
  }

  /**
   *
   * @param data : get merchant data
   */
  getMerchantList(data: any) {
    this.setState({
      count: this.state.count = data.data ? data.data.length : '0',
      merchantdata: this.state.merchantdata = data.data,
    });
  }

  /** Button Increment value on pageination */
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

  /** Button Decrement value on pageination */
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

  /**
   *
   * @param event : another page page number
   */
  async handleClick(event: any) {
    this.setState({
      currentPage: this.state.currentPage = event.target.id,
    });
    const obj: getMerchantListRequest = {
      searchText: "",
      cityId: this.state.cityid,
      slug: this.state.slugname,
      page: parseInt(event.target.id),
      size: parseInt(this.state.items_per_page),
    };
    this.getMerchantData(obj.searchText, obj.cityId, obj.page, obj.size);
  }

  /**
   *
   * @param event : get merchant value with particular city
   */
  onItemSelectId(event: any) {
    this.setState({
      cityid: this.state.cityid = event,
    });
    this.state.locationData.map((city: any, index: number) =>
      city.value === event
        ? this.setState({
            location: this.state.location = city.name,
          })
        : ""
    );
    this.getMerchantData("", event, 1, 4);
  }

  /**
   *
   * @param e : keypress search value get
   */
  searchLocationKeyUp(e: any) {
    // console.log("e",e.target.value)
    const obj: searchCityListRequest = {
      value: e.target.value,
    };
    if (obj.value) {
      this.props.searchLocationResponse(obj);
    }
  }

  /**
   *
   * @param data : get location data
   */
  locationdetails(data: any) {
    // console.log("data",data);
    this.setState({
      locationData: this.state.locationData = data,
    });
  }

  /**
   *
   * @param pageNumbers : pagenumber
   */
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

  /**
   *
   * @param pageDecrementBtn : value...
   * @param renderPageNumbers : page number
   * @param pageIncrementBtn : value...
   */
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

  /** Render DOM */
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

    const options = [{ name: "Rajkot", value: "sv" }];

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
                  {this.state.locationData.length > 0 ? (
                    <div
                      className="position-relative d-none d-sm-block"
                      onKeyUp={this.searchLocationKeyUp}
                    >
                      <SelectSearch
                        options={
                          this.state.locationData &&
                          this.state.locationData.length > 0
                            ? this.state.locationData
                            : []
                        }
                        search
                        onChange={this.onItemSelectId}
                      />
                      <span className="find-map-icon">
                        <i className="fas fa-map-marker-alt map-icon"></i>
                      </span>
                    </div>
                  ) : (
                    <div
                      className="position-relative d-none d-sm-block"
                      onKeyUp={this.searchLocationKeyUp}
                    >
                      <SelectSearch
                        options={options.length > 0 ? options : []}
                        search
                        value="Rajkot"
                        onChange={this.onItemSelectId}
                      />
                      <span className="find-map-icon">
                        <i className="fas fa-map-marker-alt map-icon"></i>
                      </span>
                    </div>
                  )}

                  {/* <a href="#">
                    <div className="search-box">
                      <img src={trackorder.location} alt="location" />
                      <span className="search-text"> Rajkot</span>
                    </div>
                  </a> */}
                </div>
                <div className="right-content">
                  <div className="cart-icon">
                    <div className="quty-icon">
                      {localStorage.getItem("cartcount")
                        ? localStorage.getItem("cartcount")
                        : 0}
                    </div>
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
                            <Link
                              to={{
                                pathname: `/store/${data.slug}`,
                                state: { data },
                              }}
                            >
                              <div className="box-1">
                                {data.logoPath ? (
                                  <img
                                    className="merchant_img"
                                    src={
                                      constant.filemerchantpath + data.logoPath
                                    }
                                    alt={data.shopName}
                                  />
                                ) : (
                                  <img
                                    className="merchant_img"
                                    src={findstore.store}
                                    alt={data.shopName}
                                  />
                                )}

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

/**
 * 
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  merchantDetail: state.merchant.merchant,
  locationDetail: state.merchant.locationdata,
});

/**
 * 
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({

  /** Get Merchant Data */
  getMerchantData: (data: any) =>
    dispatch(merchantService.getMerchantData(data)),

  /** Search Location */
  searchLocationResponse: (data: any) =>
    dispatch(merchantService.searchLocationResponse(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindStore);
