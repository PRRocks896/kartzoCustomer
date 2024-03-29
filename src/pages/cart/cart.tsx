import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  cart,
  findstore,
  header,
  trackorder,
} from "../../pages/components/helper/images";
import { productService } from "../../redux/actions";
import constant from "../constant/constant";
import { alertMessage, getAppName } from "../utils";
import "./cart.css";
import { connect } from "react-redux";
import {
  addCartRequest,
  getCartListRequest,
  removeCartItemRequest,
} from "../../modelController";
import { cartStateRequest } from "../../modelController/c artModel";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class Cart extends React.Component<{
  show: boolean;
  history: any;
  getcartData: any;
  updateToCart: any;
  removeProductFromCart: any;
}> {
  /** Cart State */
  cartState: cartStateRequest = constant.cartPage.state;
  state = {
    activeLink: this.cartState.activeLink,
    isShowCard: this.cartState.isShowCard,
    cartarray: this.cartState.cartarray,
    isOpen: this.cartState.isOpen,
    qtydisable:false,
    isLoading:true
  };
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.goBack = this.goBack.bind(this);
    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.open = this.open.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.cart + getAppName();
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", true);

    if (localStorage.getItem("token")) {
      this.getCartData();
    }
  }

  /**
   *
   * @param searchText : search value
   * @param page : page number
   * @param size : per page display
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
   * @param prevProps : get updated props
   */

  componentDidUpdate(prevProps:any) {
    const cart:any = this.props;
    if (prevProps.getCartDetail !== cart.getCartDetail) {
      this.getCartAllProductData(cart.getCartDetail);
    }
    if (prevProps.updateCart !== cart.updateCart) {
      this.updateCart(cart.updateCart);
    }
    if (prevProps.deleteCart !== cart.deleteCart) {
      this.deleteCart(cart.deleteCart);
    }
  }

  updateCart(data:any) {
    if(data.status === 200) {
      this.getCartData();
    }
  }

  deleteCart(data:any) {
    if(data.status === 200) {
      this.getCartData();
    }
  }

  /**
   *
   * @param data : get all cart data
   */
  getCartAllProductData(data: any) {
    console.log("data", data);
    this.setState({
      isLoading:false,
      qtydisable:this.state.qtydisable = false,
      cartarray: (this.state.cartarray =
        data.data && data.data.length > 0 ? data.data : null),
    });
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      this.setState({
        cartarray: (this.state.cartarray = data.data),
      });
      localStorage.setItem("cartcount", this.state.cartarray.length);
    } else {
      EventEmitter.dispatch("count", 0);
      localStorage.setItem("cartcount", "0");
    }
  }

  /**
   *
   * @param id : active id
   */
  handleClick = (id: any) => {
    this.setState({ activeLink: id });
  };

  /** Redirect to previous page */
  goBack() {
    this.props.history.goBack();
  }

  /**
   *
   * @param event : update state value onchange event
   * @param index : index  number
   */
  onChangeEvent(event: any, index: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /**
   *
   * @param data : cart item quantity increment
   */
 async incrementQty(data: any) {
  this.setState({
    qtydisable:true
  })
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

    // setTimeout(() => {
    //   this.getCartData();
    // }, 200);
    // let tempCart = this.state.cartarray;
    // tempCart[index].qty = parseInt(tempCart[index].qty) + 1;
    // this.setState({ cartarray: tempCart });
  }

  /**
   *
   * @param data : cart item quantity decrement
   */
  async decrementQty(data: any) {
    this.setState({
      qtydisable:true
    })
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
    // setTimeout(() => {
    //   this.getCartData();
    // }, 200);
  }

  /** Open block */
  open() {
    this.setState({
      isOpen: (this.state.isOpen = true),
    });
  }

  /**
   *
   * @param id : cart item id
   * @param text : message cart
   * @param btext : button cart message
   */
  async removeItemFromCart(id: any, text: string, btext: string) {
    if (await alertMessage(text, btext)) {
      let idArray = [];
      idArray.push(id);
      const obj: removeCartItemRequest = {
        moduleName: "OrderCart",
        id: idArray,
      };
      await this.props.removeProductFromCart(obj);
      // setTimeout(() => {
      //   this.getCartData();
      // }, 200);
    }
  }

  /** Render DOM */
  render() {
    return (
      <>
        <header
          className="header"
          style={{ position: "fixed", width: "100%", zIndex: 12 }}
        >
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                <Link to="/">
                  <img src={header.logo} alt="logo" />
                </Link>
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
                {!localStorage.getItem("token") ? (
                  <div className="right-content">
                    <Link className="sign-tt" to="/signin">
                      Sign in
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </header>
        <section className="place-order ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-flex">
                  <div className="left-box">
                    <div className="mycard-item">
                      <h1 className="my-cart-item">
                        My Cart ({localStorage.getItem("cartcount")})
                      </h1>
                    </div>
                    {
                      this.state.isLoading === false ? (
                        this.state.cartarray
                          ? (this.state.cartarray.length > 0 &&
                            this.state.cartarray.map(
                              (cartdata: any, index: any) => (
                                <div className="card-list" key={index} style={{
                                  pointerEvents: this.state.qtydisable === true ? "none" : "visible",
                                }}>
                                  <div className="card-item-1">
                                    <div className="content-box1">
                                      <div className="img-box">
                                        {cartdata.productImages &&
                                        cartdata.productImages[0].imagePath ? (
                                          <img
                                            src={
                                              constant.filemerchantpath +
                                              cartdata.productImages[0].imagePath
                                            }
                                            alt=""
                                          />
                                        ) : (
                                          <img src={findstore.store} alt="" />
                                        )}
                                      </div>
                                      <div className="right-content">
                                        <div className="list-tt">
                                          {cartdata.productName}{" "}
                                        </div>
                                        <div className="dicrip-1">
                                          Number of quantity - {cartdata.quantity}
                                        </div>
                                        {/* <div className="saller-nm">
                                          Seller: DIGIONICS
                                        </div> */}
                                        <div className="price">
                                          <i className="fa fa-rupee"></i>
                                          {cartdata.sellingPrice}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="btm-content">
                                      <div className="number">
                                        <span
                                          className="minus"
                                          onClick={() =>
                                            this.decrementQty(cartdata)
                                          }
                                        >
                                          -
                                        </span>
                                        <input
                                          type="text"
                                          name="qty"
                                          value={
                                            cartdata.quantity
                                              ? cartdata.quantity
                                              : ""
                                          }
                                          onChange={(e: any) =>
                                            this.onChangeEvent(e, index)
                                          }
                                          disabled={this.state.qtydisable === true ? true : false}
                                        />
                                        <span
                                          className="plus"
                                          onClick={() =>
                                            this.incrementQty(cartdata)
                                          }
                                        >
                                          +
                                        </span>
                                      </div>
                                      <button>Save for later</button>
                                      <button
                                        onClick={() =>
                                          this.removeItemFromCart(
                                            cartdata.orderCartID,
                                            "You should be Remove product from cart",
                                            "Yes, Remove it"
                                          )
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )
                            )
                   ) : (
                       ''
                      )
                      ) : (
                        [1, 2, 3, 4].map((data: any, index: number) => (
                          <div key={index}>
                             <SkeletonTheme color="#202020" highlightColor="#444">
                              <p>
                                <Skeleton count={3} />
                              </p>
                            </SkeletonTheme>
                          </div>
                        ))
                      )}
                      
                    
                   
                    {localStorage.getItem("token") ? (
                      <div className="place-btn">
                        <Link to="/placeorder">
                          <button>Place Order</button>
                        </Link>
                      </div>
                    ) : (
                      <div className="place-btn">
                        <Link to="/signin">
                          <button>Sign In</button>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="right-box">
                    <div className="pay-box">
                      <div className="your-card">
                        <h3>Invoice</h3>
                        <hr />
                        <span className="bt-tt-signin">
                          • Delivery charges may change after signing in{" "}
                        </span>
                      </div>
                      <div className="invoice-box">
                        <div className="tilte">Item total price</div>
                        <div className="price">
                          <i className="fa fa-rupee"></i>{" "}
                          {this.state.cartarray
                            ? this.state.cartarray.reduce(
                                (sum: number, i: any) =>
                                  (sum += i.sellingPrice),
                                0
                              )
                            : 0}
                        </div>
                      </div>
                      <div className="invoice-box">
                        <div className="tilte">Item total</div>
                        <div className="price free">Free</div>
                      </div>
                      <div className="invoice-box total-pay ">
                        <div className="tilte">To pay</div>
                        <div className="price">
                          <i className="fa fa-rupee"></i>{" "}
                          {this.state.cartarray
                            ? this.state.cartarray.reduce(
                                (sum: number, i: any) =>
                                  (sum += i.sellingPrice),
                                0
                              )
                            : 0}
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

/**
 *
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  addToCartDetail: state.product.addcartdata,
  getCartDetail: state.product.getcartdetails,
  updateCart: state.product.updatecart,
  deleteCart:state.product.deletecart
});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  /** Update Cart */
  updateToCart: (data: any, id: any) =>
    dispatch(productService.updateToCart(data, id)),

  /** Get Cart */
  getcartData: (data: any) => dispatch(productService.getcartData(data)),

  /** Remove Product */
  removeProductFromCart: (data: any) =>
    dispatch(productService.removeProductFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
