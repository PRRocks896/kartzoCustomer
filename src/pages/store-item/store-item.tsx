import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  header,
  trackorder,
  storeitem,
  findstore,
} from "../../pages/components/helper/images";
import { connect } from "react-redux";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import "./store-item.css";
import SelectSearch from "react-select-search";
import { addCartRequest, getCartListRequest, getProductListRequest, searchProductListRequest, storeitemStateRequest } from "../../modelController";
import { productService } from "../../redux/actions";

class StoreItem extends React.Component<{
  history: any;
  getProductsData: any;
  location: any;
  myDivToFocus: any;
  addToCart: any;
  getcartData: any;
  updateToCart: any;
  getSearchProduct: any;
  getProductDataWithSearching: any;
}> {
  prevRef = null;
  ref: any = {};
  /** Store Item State */
  storeItemState: storeitemStateRequest = constant.storeItemPage.state;
  state = {
    activeLink: this.storeItemState.activeLink,
    isShowCard: this.storeItemState.isShowCard,
    location: this.storeItemState.location,
    slugname: this.storeItemState.slugname,
    categorydata: this.storeItemState.categorydata,
    productdata: this.storeItemState.productdata,
    cartarray: this.storeItemState.cartarray,
    maindata: this.storeItemState.maindata,
    qty: this.storeItemState.qty,
    searchproductdata: this.storeItemState.searchproductdata,
    searchproductdatadetails: this.storeItemState.searchproductdatadetails,
    isButton: this.storeItemState.isButton,
    loadingid: this.storeItemState.loadingid
  };

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.additem = this.additem.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.searchItemDataKeyUp = this.searchItemDataKeyUp.bind(this);
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.cardItem = this.cardItem.bind(this);
    this.onProductSelectId = this.onProductSelectId.bind(this);
    this.handleClickStoreItemEvent = this.handleClickStoreItemEvent.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    console.log("isbutton", this.state.isButton);
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

    if (this.props) {
      const maindata =
        this.props.location &&
        this.props.location.state &&
        this.props.location.state.data
          ? this.props.location.state.data
          : "";
      this.setState({
        maindata: this.state.maindata = maindata,
      });
    }
    console.log("maindata", this.state.maindata);
    if (localStorage.getItem("token")) {
      this.getCartData();
    }
  }

  handleClick = (id: any) => {
    this.setState({ activeLink: parseInt(id) });
  };

  onChangeEvent(event: any, index: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  incrementQty(data: any) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj : addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity + 1,
      discountApplied: data.discountApplied,
    };
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
    // let tempCart = this.state.cartarray;
    // tempCart[index].qty = parseInt(tempCart[index].qty) + 1;
    // this.setState({ cartarray: tempCart });
  }

  decrementQty(data: any) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj : addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity - 1,
      discountApplied: data.discountApplied,
    };
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
  }

  getProductData(searchText: string = "", productId: number = 0) {
    const obj : getProductListRequest = {
      searchText: searchText,
      productId: productId,
      slug: this.state.slugname,
    };
    this.props.getProductsData(obj);
  }

  getCartData(searchText: string = "", page: number = 1, size: number = 20) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj : getCartListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId:user.userID
    };
    this.props.getcartData(obj);
  }

  componentWillReceiveProps(nextProps: any, newState: any) {
    console.log("props", nextProps);
    if (nextProps.productDetail) {
      this.getSubCategory(nextProps.productDetail.subcategory);
      this.productData(nextProps.productDetail.data);
    }
    if (nextProps.getCartDetail) {
      this.getCartAllProductData(nextProps.getCartDetail);
    }
    if (nextProps.searchDetail) {
      this.getProductListingData(nextProps.searchDetail);
    }
    if (nextProps.searchableProduct) {
      this.searchableDataProduct(nextProps.searchableProduct.data);
    } else {
      this.setState({
        searchproductdatadetails: this.state.searchproductdatadetails = [],
      });
    }
  }

  searchItemDataKeyUp(e: any) {
    const data: any = this.state.maindata;
    const obj : searchProductListRequest = {
      name: e.target.value,
      merchantid: data.merchantID,
    };
    this.props.getSearchProduct(obj);
  }

  getProductListingData(data: any) {
    this.setState({
      searchproductdata: this.state.searchproductdata = data,
    });
  }

  onProductSelectId(id: any) {
    console.log("e", id);
    const obj : getProductListRequest = {
      searchText: "",
      productId: id,
      slug: this.state.slugname,
    };
    this.props.getProductDataWithSearching(obj);
    setTimeout(() => {
      this.getProductData();
    }, 12);
  }

  getSubCategory(data: any) {
    this.setState({
      categorydata: this.state.categorydata = data,
    });
    this.setState({
      activeLink: this.state.activeLink = this.state.categorydata
        ? this.state.categorydata[0].value
        : "",
    });
    console.log("link", this.state.activeLink);
  }

  getCartAllProductData(data: any) {
    this.setState({
      isButton: this.state.isButton = false,
      cartarray: this.state.cartarray = data.data,
    });
    localStorage.setItem("cartcount", data.totalcount);
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      this.setState({
        isShowCard: this.state.isShowCard = true,
        cartarray: this.state.cartarray = data.data,
      });
      this.cardItem(true);
    }
    console.log("cartarray", this.state.cartarray);
  }

  productData(product: any) {
    this.setState({
      productdata: this.state.productdata = product,
    });
  }

  searchableDataProduct(data: any) {
    this.setState({
      searchproductdatadetails: this.state.searchproductdatadetails = data,
      activeLink: null,
    });
  }

  additem(data: any) {
    this.setState({
      isButton: this.state.isButton = true,
      loadingid: this.state.loadingid = data.productId,
    });
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      if (
        this.state.cartarray
          .map((cart: any) => cart.productID === data.productId)
          .includes(true)
      ) {
        const users: any = localStorage.getItem("user");
        let user = JSON.parse(users);
        let selectedItem = this.state.cartarray.filter(
          (cart: any) => cart.productID === data.productId
        )[0];
        let index = this.state.cartarray.indexOf(selectedItem);
        // console.log("selectedItem: ", selectedItem);
        // console.log("Index: ", index);
        const obj : addCartRequest = {
          userID: user.userID,
          productID: selectedItem.productID,
          quantity: selectedItem.quantity + 1,
          discountApplied: selectedItem.discountApplied,
        };
        // console.log("increment object: ", obj);
        this.props.updateToCart(obj, this.state.cartarray[index].orderCartID);

        setTimeout(() => {
          this.getCartData();
        }, 200);
      } else {
        const users: any = localStorage.getItem("user");
        let user = JSON.parse(users);
        const obj : addCartRequest = {
          userID: user.userID,
          productID: data.productId,
          quantity: this.state.qty,
          sellingPrice: data.price,
          discountApplied: data.discountPrice,
        };
        this.props.addToCart(obj);

        setTimeout(() => {
          this.getCartData();
        }, 200);
      }
    } else {
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      const obj  : addCartRequest = {
        userID: user.userID,
        productID: data.productId,
        quantity: this.state.qty,
        sellingPrice: data.price,
        discountApplied: data.discountPrice,
      };
      this.props.addToCart(obj);

      setTimeout(() => {
        this.getCartData();
      }, 200);
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  handleClickEvent(id: any) {
    console.log("id", id, this.ref[id]);
    this.setState({ activeLink: parseInt(id) });
    console.log("ref", this.ref[id]);
    this.ref[id].scrollIntoView();
    // this.ref.id.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  }

  handleClickStoreItemEvent() {
    this.setState({ activeLink: null });
  }

  cardItem(data: boolean) {
    if (data === false) {
      return (
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
      );
    } else {
      return (
        <div className="card-item">
          <div className="your-card">
            <h3>Your Cart </h3>
            <hr />
          </div>
          <div className="card-price-item">
            <div className="itemcardlist">
              {this.state.cartarray
                ? this.state.cartarray.length > 0 &&
                  this.state.cartarray.map((cartdata: any, index: number) => (
                    <div className="flex-box" key={index}>
                      <div className="bdr-roud"></div>
                      <div className="item-title">
                        <h4>{cartdata.productName}</h4>
                        {/* <span className="pak">Pack of 20</span> */}
                      </div>
                      <div className="number">
                        <span
                          className="minus"
                          onClick={() => this.decrementQty(cartdata)}
                        >
                          -
                        </span>
                        <input
                          type="text"
                          name="qty"
                          value={cartdata.quantity ? cartdata.quantity : ""}
                          onChange={(e: any) => this.onChangeEvent(e, index)}
                        />
                        <span
                          className="plus"
                          onClick={() => this.incrementQty(cartdata)}
                        >
                          +
                        </span>
                      </div>
                      <span className="price">R{cartdata.sellingPrice}</span>
                    </div>
                  ))
                : ""}
            </div>
          </div>

          <div className="check-out">
            <div className="total-price">
              <div className="total-item">Item total </div>
              <div className="total-item">
                R{" "}
                {this.state.cartarray
                  ? this.state.cartarray.reduce(
                      (sum: number, i: any) => (sum += i.sellingPrice),
                      0
                    )
                  : 0}
              </div>
            </div>
            <Link className="pay-btn" to="/placeorder">
              Proceed to checkout
            </Link>
          </div>
        </div>
      );
    }
  }

  getProductItem(categorydata: any, productdata: any) {
    return (
      <div className="item-dtl">
        <div className="serch-box" onKeyUp={this.searchItemDataKeyUp}>
          <SelectSearch
            options={
              this.state.searchproductdata &&
              this.state.searchproductdata.length > 0
                ? this.state.searchproductdata
                : []
            }
            placeholder="Search for an item"
            search
            onChange={this.onProductSelectId}
          />
        </div>

        <div className="all-item">
          {this.state.searchproductdatadetails ? (
            <div className="item-details-1">
              {this.state.searchproductdatadetails.length > 0 ? (
                <div className="item-nm-tt">Other</div>
              ) : (
                ""
              )}
              {this.state.searchproductdatadetails.length > 0 &&
                this.state.searchproductdatadetails.map(
                  (product: any, index: number) => (
                    <div key={index}>
                      <h3 className="tt-1"></h3>
                      <div className="box-1">
                        <div className="product-img">
                          {product.productImages &&
                          product.productImages[0].imagePath ? (
                            <img
                              className="product_img_size"
                              src={
                                constant.filemerchantpath +
                                product.productImages[0].imagePath
                              }
                              alt=""
                            />
                          ) : (
                            <img
                              className="product_img_size"
                              src={findstore.store}
                              alt=""
                            />
                          )}
                        </div>
                        <div className="right-tt">
                          <h4 className="tt-2">{product.productName}</h4>
                          <span className="price">R {product.price}</span>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: product.productDesc,
                            }}
                          ></p>
                        </div>
                        <div className="btn-add-item">
                          {localStorage.getItem("token") ? (
                            this.state.isButton === false ? (
                              <button
                                className="addproduct"
                                onClick={() => this.additem(product)}
                              >
                                + Add
                              </button>
                            ) : (
                              <div className="spinerButton2">
                                <button className="addproduct" disabled>
                                  + Add
                                </button>
                                {this.state.loadingid === product.productId ? (
                                  <div className="spinners2"></div>
                                ) : (
                                  ""
                                )}
                              </div>
                            )
                          ) : (
                            <Link to="/signin">
                              <button className="addproduct">+ Add</button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          ) : (
            ""
          )}
          {categorydata &&
            categorydata.map((cat: any, index: number) => (
              <div
                ref={(node: any) => (this.ref[cat.value] = node)}
                key={"item-" + index}
                className="item-details-1"
              >
                <div className="item-nm-tt">{cat.name}</div>
                {productdata.length === 0 ? (
                  <p className="text-center mt-4">No Product Avaliable</p>
                ) : (
                  //   productdata &&
                  //   productdata.map((product: any, index: number) =>
                  //     product.subCategoryId !== cat.value ? (
                  //       <p className="text-center mt-4" key={index}>
                  //         No Product Avaliable
                  //       </p>
                  //     ) : (
                  //       ""
                  //     )
                  //   )
                  // )
                  ""
                )}

                {productdata &&
                  productdata.map((product: any, index: number) =>
                    product.subCategoryId === cat.value ? (
                      <div key={index}>
                        <h3 className="tt-1"></h3>
                        <div className="box-1">
                          <div className="product-img">
                            {product.productImages &&
                            product.productImages[0].imagePath ? (
                              <img
                                className="product_img_size"
                                src={
                                  constant.filemerchantpath +
                                  product.productImages[0].imagePath
                                }
                                alt=""
                              />
                            ) : (
                              <img
                                className="product_img_size"
                                src={findstore.store}
                                alt=""
                              />
                            )}
                          </div>
                          <div className="right-tt">
                            <h4 className="tt-2">{product.productName}</h4>
                            <span className="price">R {product.price}</span>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: product.productDesc,
                              }}
                            ></p>
                          </div>
                          <div className="btn-add-item">
                            {localStorage.getItem("token") ? (
                              this.state.isButton === false ? (
                                <button
                                  className="addproduct"
                                  onClick={() => this.additem(product)}
                                >
                                  + Add
                                </button>
                              ) : (
                                <div className="spinerButton2">
                                  <button className="addproduct" disabled>
                                    + Add
                                  </button>
                                  {this.state.loadingid ===
                                  product.productId ? (
                                    <div className="spinners2"></div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              )
                            ) : (
                              <Link to="/signin">
                                <button className="addproduct">+ Add</button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}
              </div>
            ))}
        </div>
      </div>
    );
  }

  render() {
    const { categorydata, productdata, maindata }: any = this.state;
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
                  {/* <div className="position-relative d-none d-sm-block">
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
                  </div> */}
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
                        {/* <span>{this.state.cartarray.length}</span> */}
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
                <span onClick={this.goBack} style={{ cursor: "pointer" }}>
                  store
                </span>
                {/* <span>{this.state.location}</span> */} /{" "}
                <span>{this.state.slugname}</span>
              </div>
            </div>
          </section>
          <section className="store-name">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="store">
                    {/* <img src={findstore.store} alt="store-img" /> */}
                    <div className="pro-img">
                      <img
                        src={constant.filemerchantpath + maindata.logoPath}
                        alt="store-img"
                      />
                    </div>

                    <div className="name">
                      <div className="small-text">{maindata.categoryName}</div>
                      <h3>{maindata.shopName}</h3>
                      <p>{maindata.address}</p>
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
                      {this.state.searchproductdatadetails &&
                      this.state.searchproductdatadetails.length > 0 ? (
                        <li
                          className={
                            this.state.activeLink === null ? "icon-add" : ""
                          }
                        >
                          <a onClick={() => this.handleClickStoreItemEvent()}>
                            Search Results
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {this.state.categorydata
                        ? this.state.categorydata.length > 0 &&
                          this.state.categorydata.map(
                            (data: any, index: number) => (
                              <li
                                key={index} // onClick={() => this.handleClick(data.value)}
                                className={
                                  data.value === this.state.activeLink
                                    ? "icon-add"
                                    : ""
                                }
                              >
                                <a
                                  key={index}
                                  className={data.name}
                                  onClick={() =>
                                    this.handleClickEvent(data.value)
                                  }
                                >
                                  {data.name}
                                </a>
                              </li>
                            )
                          )
                        : ""}
                    </ul>
                  </div>

                  {/** Listing Product */}
                  {this.getProductItem(categorydata, productdata)}

                  {/** Cart Listing */}
                  {this.state.isShowCard === false
                    ? this.cardItem(false)
                    : this.cardItem(true)}
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
  addToCartDetail: state.product.addcartdata,
  getCartDetail: state.product.getcartdetails,
  searchDetail: state.product.searchdata,
  searchableProduct: state.product.searchproduct,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProductsData: (data: any) =>
    dispatch(productService.getProductsData(data)),
  addToCart: (data: any) => dispatch(productService.addToCart(data)),
  updateToCart: (data: any, id: any) =>
    dispatch(productService.updateToCart(data, id)),
  getcartData: (data: any) => dispatch(productService.getcartData(data)),
  getSearchProduct: (data: any) =>
    dispatch(productService.getSearchProduct(data)),
  getProductDataWithSearching: (data: any) =>
    dispatch(productService.getProductDataWithSearching(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreItem);
