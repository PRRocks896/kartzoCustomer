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
import {
  addCartRequest,
  getCartListRequest,
  getProductListRequest,
  removeCartItemRequest,
  searchProductListRequest,
  storeitemStateRequest,
} from "../../modelController";
import { productService } from "../../redux/index";
import { Modal } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import StarRatingComponent from "react-star-rating-component";
// import {Link} from 'react-scroll'

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
  removeProductFromCart: any;
  getRatingCount: any;
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
    loadingid: this.storeItemState.loadingid,
    show: this.storeItemState.show,
    isLoading: this.storeItemState.isLoading,
    loading: true,
    qtydisable: false,
    rating: 0,
    userratingcount:0
  };

  /** Constructor call */
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
    this.handleClose = this.handleClose.bind(this);
    this.clearOldCart = this.clearOldCart.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.store + getAppName();
    const slug = this.props.location.pathname.split("/")[2];
    if (slug) {
      this.setState({
        slugname: (this.state.slugname = slug),
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
        maindata: (this.state.maindata = maindata),
      });
    }
    console.log("maindata", this.state.maindata);
    let datamain: any = this.state.maindata;
    this.getRatingCount();
    if (localStorage.getItem("token")) {
      localStorage.setItem("merchantID", datamain.merchantID);
      this.getCartData();
      
    }
  }

  getRatingCount() {
    let m: any = this.state.maindata;
    this.props.getRatingCount(m.merchantID);
  }

  /**
   *
   * @param id : active category display
   */
  handleClick = (id: any) => {
    this.setState({ activeLink: parseInt(id) });
  };

  /** Close model */
  handleClose() {
    this.setState({ show: !this.state.show });
  }

  /**
   *
   * @param event : update state value onchange event
   */
  onChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /**
   *
   * @param data : cart item in increment quantity
   */
  async incrementQty(data: any) {
    this.setState({
      qtydisable: true,
    });
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const mid: any = localStorage.getItem("merchantID");
    const obj: addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity + 1,
      discountApplied: data.discountApplied,
      merchantID: data.merchantID,
    };
    await this.props.updateToCart(obj, data.orderCartID);
    // setTimeout(async () => {
    //   await this.getCartData();
    // }, 100);
    // let tempCart = this.state.cartarray;
    // tempCart[index].qty = parseInt(tempCart[index].qty) + 1;
    // this.setState({ cartarray: tempCart });
  }

  /**
   *
   * @param data : cart item in decrement quantity
   */
  async decrementQty(data: any) {
    this.setState({
      qtydisable: true,
    });
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const mid: any = localStorage.getItem("merchantID");
    const obj: addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity - 1,
      discountApplied: data.discountApplied,
      merchantID: data.merchantID,
    };
    await this.props.updateToCart(obj, data.orderCartID);
    // setTimeout(async () => {
    //   await this.getCartData();
    // }, 100);
  }

  /**
   *
   * @param searchText : search value
   * @param productId : product id
   */
  getProductData(searchText: string = "", productId: number = 0) {
    const obj: getProductListRequest = {
      searchText: searchText,
      productId: productId,
      slug: this.state.slugname,
    };
    this.props.getProductsData(obj);
  }

  /**
   *
   * @param searchText : search value
   * @param page : page number
   * @param size : per page value display
   */
  getCartData(searchText: string = "", page: number = 1, size: number = 20) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getCartListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    this.props.getcartData(obj);
  }

  /**
   *
   * @param nextProps : get updated props value
   */
  // componentWillReceiveProps(nextProps: any) {
  //   // console.log("props", nextProps);
  //   if (nextProps.productDetail) {
  //     this.getSubCategory(nextProps.productDetail.subcategory);

  //     this.productData(nextProps.productDetail.data);
  //   }
  //   // if (nextProps.getCartDetail) {
  //   //   this.getCartAllProductData(nextProps.getCartDetail);
  //   // }
  //   if (nextProps.searchDetail) {
  //     this.getProductListingData(nextProps.searchDetail);
  //   }
  //   // if (nextProps.updateCart) {
  //   //   this.updateCart(nextProps.updateCart);
  //   // }
  //   if (nextProps.searchableProduct) {
  //     this.searchableDataProduct(nextProps.searchableProduct.data);
  //   } else {
  //     this.setState({
  //       searchproductdatadetails: (this.state.searchproductdatadetails = []),
  //     });
  //   }
  // }

  /**
   * 
   * @param prevProps : props updated value
   */
  componentDidUpdate(prevProps: any) {
    let cart: any = this.props;
    if (prevProps.productDetail !== cart.productDetail) {
      this.getSubCategory(cart.productDetail.subcategory);

      this.productData(cart.productDetail.data);
    }
    if (prevProps.searchDetail !== cart.searchDetail) {
      this.getProductListingData(cart.searchDetail);
    }
    if (prevProps.getCartDetail !== cart.getCartDetail) {
      this.getCartAllProductData(cart.getCartDetail);
    }
    if (prevProps.updateCart !== cart.updateCart) {
      this.updateCart(cart.updateCart);
    }
    if (prevProps.searchableProduct !== cart.searchableProduct) {
      this.searchableDataProduct(cart.searchableProduct.data);
    }
    if (prevProps.addToCartDetail !== cart.addToCartDetail) {
      this.addCart(cart.addToCartDetail);
    }
    if (prevProps.deleteCart !== cart.deleteCart) {
      this.deleteCart(cart.deleteCart);
    }
    if (prevProps.ratingData !== cart.ratingData) {
      this.ratingData(cart.ratingData);
    }
  }

  /**
   * 
   * @param data : rating data
   */
  ratingData(data: any) {
    console.log("data", data);
    this.setState({
      rating: Math.round(data.resultObject.averageRating),
      userratingcount: data.resultObject.userCount
    });
  }

  /**
   * 
   * @param data : delete cart
   */
  deleteCart(data: any) {
    if (data.status === 200) {
      this.getCartData();
      localStorage.removeItem("merchantID");
      this.setState({
        show: (this.state.show = false),
      });
    }
  }

  /**
   * 
   * @param data : add cart
   */
  addCart(data: any) {
    if (data.status === 200) {
      this.getCartData();
    }
  }

  /**
   * 
   * @param data : update cart
   */
  updateCart(data: any) {
    if (data.status === 200) {
      this.getCartData();
    }
  }

  /**
   *
   * @param e : search value success response
   */
  searchItemDataKeyUp(e: any) {
    if (e.target.value) {
      const data: any = this.state.maindata;
      const obj: searchProductListRequest = {
        name: e.target.value,
        merchantid: data.merchantID,
      };
      this.props.getSearchProduct(obj);
    }
  }

  /**
   *
   * @param data : get product listing value
   */
  getProductListingData(data: any) {
    this.setState({
      searchproductdata: (this.state.searchproductdata = data),
    });
  }

  /**
   *
   * @param id : select product id
   */
  onProductSelectId(id: any) {
    // console.log("e", id);
    const obj: getProductListRequest = {
      searchText: "",
      productId: id,
      slug: this.state.slugname,
    };
    this.props.getProductDataWithSearching(obj);
    setTimeout(() => {
      this.setState({
        searchproductdata: [],
      });
      this.getProductData();
    }, 12);
  }

  /**
   *
   * @param data : geyt subcategory value
   */
  getSubCategory(data: any) {
    this.setState({
      categorydata: (this.state.categorydata = data),
    });
    this.setState({
      activeLink: (this.state.activeLink = this.state.categorydata
        ? this.state.categorydata[0].value
        : ""),
    });
    // console.log("link", this.state.activeLink);
  }

  /**
   *
   * @param data : get cart data response
   */
  getCartAllProductData(data: any) {
    this.setState({
      loading: false,
      qtydisable: (this.state.qtydisable = false),
      isButton: (this.state.isButton = false),
      cartarray: (this.state.cartarray = data.data),
    });
    localStorage.setItem("cartcount", data.totalcount);
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      this.setState({
        isShowCard: (this.state.isShowCard = true),
        cartarray: (this.state.cartarray = data.data),
      });
      this.cardItem(true);
    } else {
      // EventEmitter.dispatch('count', 0);
      // localStorage.setItem('cartcount','0');
      // localStorage.removeItem('merchantID');
    }
  }

  /**
   *
   * @param product : get product data
   */
  productData(product: any) {
    this.setState({
      isLoading: false,
      productdata: (this.state.productdata = product),
    });
  }

  /**
   *
   * @param data : get searchable product response
   */
  searchableDataProduct(data: any) {
    this.setState({
      searchproductdatadetails: (this.state.searchproductdatadetails = data),
      activeLink: this.state.activeLink =  0,
    });
  }

  /**
   *
   * @param data : add cart item
   */
  additem(data: any) {
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      let m: any = this.state.maindata;
      if (m.merchantID === this.state.cartarray[0].merchantID) {
        this.setState({
          isButton: (this.state.isButton = true),
          loadingid: (this.state.loadingid = data.productId),
        });
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
          const mid: any = localStorage.getItem("merchantID");
          const obj: addCartRequest = {
            userID: user.userID,
            productID: selectedItem.productID,
            quantity: selectedItem.quantity + 1,
            discountApplied: selectedItem.discountApplied,
            merchantID: parseInt(mid),
          };
          // console.log("increment object: ", obj);
          this.props.updateToCart(obj, this.state.cartarray[index].orderCartID);

          // setTimeout(() => {
          //   this.getCartData();
          // }, 200);
        } else {
          const users: any = localStorage.getItem("user");
          let user = JSON.parse(users);
          const mid: any = localStorage.getItem("merchantID");
          const obj: addCartRequest = {
            userID: user.userID,
            productID: data.productId,
            quantity: this.state.qty,
            sellingPrice: data.price,
            discountApplied: data.discountPrice,
            merchantID: parseInt(mid),
          };
          this.props.addToCart(obj);

          // setTimeout(() => {
          //   this.getCartData();
          // }, 200);
        }
      } else {
        this.setState({
          show: true,
        });
      }
    } else {
      let m: any = this.state.maindata;
      localStorage.setItem("merchantID", m.merchantID);
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      const obj: addCartRequest = {
        userID: user.userID,
        productID: data.productId,
        quantity: this.state.qty,
        sellingPrice: data.price,
        discountApplied: data.discountPrice,
        merchantID: m.merchantID,
      };
      this.props.addToCart(obj);

      // setTimeout(() => {
      //   this.getCartData();
      // }, 200);
    }
  }

  /** Redirect in previous page */
  goBack() {
    this.props.history.goBack();
  }

  /**
   *
   * @param id : click to scroll value particular section
   */
  handleClickEvent(id: any) {
    // console.log("id", id, this.ref[id]);
    this.setState({ activeLink: parseInt(id) });
    // console.log("ref", this.ref[id]);
    this.ref[id].scrollIntoView();
    // this.ref.id.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  }

  /** Search results link active */
  handleClickStoreItemEvent() {
    this.setState({ activeLink: 0 });
  }

  /**
   *
   * @param data : true or false to display cart
   */
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
              {this.state.loading === false
                ? this.state.cartarray
                  ? this.state.cartarray.length > 0 &&
                    this.state.cartarray.map((cartdata: any, index: number) => (
                      <div
                        className="flex-box"
                        key={index}
                        style={{
                          pointerEvents:
                            this.state.qtydisable === true ? "none" : "visible",
                        }}
                      >
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
                            onChange={(e: any) => this.onChangeEvent(e)}
                            disabled={
                              this.state.qtydisable === true ? true : false
                            }
                          />
                          <span
                            className="plus"
                            onClick={() => this.incrementQty(cartdata)}
                          >
                            +
                          </span>
                        </div>
                        <span className="price">
                          <i className="fa fa-rupee"></i>{" "}
                          {cartdata.sellingPrice.toFixed(2)}
                        </span>
                      </div>
                    ))
                  : ""
                : [1, 2, 3, 4].map((data: any, index: number) => (
                    <div key={index}>
                      <SkeletonTheme color="black" highlightColor="black">
                        <p>
                          <Skeleton count={3} />
                        </p>
                      </SkeletonTheme>
                    </div>
                  ))}
            </div>
          </div>

          <div className="check-out">
            <div className="total-price">
              <div className="total-item">Item total </div>
              <div className="total-item">
                <i className="fa fa-rupee"></i>{" "}
                {this.state.cartarray
                  ? this.state.cartarray
                      .reduce(
                        (sum: number, i: any) => (sum += i.sellingPrice),
                        0
                      )
                      .toFixed(2)
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

  /** Clear old cart */
  async clearOldCart() {
    let cartdeletearray = [];
    for (var i = 0; i < this.state.cartarray.length; i++) {
      cartdeletearray.push(this.state.cartarray[i].orderCartID);
    }
    const obj: removeCartItemRequest = {
      moduleName: "OrderCart",
      id: cartdeletearray,
    };
    await this.props.removeProductFromCart(obj);
  }

  /**
   *
   * @param categorydata : get category data
   * @param productdata : get product data
   */
  getProductItem(categorydata: any, productdata: any) {
    return (
      <div className="item-dtl">
        <div className="serch-box hide-res">
          <div className="search_product_div">
            <input
              type="search"
              name="search"
              placeholder="Search for an item"
              onKeyUp={this.searchItemDataKeyUp}
            />
            {this.state.searchproductdata ? (
              <div className="main_search_box_div">
                {this.state.searchproductdata.length > 0 &&
                  this.state.searchproductdata.map(
                    (data: any, index: number) => (
                      <div
                        className="search_results_div"
                        key={index}
                        onClick={() => this.onProductSelectId(data.value)}
                      >
                        <i className="fas fa-search"></i>
                        <p>{data.name}</p>
                      </div>
                    )
                  )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <div className="serch-box" onKeyUp={this.searchItemDataKeyUp}>
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
        </div> */}
        <div className="all-item">
          {/** Search Item */}
          {this.searchItem()}

          {this.state.isLoading === false
            ? categorydata &&
              categorydata.map((cat: any, index: number) => (
                <div
                  // id={cat.name}
                  // style={{height: 135,overflow:'auto'}}
                  ref={(el) => (this.ref[cat.value] = el)}
                  key={"item-" + index}
                >
                  <div className="item-details-1">
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
                                <span className="price">
                                  <i className="fa fa-rupee"></i>{" "}
                                  {product.price.toFixed(2)}
                                </span>
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
                                    <button className="addproduct">
                                      + Add
                                    </button>
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
                </div>
              ))
            : [1, 2, 3, 4].map((data: any, index: number) => (
                <div key={index}>
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <h3 className="tt-1">
                      <Skeleton count={1}></Skeleton>
                    </h3>
                    <p>
                      <Skeleton count={3} />
                    </p>
                    {/* <div className="box-1">
                    <Skeleton count={1}>
                        <div className="product-img">
                      <Skeleton count={1}>

                      </Skeleton>
                        </div>
                        <div className="right-tt">
                      <Skeleton count={1}>
                            <h4 className="tt-2">
                          <Skeleton count={1}>

                          </Skeleton>
                            </h4>
                           
                            <span className="price">
                          <Skeleton count={1}>


                          </Skeleton>
                            </span>
                           
                            <p>
                          <Skeleton count={1}>

                          </Skeleton>
                            </p>
                           
                      </Skeleton>
                        </div>
                        <div className="btn-add-item">
                      <Skeleton count={1}>

                      </Skeleton>
                        </div>
                    </Skeleton>
                  </div> */}
                  </SkeletonTheme>
                </div>
              ))}
        </div>
      </div>
    );
  }

  /** Search Item */
  searchItem() {
    return (
      <>
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
                        <span className="price">
                          <i className="fa fa-rupee"></i> {product.price}
                        </span>
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

            <Modal
              className="modal-dialog-centered d-ct"
              show={this.state.show}
              onHide={this.handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="clear-cart">
                  <img
                    src={require("../../assets/images/cart-icon.svg")}
                    alt="cart icon"
                  />
                  <h1>Clear cart?</h1>
                  <p>
                    <strong>
                      Do you want to clear the cart and add items from{" "}
                      <strong>another cart?</strong>
                    </strong>
                  </p>
                  <div className="flex-btn">
                    <button className="cencel-btn" onClick={this.handleClose}>
                      Cancel
                    </button>
                    <button className="clear-btn" onClick={this.clearOldCart}>
                      Clear cart
                    </button>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }

  /** Rating Block */
  rating() {
    return (
      <>
      <div className="rating-icon-svg">
      <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -10 511.99143 511" width="12px" fill="#fff"><path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>
      <path xmlns="http://www.w3.org/2000/svg" d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/></svg>
      <span style={{fontWeight:600}}>{this.state.rating ? this.state.rating : 0} </span>
      </div>
      <span style={{fontSize:'12px'}}>{this.state.userratingcount ? this.state.userratingcount : 0} Ratings</span>
      </>
    );
  }

  /** Render DOM */
  render() {
    const { categorydata, productdata, maindata }: any = this.state;
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
                      <h3>{maindata.shopName} </h3>
                      <p>{maindata.address}</p>
                      <div>{this.rating()} </div>
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
                            this.state.activeLink === 0 ? "icon-add" : ""
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
                                {/* <Link onClick={() => this.handleClickEvent(data.value)} to={data.name} className={data.name} spy={true} smooth={true}> */}
                                <a
                                  key={index}
                                  className={data.name}
                                  onClick={() =>
                                    this.handleClickEvent(data.value)
                                  }
                                >
                                  {data.name}
                                  {/* </Link> */}
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

/**
 *
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  productDetail: state.product.product,
  addToCartDetail: state.product.addcartdata,
  getCartDetail: state.product.getcartdetails,
  searchDetail: state.product.searchdata,
  searchableProduct: state.product.searchproduct,
  updateCart: state.product.updatecart,
  deleteCart: state.product.deletecart,
  ratingData: state.product.ratingdata,
});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  /** Get Products data */
  getProductsData: (data: any) =>
    dispatch(productService.getProductsData(data)),

  /** Add to cart */
  addToCart: (data: any) => dispatch(productService.addToCart(data)),

  /** Update Cart */
  updateToCart: (data: any, id: any) =>
    dispatch(productService.updateToCart(data, id)),

  /** Get Cart Data */
  getcartData: (data: any) => dispatch(productService.getcartData(data)),

  /** Get Search Product */
  getSearchProduct: (data: any) =>
    dispatch(productService.getSearchProduct(data)),

  /** Get Product with searching */
  getProductDataWithSearching: (data: any) =>
    dispatch(productService.getProductDataWithSearching(data)),

  /** Remove Product form cart */
  removeProductFromCart: (data: any) =>
    dispatch(productService.removeProductFromCart(data)),

  /** Remove Product form cart */
  getRatingCount: (data: any) => dispatch(productService.getRatingCount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreItem);
