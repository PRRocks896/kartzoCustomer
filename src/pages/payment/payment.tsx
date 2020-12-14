import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import constant from "../constant/constant";
import { scrollToTop } from "../utils";
import "./payment.css";

class Payment extends React.Component {
  state = {
    orderdata: "",
  };

  /** Constructor */
  constructor(props: any) {
    super(props);
  }

  /** Page Render Call */
  componentDidMount() {
    EventEmitter.dispatch("isShow", false);
    EventEmitter.dispatch("isShowFooter", true);
    scrollToTop();
    // console.log("payment", this.props);
    const order: any = this.props;
    if (
      order &&
      order.location &&
      order.location.state &&
      order.location.state.data
    ) {
      this.setState({
        orderdata: (this.state.orderdata = order.location.state.data),
      });
    }
  }

  /** Render DOM */
  render() {
    const maindata: any = this.state.orderdata;
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    return (
      <>
        <section className="order-confirm">
          <div className="container-fluid">
            <div className="bg-box">
              <div className="order-content">
                <span className="user-name">
                  hey <b>{user.firstName ? user.firstName : "D"}</b>
                </span>
                <h3 className="order-confm">
                  {" "}
                  <svg
                    height="434pt"
                    viewBox="0 -65 434.67733 434"
                    width="434pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m152.003906 304.34375c-5.460937 0-10.921875-2.089844-15.082031-6.25l-130.664063-130.667969c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339844-8.339844 21.820313-8.339844 30.164063 0l115.582031 115.582031 246.253906-246.25c8.339844-8.339844 21.820313-8.339844 30.164063 0 8.339844 8.34375 8.339844 21.824219 0 30.167969l-261.332031 261.332031c-4.160156 4.160156-9.625 6.25-15.085938 6.25zm0 0" />
                  </svg>{" "}
                  You order is confirmed{" "}
                </h3>
                <p>
                  Thanks for shopping Your order{" "}
                  {/* <a href="#">{maindata.orderDetails[0].productName}</a> and
                  <a href="#">2 more items</a> hasn't shipped yet, but we'll
                  send am email when it does. */}
                </p>
              </div>
              <div className="order-content2">
                <div className="order-tt">
                  <span className="order-id">
                    Order: <a href="">{maindata.razorpayOrderID}</a>
                  </span>
                  <Link to = "/profile">
                  <button className="manage-order-btn">
                    View or Manage Order
                  </button>
                  </Link>
                </div>
                <div className="order-tt2">
                  <div className="text-box1">
                    <span className="text1">Sub-total</span>
                    <span className="text1"><i className="fa fa-rupee"></i> {maindata.finalAmount}</span>
                  </div>
                  <div className="text-box1">
                    <span className="text1">+ Discount</span>
                    <span className="text1"><i className="fa fa-rupee"></i> {maindata.discountAmount}</span>
                  </div>
                  <div className="text-box1 text-box2">
                    <span className="text1">Total</span>
                    <span className="text1"><i className="fa fa-rupee"></i> {maindata.totalAmount}</span>
                  </div>
                </div>
              </div>

              <div className="order-content3">
                {maindata.orderDetails
                  ? maindata.orderDetails.map((data: any, index: number) => (
                      <div className="product-1" key={index}>
                        <div className="img-product">
                          <img
                            src={
                              constant.filemerchantpath +
                              data.productImages[0].imagePath
                            }
                            alt=""
                          />
                        </div>
                        <div className="content-product">
                          <div className="left-cotent">
                            <h6 className="product-tt">{data.productName}</h6>
                            <span className="sold-text">Sold by:</span>
                            <span className="sold-text ml-2" style={{color:'#007bff'}}>{data.merchantName}</span>
                            {/* <a href="#" className=" link-tt sold-product-nm">
                              
                            </a> */}
                          </div>
                          <div className="right-content">
                            <span className="price-box">
                            <i className="fa fa-rupee"></i> {data.sellingPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Payment;
