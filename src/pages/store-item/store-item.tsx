import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  header,
  findstore,
  trackorder,
  storeitem,
} from "../../pages/components/helper/images";
import { connect } from "react-redux";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import "./store-item.css";
import SelectSearch from "react-select-search";
import { storeitemStateRequest } from "../../modelController";
import { productService } from "../../redux/actions";

class StoreItem extends React.Component<{
  getProductsData: any;
  location: any;
  myDivToFocus: any;
}> {
  // const myDivToFocus;
  /** Store Item State */
  storeItemState: storeitemStateRequest = constant.storeItemPage.state;
  state = {
    activeLink: this.storeItemState.activeLink,
    isShowCard: this.storeItemState.isShowCard,
    location: this.storeItemState.location,
    slugname: this.storeItemState.slugname,
    categorydata: this.storeItemState.categorydata,
    productdata: this.storeItemState.productdata
    // myDivToFocus:React.createRef()
  };

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.additem = this.additem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.searchItemDataKeyUp = this.searchItemDataKeyUp.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);
    // this.myDivToFocus = React.createRef()
  }

  componentDidMount() {
    document.title = constant.store + getAppName();
    const slug = this.props.location.pathname.split("/")[2];
    if (slug) {
      this.setState({
        slugname: this.state.slugname = slug,
      });
    }
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", true);
    this.getProductData();
  }

  handleClick = (id: any) => {
    this.setState({ activeLink: parseInt(id) });
  };

  additem() {
    this.setState({ isShowCard: true });
  }

  onChange() {}

  getProductData(searchText: string = "") {
    const obj = {
      searchText: searchText,
      slug: this.state.slugname,
    };
    this.props.getProductsData(obj);
  }

  componentWillReceiveProps(nextProps: any, newState: any) {
    console.log("props", nextProps);
    if (nextProps.productDetail) {
      this.getSubCategory(nextProps.productDetail.subcategory);
      this.productData(nextProps.productDetail.data)
    }
  }

  searchItemDataKeyUp(e: any) {
    console.log("e", e);
  }

  getSubCategory(data: any) {
    this.setState({
      categorydata: this.state.categorydata = data
    });
    this.setState({
      activeLink:this.state.activeLink = this.state.categorydata[0].value
    })
    console.log("link",this.state.activeLink)
  }

  productData(product:any) {
    this.setState({
      productdata: this.state.productdata = product
    });
  }

  //   handleOnClick = (event:any) => {
  //     //.current is verification that your element has rendered
  //     // let data:any = this.state.myDivToFocus;
  //     if( (React.createRef()).current){
  //       (React.createRef()).scrollIntoView({
  //            behavior: "smooth",
  //            block: "nearest"
  //         })
  //     }
  // }

  render() {
    const options = [
      { name: "Rajkot", value: "sv" },
      { name: "Ahmedabad", value: "en" },
    ];
    // console.log("TrackOrder",this.props)
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
                <Link to="/"> Home </Link> /
                <Link to={`/${this.state.location}`}>
                  {" "}
                  <span>{this.state.location}</span>
                </Link>{" "}
                / <span>Groceries & Essentials</span>
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
                      {this.state.categorydata
                        ? this.state.categorydata.length > 0 &&
                          this.state.categorydata.map(
                            (data: any, index: number) => (
                              <li
                                key={index}
                                onClick={() => this.handleClick(data.value)}
                                className={
                                  data.value  === this.state.activeLink
                                    ? "icon-add"
                                    : ""
                                }
                              >
                                {/* <Link className="page-link" to={data.data1}>
                        {data.name}
                        </Link> */}
                                <a className="page-link">
                                  {data.name}
                                </a>
                              </li>
                            )
                          )
                        : ""}
                    </ul>
                  </div>
                  <div className="item-dtl">
                    <div className="serch-box">
                      <input
                        type="search"
                        name="search"
                        placeholder="Search for an item"
                        onKeyUp={this.searchItemDataKeyUp}
                      />
                    </div>

                    <div className="all-item">
                      {
                        this.state.categorydata &&
                        this.state.productdata ? (
                          this.state.categorydata.map((cat:any,index:number) => 
                          this.state.productdata.length > 0 && this.state.productdata.map((data:any,index:number) =>
                          data.subCategoryId === cat.value ? (
                          <div key={index}className="item-details-1" id="paan">
                        <div className="item-nm-tt">{cat.name}</div>
                          <h3 className="tt-1">
                            {/* Bread & Buns <span className="clr-1">(1 item)</span> */}
                          </h3>
                          <div className="box-1">
                            <div className="product-img">
                              <img className="product_img_size"  src={constant.filemerchantpath + data.productImages[0].imagePath} alt="" />
                            </div>
                            <div className="right-tt">
                              <h4 className="tt-2">
                               {data.productName}
                              </h4>
                        <span className="price">R {data.price}</span>
                              <p dangerouslySetInnerHTML={{__html: data.productDesc}}>
                              
                              </p>
                              {/* <div className="dis-q">
                                <span className="quntity">Quantity</span>
                                <a href="#" className="item-gm">
                                  450 Gms
                                </a>
                              </div> */}
                            </div>
                            <div className="btn-add-item">
                              <a href="#" onClick={this.additem}>
                                + Add
                              </a>
                            </div>
                          </div>
                        </div>
                          ) : ('')
                          )
                          )
                        ) : ('')
                      }
                    </div>
                  </div>
                  {this.state.isShowCard === false ? (
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
                  ) : (
                    <div className="card-item">
                      <div className="your-card">
                        <h3>Your Cart </h3>
                        <hr />
                      </div>
                      <div className="card-price-item">
                        <div className="itemcardlist">
                          <div className="flex-box">
                            <div className="bdr-roud"></div>
                            <div className="item-title">
                              <h4>Marlboro Gold Light</h4>
                              <span className="pak">Pack of 20</span>
                            </div>
                            <div className="number">
                              <span className="minus">-</span>
                              <input
                                type="text"
                                value="1"
                                onChange={this.onChange}
                              />
                              <span className="plus">+</span>
                            </div>
                            <span className="price">R28</span>
                          </div>

                          <div className="flex-box">
                            <div className="bdr-roud"></div>
                            <div className="item-title">
                              <h4>Marlboro Gold Light</h4>
                              <span className="pak">Pack of 20</span>
                            </div>
                            <div className="number">
                              <span className="minus">-</span>
                              <input
                                type="text"
                                value="1"
                                onChange={this.onChange}
                              />
                              <span className="plus">+</span>
                            </div>
                            <span className="price">R28</span>
                          </div>
                        </div>
                      </div>

                      <div className="check-out">
                        <div className="total-price">
                          <div className="total-item">Item total </div>
                          <div className="total-item">R 1018 </div>
                        </div>
                        <Link className="pay-btn" to="/placeorder">
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  )}
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
  productDetail: state.product.product,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProductsData: (data: any) =>
    dispatch(productService.getProductsData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreItem);
