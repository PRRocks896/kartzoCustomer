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
import { addCartRequest, getCartListRequest, removeCartItemRequest } from "../../modelController";
import { cartStateRequest } from "../../modelController/c artModel";

class Cart extends React.Component<{
  show: boolean;
  history: any;
  getcartData: any;
  updateToCart: any;
  removeProductFromCart: any;
}> {
  /** Cart State */
  cartState : cartStateRequest = constant.cartPage.state;
  state = {
    activeLink: this.cartState.activeLink,
    isShowCard: this.cartState.isShowCard,
    cartarray: this.cartState.cartarray,
    isOpen: this.cartState.isOpen,
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
    const obj : getCartListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId:user.userID
    };
    this.props.getcartData(obj);
  }

  /**
   * 
   * @param nextProps : get updated props
   */
  componentWillReceiveProps(nextProps: any, newState: any) {
    // console.log("props", nextProps);
    if (nextProps.getCartDetail) {
      this.getCartAllProductData(nextProps.getCartDetail);
    }
  }

  /**
   * 
   * @param data : get all cart data
   */
  getCartAllProductData(data: any) {
    this.setState({
      cartarray: this.state.cartarray = data.data,
    });
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      this.setState({
        cartarray: this.state.cartarray = data.data,
      });
      localStorage.setItem('cartcount',this.state.cartarray.length);
    } else {
      EventEmitter.dispatch('count', 0);
      localStorage.setItem('cartcount','0');
      localStorage.removeItem('merchantID');
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
  incrementQty(data: any) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const mid : any = localStorage.getItem('merchantID');
    const obj : addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity + 1,
      discountApplied: data.discountApplied,
      merchantID:parseInt(mid)
    };
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
    // let tempCart = this.state.cartarray;
    // tempCart[index].qty = parseInt(tempCart[index].qty) + 1;
    // this.setState({ cartarray: tempCart });
  }

  /**
   * 
   * @param data : cart item quantity decrement
   */
  decrementQty(data: any) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const mid : any = localStorage.getItem('merchantID');
    const obj : addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity - 1,
      discountApplied: data.discountApplied,
      merchantID:parseInt(mid)
    };
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
  }

  /** Open block */
  open() {
    this.setState({
      isOpen: this.state.isOpen = true,
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
      const obj : removeCartItemRequest = {
        moduleName: "OrderCart",
        id: idArray,
      };
      this.props.removeProductFromCart(obj);
      setTimeout(() => {
        this.getCartData();
      }, 200);
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
                    {this.state.cartarray
                      ? this.state.cartarray.length > 0 &&
                        this.state.cartarray.map(
                          (cartdata: any, index: any) => (
                            <div className="card-list" key={index}>
                              <div className="card-item-1">
                                <div className="content-box1">
                                  <div className="img-box">
                                    {
                                      cartdata.productImages && cartdata.productImages[0].imagePath ? (
                                        <img src={constant.filemerchantpath + cartdata.productImages[0].imagePath} alt="" />
                                      ) : (
                                        <img src={findstore.store} alt="" />
                                      )
                                    }
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
                                      R{cartdata.sellingPrice}
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
                      : ""}
                    {
                      localStorage.getItem('token') ? (
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
                      )
                    }
                   
                  </div>

                  <div className="right-box">
                    {/* <div className="pay-box">
                      <div className="your-card">
                        <h3>
                          Your Cart ({localStorage.getItem("cartcount")} Items)
                        </h3>
                        <hr />
                      </div>
                      <div className="market-name">
                        From <a href="#">Bhatia Super Market</a>
                      </div>
                      {this.state.cartarray
                        ? this.state.cartarray.length > 0 &&
                          this.state.cartarray.map(
                            (cartdata: any, index: number) => (
                              <div className="flex-box" key={index}>
                                <div className="bdr-roud"></div>
                                <div className="item-title">
                                  <h4>{cartdata.productName} </h4>
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
                                    value={
                                      cartdata.quantity ? cartdata.quantity : ""
                                    }
                                    onChange={(e: any) =>
                                      this.onChangeEvent(e, index)
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
                                  R{cartdata.sellingPrice}
                                </span>
                              </div>
                            )
                          )
                        : ""}
                    </div> */}
                    {/* <div className="pay-box">
                      <div className="flex-box flex-box2">
                        <img src={findstore.store} alt="" />
                        <textarea value="Any instructions for the delivery partner?" onChange={this.handleChange}>
                          Any instructions for the delivery partner?
                        </textarea>
                      </div>
                    </div> */}
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
                          R{" "}
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
                          R{" "}
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

const mapStateToProps = (state: any) => ({
  addToCartDetail: state.product.addcartdata,
  getCartDetail: state.product.getcartdetails,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateToCart: (data: any, id: any) =>
    dispatch(productService.updateToCart(data, id)),
  getcartData: (data: any) => dispatch(productService.getcartData(data)),
  removeProductFromCart: (data: any) =>
    dispatch(productService.removeProductFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
