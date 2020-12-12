import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  getAddressListRequest,
  getCartListRequest,
  placeorderStateRequest,
  profileStateRequest,
  removeCartItemRequest,
} from "../../modelController";
import { profile } from "../../pages/components/helper/images";
import {
  placeOrderService,
  orderService,
  loginService,
  productService,
} from "../../redux/index";
import constant from "../constant/constant";
import { getAppName, alertMessage, scrollToTop } from "../utils";
import "./profile.css";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import moment from "moment";

class Profile extends React.Component<{
  show: boolean;
  history: any;
  getAddressList: any;
  updateAddress: any;
  deleteAddress: any;
  getOrderList: any;
  updateProfileData: any;
  getProfile: any;
  getcartData: any;
  removeProductFromCart: any;
  reOrder: any;
  cancelOrderData: any;
}> {
  /** Profile Page State */
  profileState: profileStateRequest = constant.profilePage.state;
  placeOrderState: placeorderStateRequest = constant.placeorderPage.state;
  state = {
    mobile: this.profileState.mobile,
    addressarray: this.profileState.addressarray,
    show: this.profileState.show,
    city: this.placeOrderState.city,
    cityerror: this.placeOrderState.cityerror,
    area: this.placeOrderState.area,
    country: this.placeOrderState.country,
    countryerror: this.placeOrderState.countryerror,
    state: this.placeOrderState.state,
    stateerror: this.placeOrderState.stateerror,
    pincode: this.placeOrderState.pincode,
    pincodeerror: this.placeOrderState.pincodeerror,
    address: this.placeOrderState.address,
    addresserror: this.placeOrderState.addresserror,
    name: this.placeOrderState.name,
    nameerror: this.placeOrderState.nameerror,
    addresstypeerror: this.placeOrderState.addresstypeerror,
    lat: this.placeOrderState.lat,
    long: this.placeOrderState.long,
    mobilephone: this.profileState.mobilephone,
    mobilephoneerror: this.profileState.mobilephoneerror,
    landmarkerror: this.placeOrderState.landmarkerror,
    landmark: this.placeOrderState.landmark,
    addressid: this.profileState.addressid,
    addresstype: this.profileState.addresstype,
    orderdata: this.profileState.orderdata,
    workdisabled: this.profileState.workdisabled,
    otherdisabled: this.profileState.otherdisabled,
    homedisabled: this.profileState.homedisabled,
    updatemodel: this.profileState.updatemodel,
    update: this.profileState.update,
    firstname: this.profileState.firstname,
    firstnameerror: this.profileState.firstnameerror,
    lastname: this.profileState.lastname,
    lastnameerror: this.profileState.lastnameerror,
    useremail: this.profileState.useremail,
    useremailerror: this.profileState.useremailerror,
    file: this.profileState.file,
    filetrue: this.profileState.filetrue,
    selectedFile: this.profileState.selectedFile,
    selectedFileerror: this.profileState.selectedFileerror,
    disable: this.profileState.disable,
    showOrder: false,
    ordernumber: 0,
    addressName: "",
    fulladdress: "",
    merchantname: "",
    orderdate: "",
    productdetail: [],
    totalprice: "",
    cartarray: [],
    clearModel: false,
    reorderdata: "",
    isShowHelp: false,
    updateOrder: "",
    merchantaddress:""
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.logout = this.logout.bind(this);
    this.modelOpen = this.modelOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.editAddress = this.editAddress.bind(this);
    this.deleteAddressData = this.deleteAddressData.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.updateModel = this.updateModel.bind(this);
    this.handleupdateModel = this.handleupdateModel.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.removeIcon = this.removeIcon.bind(this);
    this.handelCloseOrderModle = this.handelCloseOrderModle.bind(this);
    this.openOrderModel = this.openOrderModel.bind(this);
    this.reOrder = this.reOrder.bind(this);
    this.clearOldCart = this.clearOldCart.bind(this);
    this.handleClearModel = this.handleClearModel.bind(this);
    this.helpOrder = this.helpOrder.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    console.log("clearModel", this.state.clearModel);
    document.title = constant.profile + getAppName();
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    this.setState({
      mobile: user.phone,
      mobilephone: user.phone,
    });
    EventEmitter.dispatch("isShow", false);
    EventEmitter.dispatch("isShowFooter", false);
    this.getAddressDetails();
    this.getOrderList();
    this.getProfile();
    scrollToTop();
  }

  /**
   *
   * @param searchText : search purpose
   * @param page : page number
   * @param size : per page
   */
  getAddressDetails(
    searchText: string = "",
    page: number = 1,
    size: number = 20
  ) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getAddressListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    this.props.getAddressList(obj);
  }

  getProfile() {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);

    const obj = {
      id: user.userID,
    };

    this.props.getProfile(obj);
  }

  /**
   *
   * @param searchText : search value
   * @param page : page number
   * @param size : per page
   */
  getOrderList(searchText: string = "", page: number = 1, size: number = 20) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getAddressListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    this.props.getOrderList(obj);
  }

  /**
   *
   * @param nextProps : updated props
   */
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.updateProfileData) {
      this.setState({
        disable: false,
      });
      // this.updateProfileData(nextProps.updateProfileData);
    } else {
      this.setState({
        disable: false,
      });
    }
  }

  componentDidUpdate(prevProps:any) {
    const profile:any = this.props;
    if (prevProps.addressDetails !== profile.addressDetails) {
      this.setState({
        show: (this.state.show = false),
      });
      this.getAddressDetailsData(profile.addressDetails);
    }
    if (prevProps.orderDetails !== profile.orderDetails) {
      this.getOrderDetails(profile.orderDetails);
    }
    if (prevProps.profileData !== profile.profileData) {
      this.getProfileData(profile.profileData);
    }
    if (prevProps.getCartDetail !== profile.getCartDetail) {
      this.getCartAllProductData(profile.getCartDetail);
    }
    if (prevProps.updateaddress !== profile.updateaddress) {
      this.updateAddress(profile.updateaddress);
    }
    if (prevProps.deletedata !== profile.deletedata) {
      this.deleteAddress(profile.deletedata);
    }
    if (prevProps.updateprofiledata !== profile.updateprofiledata) {
      this.updateProfiledata(profile.updateprofiledata);
    }
    if (prevProps.refundData !== profile.refundData) {
      this.refundData(profile.refundData);
    }
    
  }

  refundData(data:any) {
    console.log("data",data);
    if(data.status === 200) {
      this.getOrderList();
    }
  }

  updateProfiledata(data:any) {
    if(data.status === 200) {
      this.getProfile();
    }
  }

  deleteAddress(data:any) {
    if(data.status === 200) {
     
      this.getAddressDetails();
    }
  }

  updateAddress(data:any) {
    if(data.status === 200) {
    
      this.getAddressDetails();
    }
  }

  /**
   *
   * @param data : get all cart data
   */
  getCartAllProductData(data: any) {
    console.log("enter");
    if (data.data) {
      this.setState({
        cartarray: (this.state.cartarray = data.data),
      });
    }
    // console.log("cart",this.state.cartarray);

    // if(this.state.cartarray && this.state.cartarray.length > 0) {

    // } else {

    // }
  }

  /**
   *  @param data : address success response
   */
  getAddressDetailsData(data: any) {
    this.setState({
      addressarray: (this.state.addressarray = data.data),
    });
  }

  /**
   * 
   * @param data : get profile data
   */
  getProfileData(data: any) {
    this.setState({
      update: true,
      updatemodel: false,
      firstname: (this.state.firstname = data.firstName),
      lastname: (this.state.lastname = data.lastName),
      useremail: (this.state.useremail = data.email),
      file: (this.state.file = data.photoPath),
    });
  }

  /**
   * 
   * @param data : update profile data
   */
  updateProfileData(data: any) {
    this.setState({
      update: true,
      disable: false,
      updatemodel: false,
      firstname: (this.state.firstname = data.firstName),
      lastname: (this.state.lastname = data.lastName),
      useremail: (this.state.useremail = data.email),
      file: (this.state.file = data.photoPath),
    });
  }

  /**
   *
   * @param data : get order listing data
   */
  getOrderDetails(data: any) {
    console.log("data", data);
    this.setState({
      orderdata: (this.state.orderdata = data.data ? data.data : null),
    });
  }

  /** logout from website */
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("cartcount");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("merchantID");
    EventEmitter.dispatch("count", 0);
    this.props.history.push("/");
  }

  /**
   *
   * @param data : open model and get address form data
   */
  modelOpen(data: any) {
    if (data.addressType === "Home") {
      this.setState({
        workdisabled: true,
        otherdisabled: true,
      });
    } else if (data.addressType === "Work") {
      this.setState({
        homedisabled: true,
        otherdisabled: true,
      });
    } else if (data.addressType === "Other") {
      this.setState({
        homedisabled: true,
        workdisabled: true,
      });
    }
    this.setState({
      show: !this.state.show,
      addressid: data.addressID,
      name: data.name,
      mobilephone: data.mobilephone,
      pincode: data.pincode,
      landmark: data.landmark,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      addresstype:
        data.addressType === "Home"
          ? "1"
          : data.addressType === "Work"
          ? "2"
          : data.addressType === "Other"
          ? "3"
          : "",
    });
  }

  /** Close model */
  handleClose() {
    this.setState({ show: !this.state.show });
  }

  /** Get Current Location */
  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      this.getAddress(this.state.lat, this.state.long);
    });
  }

  /**
   *
   * @param latitude : get current location latitiude
   * @param longitude : get current location longitude
   */
  async getAddress(latitude: any, longitude: any) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      var request: any = new XMLHttpRequest();

      var method = "GET";
      var url =
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&sensor=true&key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I";
      var async = true;

      request.open(method, url, async);
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var address = data.results[0];
            // console.log("address", address);
            if (address && address.address_components.length > 0) {
              _this.setState({
                area: address.address_components[1].long_name
                  .toString()
                  .toLowerCase(),
                city: address.address_components[3].long_name
                  .toString()
                  .toLowerCase(),
                state: address.address_components[4].long_name
                  .toString()
                  .toLowerCase(),
                country: address.address_components[5].long_name
                  .toString()
                  .toLowerCase(),
                pincode: address.address_components[6].long_name,
                address: address.formatted_address,
              });
            }
            resolve(address);
          } else {
            reject(request.status);
          }
        }
      };
      request.send();
    });
  }

  /** Check Form Data Valid || InValid */
  validate() {
    let nameerror = "";
    let mobilephoneerror = "";
    let addresserror = "";
    let cityerror = "";
    let stateerror = "";
    let countryerror = "";
    let pincodeerror = "";
    let landmarkerror = "";

    if (!this.state.name) {
      nameerror = "please enter name";
    }

    if (!this.state.address) {
      addresserror = "please enter address";
    }

    if (!this.state.city) {
      cityerror = "please enter city";
    }

    if (!this.state.state) {
      stateerror = "please enter state";
    }

    if (!this.state.country) {
      countryerror = "please enter country";
    }

    var regex = /^\d{6}$/;
    if (!this.state.pincode) {
      pincodeerror = "please enter pincode";
    } else if (!regex.test(this.state.pincode)) {
      pincodeerror = "please enter valid pincode";
    }

    if (!this.state.landmark) {
      landmarkerror = "please enter landmark";
    }

    const mobileRegex: any = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!this.state.mobilephone) {
      mobilephoneerror = "please enter mobile number";
    } else if (!mobileRegex.test(this.state.mobilephone)) {
      mobilephoneerror = "please enter valid mobile number";
    }

    if (
      nameerror ||
      mobilephoneerror ||
      addresserror ||
      cityerror ||
      stateerror ||
      countryerror ||
      pincodeerror ||
      landmarkerror
    ) {
      this.setState({
        nameerror,
        mobilephoneerror,
        addresserror,
        cityerror,
        stateerror,
        countryerror,
        pincodeerror,
        landmarkerror,
      });
      return false;
    }
    return true;
  }

  /** Edit address */
  async editAddress() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        nameerror: "",
        mobilephoneerror: "",
        addresserror: "",
        cityerror: "",
        stateerror: "",
        countryerror: "",
        pincodeerror: "",
        landmarkerror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      const obj = {
        addressID: this.state.addressid,
        userID: user.userID,
        name: this.state.name,
        mobile: this.state.mobilephone,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        pincode: parseInt(this.state.pincode),
        landmark: this.state.landmark,
        addressType:
          this.state.addresstype === "1"
            ? "1"
            : this.state.addresstype === "2"
            ? "2"
            : this.state.addresstype === "3"
            ? "3"
            : "",
        isActive: true,
      };
      await this.props.updateAddress(obj);
    }
  }

  /**
   *
   * @param id : delete address id
   * @param text : message text
   * @param btext : button message text
   */
  async deleteAddressData(id: any, text: any, btext: any) {
    if (await alertMessage(text, btext)) {
      let deleteArray = [];
      deleteArray.push(id);
      const obj = {
        moduleName: "Address",
        id: deleteArray,
      };
      await this.props.deleteAddress(obj);
    }
  }

  /**
   *
   * @param event : onChange store value and update the state
   */
  addressChange(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /**
   *
   * @param e : change address type (work to home) || (home to work)
   */
  changeAddress(e: any) {
    this.setState({
      addresstype: (this.state.addresstype = e.target.id),
    });
  }

  /** Update Model */
  updateModel() {
    this.setState({
      updatemodel: !this.state.updatemodel,
    });
  }

  /** Update Model close */
  handleupdateModel() {
    this.setState({
      updatemodel: !this.state.updatemodel,
    });
  }

  /** Check Form Data Valid || InValid */
  validateProfile() {
    let firstnameerror = "";
    let lastnameerror = "";
    let useremailerror = "";

    if (!this.state.firstname) {
      firstnameerror = "please enter first name";
    }

    if (!this.state.lastname) {
      lastnameerror = "please enter last name";
    }

    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.useremail) {
      useremailerror = "please enter email";
    } else if (!reg.test(this.state.useremail)) {
      useremailerror = "please enter valid email";
    }

    if (firstnameerror || useremailerror || lastnameerror) {
      this.setState({
        firstnameerror,
        useremailerror,
        lastnameerror,
      });
      return false;
    }
    return true;
  }

  /** Update Profile */
  async updateProfile() {
    this.setState({
      disable: (this.state.disable = true),
    });
    const isValid = this.validateProfile();
    if (isValid) {
      this.setState({
        firstnameerror: "",
        useremailerror: "",
        lastnameerror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);

      let formData = new FormData();

      formData.append("Id", user.userID);
      formData.append("FirstName", this.state.firstname);
      formData.append("LastName", this.state.lastname);
      formData.append("Email", this.state.useremail);
      formData.append(
        "files",
        this.state.selectedFile ? this.state.selectedFile[0] : ""
      );
      formData.append("UserId", "0");
      await this.props.updateProfileData(formData);

      // setTimeout(() => {
      //   this.getProfile();
      // }, 300);
    } else {
      this.setState({
        disable: false,
      });
    }
  }

  /**
   *
   * @param event : profile photo upload
   */
  onChangeHandler(event: any) {
    if (this.state.update === true) {
      this.setState({
        update: false,
        selectedFile: event.target.files,
      });
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = (ev) => {
        this.setState({
          file: reader.result,
        });
      };
    } else {
      this.setState({
        selectedFile: event.target.files,
      });
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = (ev) => {
        this.setState({
          file: reader.result,
        });
      };
    }
  }

  /** Remove icon */
  removeIcon() {
    this.setState({
      file: (this.state.file = ""),
      selectedFile: (this.state.selectedFile = ""),
    });
  }

  /**
   * 
   * @param data : open order listing model
   */
  openOrderModel(data: any) {
    this.setState({
      ordernumber: data.orderNo,
      addressName: data.addressDetail[0].addressType,
      fulladdress: data.addressDetail[0].address,
      merchantname: data.orderDetails[0].merchantName,
      orderdate: data.orderDetails[0].created,
      productdetail: data.orderDetails,
      totalprice: data.totalAmount,
      showOrder: !this.state.showOrder,
      merchantaddress: data.merchantAddress
    });
  }

  /** Close order model */
  handelCloseOrderModle() {
    this.setState({
      showOrder: !this.state.showOrder,
    });
  }

  /** clear model */
  handleClearModel() {
    this.setState({
      clearModel: (this.state.clearModel = false),
    });
  }

  /** Clear old cart */
  clearOldCart() {
    let cartdeletearray = [];
    let oldarray: any = this.state.cartarray;
    for (var i = 0; i < oldarray.length; i++) {
      cartdeletearray.push(oldarray[i].orderCartID);
    }
    const obj: removeCartItemRequest = {
      moduleName: "OrderCart",
      id: cartdeletearray,
    };
    this.props.removeProductFromCart(obj);

    setTimeout(() => {
      localStorage.removeItem("merchantID");
      this.setState({
        clearModel: (this.state.clearModel = false),
      });
      this.addToCart(this.state.reorderdata);
      //   this.props.history.push({
      //     pathname: "/cart",
      //     state: { order: this.state.reorderdata }
      //  })
    }, 50);
  }

  /**
   * 
   * @param cart : add to cart functionality
   */
  addToCart(cart: any) {
    console.log("cart", cart);
    let reorder: any = [];

    if (cart.orderDetails) {
      cart.orderDetails.map((data: any, index: number) => {
        reorder.push({
          orderCartID: data.orderCartID,
          userID: cart.userID,
          productID: data.productID,
          merchantID: cart.merchantID,
          quantity: data.quantity,
          sellingPrice: data.sellingPrice,
          discountApplied: data.discountApplied,
        });
      });
    }
    // console.log("reorder",reorder);
    const obj = {
      orderCartDetail: reorder ? reorder : null,
    };
    this.props.reOrder(obj);
    setTimeout(() => {
      this.setState({
        clearModel: (this.state.clearModel = false),
      });
      this.props.history.push("/cart");
    }, 100);
  }

  /** clear model */
  clearModel() {
    return (
      <Modal
        className="modal-dialog-centered d-ct"
        show={this.state.clearModel}
        onHide={this.handleClearModel}
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
              <button className="cencel-btn" onClick={this.handleClearModel}>
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
    );
  }

  /**
   * 
   * @param data : repet order functionality 
   */
  reOrder(data: any) {
    this.setState({
      reorderdata: data,
    });
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getCartListRequest = {
      searchText: "",
      isActive: true,
      page: 1,
      size: 10,
      userId: user.userID,
    };
    this.props.getcartData(obj);
    setTimeout(() => {
      if (this.state.cartarray && this.state.cartarray.length > 0) {
        this.setState({
          clearModel: (this.state.clearModel = true),
        });
      } else {
      }
    }, 150);
  }

  /**
   * 
   * @param data : click on help buttop open help features
   */
  helpOrder(data: any) {
    console.log("data", data);
    this.setState({
      isShowHelp: true,
      updateOrder: data,
    });
  }

  cancelOrder(data:any) {
    const obj = {
      orderid:data.orderID,
      paymentid:data.razorpayPaymentID
    }

    this.props.cancelOrderData(obj);
  }

  /** Render DOM */
  render() {
    var reorderhelp: any = this.state.updateOrder ? this.state.updateOrder : "";
    return (
      <>
        <section className="profile-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="dix-flex">
                  <div className="profile-name">
                    {this.state.update === true ? (
                      this.state.file !== "" ? (
                        <img
                          src={constant.fileuserpath + this.state.file}
                          alt=""
                        />
                      ) : (
                        <img src={profile.profilepic} alt="" />
                      )
                    ) : this.state.file !== "" ? (
                      <img src={this.state.file} alt="" />
                    ) : (
                      <img src={profile.profilepic} alt="" />
                    )}

                    <div className="pro-tt1">
                      <div className="name">+91-{this.state.mobile} </div>
                      {this.state.firstname &&
                      this.state.lastname &&
                      this.state.useremail ? (
                        <>
                          <span className="mobl-no">
                            {this.state.firstname ? this.state.firstname : ""}{" "}
                            {this.state.lastname ? this.state.lastname : ""}
                          </span>
                          <span className="mobl-no"> | </span>
                          <span className="mobl-no">
                            {this.state.useremail ? this.state.useremail : ""}
                          </span>
                          <span
                            style={{ marginLeft: "12px" }}
                            onClick={this.updateModel}
                          >
                            <i className="fas fa-edit"></i>
                          </span>
                        </>
                      ) : (
                        <span
                          onClick={this.updateModel}
                          style={{ cursor: "pointer", color: "#5d75fb" }}
                        >
                          Update-Profile
                        </span>
                      )}
                    </div>
                    <Modal
                      className="modal-dialog-centered d-ct"
                      show={this.state.updatemodel}
                      onHide={this.handleupdateModel}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Update-Profile</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <>
                          <div className="file-attach">
                            <span className="btn-file">
                              <input
                                id="file-input"
                                type="file"
                                className="form-control"
                                name="file"
                                onChange={this.onChangeHandler.bind(this)}
                              />
                              <div className="bg-img">
                                {this.state.update === true ? (
                                  this.state.file !== "" ? (
                                    <img
                                      src={
                                        constant.fileuserpath + this.state.file
                                      }
                                      alt=""
                                    />
                                  ) : (
                                    <img src={profile.profilepic} alt="" />
                                  )
                                ) : this.state.file !== "" ? (
                                  <img src={this.state.file} alt="" />
                                ) : (
                                  <img src={profile.profilepic} alt="" />
                                )}
                              </div>
                            </span>
                          </div>
                          <div className="p-box1">
                            <div className="edit-dtle">
                              <form className="form-1">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="from1"
                                        name="firstname"
                                        className="form-control"
                                        value={
                                          this.state.firstname
                                            ? this.state.firstname
                                            : ""
                                        }
                                        onChange={this.addressChange}
                                        required
                                      />
                                      <label
                                        className="form-control-placeholder"
                                        htmlFor="from1"
                                      >
                                        First Name
                                      </label>
                                      <div className="text-danger">
                                        {this.state.firstnameerror}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="from66"
                                        name="lastname"
                                        className="form-control"
                                        value={
                                          this.state.lastname
                                            ? this.state.lastname
                                            : ""
                                        }
                                        onChange={this.addressChange}
                                        required
                                      />
                                      <label
                                        className="form-control-placeholder"
                                        htmlFor="from66"
                                      >
                                        Last Name
                                      </label>
                                      <div className="text-danger">
                                        {this.state.lastnameerror}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="from3"
                                        name="useremail"
                                        value={
                                          this.state.useremail
                                            ? this.state.useremail
                                            : ""
                                        }
                                        className="form-control"
                                        onChange={this.addressChange}
                                        required
                                      />
                                      <label
                                        className="form-control-placeholder"
                                        htmlFor="from3"
                                      >
                                        E-Mail
                                      </label>
                                      <div className="text-danger">
                                        {this.state.useremailerror}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="from8"
                                        name="mobile"
                                        maxLength={10}
                                        value={
                                          this.state.mobile
                                            ? this.state.mobile
                                            : ""
                                        }
                                        className="form-control"
                                        required
                                        disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </>
                      </Modal.Body>
                      <Modal.Footer>
                        <div className="col-md-12">
                          <div className="deliver">
                            <button
                              type="button"
                              className="save-delivry"
                              onClick={this.updateProfile}
                              disabled={this.state.disable}
                            >
                              Save
                            </button>

                            <button
                              type="button"
                              className="btb-text"
                              onClick={this.handleupdateModel}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="logout-btn">
                    <button onClick={this.logout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="flex-tabs">
                  <ul
                    className="nav nav-pills flex-column"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Orders List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Addresses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Manage Payments
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        id="kartzocash-tab"
                        data-toggle="tab"
                        href="#kartzocash"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Kartzo Cash
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="support-tab"
                        data-toggle="tab"
                        href="#support"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Support
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade "
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="order-list">
                        <div className="col-md-12">
                          {this.state.isShowHelp === false ? (
                            <h3 className="dlt-tt">Past Order</h3>
                          ) : (
                            ""
                          )}
                          {this.state.isShowHelp === false ? (
                            this.state.orderdata ? (
                              this.state.orderdata.length > 0 &&
                              this.state.orderdata.map(
                                (order: any, index: any) => (
                                  <div className="order-list1" key={index}>
                                    <div className="dlt-1">
                                      <div className="img-box">
                                        <img src={profile.food} alt="" />
                                      </div>
                                      <div className="order-dtl1">
                                        <h4 className="sub-tt">
                                          {order.orderDetails[0].merchantName}
                                        </h4>
                                        <div className="address-nm">
                                          {order.merchantAddress}
                                        </div>
                                        <div className="shop-id">
                                          ORDER # {order.orderNo} |{" "}
                                          {moment(order.orderDate).format(
                                            "LLLL"
                                          )}
                                        </div>
                                        <button
                                          className="view-dtl"
                                          onClick={() =>
                                            this.openOrderModel(order)
                                          }
                                        >
                                          View Details
                                        </button>
                                      </div>
                                    </div>

                                    <div className="order-food">
                                      <div className="btn-box">
                                        {order.orderDetails
                                          ? order.orderDetails.map(
                                              (item: any, index1: number) => (
                                                <div
                                                  className="food-nm"
                                                  key={index1}
                                                >
                                                  {item.quantity}-
                                                  {item.productName}
                                                </div>
                                              )
                                            )
                                          : ""}
                                      </div>
                                        <div className="mt-2 fix-btn-12">
                                          <button
                                            className="order-btn"
                                            onClick={() => this.reOrder(order)}
                                          >
                                            REORDER
                                          </button>
                                          <button
                                            className="help-btn"
                                            onClick={() =>
                                              this.helpOrder(order)
                                            }
                                          >
                                            HELP
                                          </button>
                                          {
                                            order.paymentStatus === "Success" ? (
                                          <button
                                            className="help-btn"
                                            onClick={() =>
                                              this.cancelOrder(order)
                                            }
                                          >
                                            Cancel Order
                                          </button>
                                            ) : ('')
                                          }
                                         
                                        </div>
                                    </div>
                                  </div>
                                )
                              )
                            ) : (
                              ""
                            )
                          ) : (
                            <div className="profile-helptab">
                              <div className="col-md-12">
                                <div className="back-order">
                                  <div
                                    className="arrow-back"
                                    onClick={() =>
                                      this.setState({
                                        isShowHelp: false,
                                      })
                                    }
                                  >
                                    <svg
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 492 492"
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z" />
                                        </g>
                                      </g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                    </svg>
                                  </div>
                                  <h3 className="dlt-tt">Back to all Orders</h3>
                                </div>
                                <div className="dlt-1">
                                  <div className="img-box">
                                    <img src={profile.food} alt="" />
                                  </div>
                                  <div className="order-dtl1">
                                    <h4 className="sub-tt">
                                      {reorderhelp.orderDetails[0].merchantName}
                                    </h4>
                                    <div className="address-nm">
                                    {reorderhelp.merchantAddress}
                                    </div>
                                    <div className="shop-id">
                                      ORDER # {reorderhelp.orderNo} |{" "}
                                      {moment(reorderhelp.orderDate).format(
                                        "LLLL"
                                      )}
                                    </div>
                                    <button
                                      className="view-dtl"
                                      onClick={() =>
                                        this.openOrderModel(reorderhelp)
                                      }
                                    >
                                      View Details
                                    </button>
                                  </div>
                                </div>

                                <div className="deliver-item">
                                  <svg
                                    height="16px"
                                    viewBox="0 0 512 512"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm129.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0"
                                      fill="#60b246"
                                    />
                                  </svg>
                                  <span className="deliver-day">
                                    Delivered on{" "}
                                    {moment(reorderhelp.orderDate).format(
                                      "LLLL"
                                    )}
                                  </span>
                                </div>
                                <div className="total-item">
                                  <div className="item-box1">
                                    {reorderhelp.orderDetails
                                      ? reorderhelp.orderDetails.map(
                                          (data: any, index: number) => (
                                            <span
                                              className="item-nm"
                                              key={index}
                                              style={{marginLeft:'10px'}}
                                            >
                                              {data.productName} x{" "}
                                              {data.quantity}
                                            </span>
                                          )
                                        )
                                      : ""}
                                  </div>
                                  <div className="total-paid">
                                    Total Paid: <i className="fa fa-rupee"></i>{" "}
                                    {reorderhelp.totalAmount}
                                  </div>
                                </div>
                              </div>

                              <div className="help-order">
                                <div className="row">
                                  <div className="col-md-12">
                                    <h3 className="dlt-tt">
                                      Help me with this order
                                    </h3>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div id="accordion">
                                      <div className="card">
                                        <div
                                          className="card-header"
                                          id="heading-2"
                                        >
                                          <h5 className="mb-0">
                                            <a
                                              className="collapsed"
                                              role="button"
                                              data-toggle="collapse"
                                              href="#collapse-1"
                                              aria-expanded="false"
                                              aria-controls="collapse-2"
                                            >
                                              I haven't receved this order
                                            </a>
                                          </h5>
                                        </div>
                                        <div
                                          id="collapse-1"
                                          className="collapse"
                                          data-parent="#accordion"
                                          aria-labelledby="heading-2"
                                        >
                                          <div className="card-body">
                                            Please let us know how we may help
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card">
                                        <div
                                          className="card-header"
                                          id="heading-3"
                                        >
                                          <h5 className="mb-0">
                                            <a
                                              className="collapsed"
                                              role="button"
                                              data-toggle="collapse"
                                              href="#collapse-2"
                                              aria-expanded="false"
                                              aria-controls="collapse-3"
                                            >
                                              Items are missing from my order
                                            </a>
                                          </h5>
                                        </div>
                                        <div
                                          id="collapse-2"
                                          className="collapse"
                                          data-parent="#accordion"
                                          aria-labelledby="heading-3"
                                        >
                                          <div className="card-body">
                                            Please let us know how we may help.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {this.state.clearModel === true
                            ? this.clearModel()
                            : ""}
                          <Modal
                            className="modal-dialog-centered"
                            show={this.state.showOrder}
                            onHide={this.handelCloseOrderModle}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Order Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <section className="view-order-dtl">
                                <div className="fix-width">
                                  <div className="top-title">
                                    <h1 className="order-id">
                                      Order #{this.state.ordernumber}{" "}
                                    </h1>
                                  </div>
                                  <div className="add-address">
                                    <div className="address-box1">
                                      <div className="small-tt">
                                        {this.state.merchantname}
                                      </div>
                                      <div className="pickup-location">
                                       {this.state.merchantaddress}
                                      </div>
                                      <div className="circle-box">
                                        <div className="icon-dot-bg1">
                                          <svg
                                            version="1.1"
                                            id="Capa_2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                          >
                                            <g>
                                              <g>
                                                <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z" />
                                              </g>
                                            </g>
                                            <g>
                                              <g>
                                                <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z" />
                                              </g>
                                            </g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="line-dot-1"></div>
                                    </div>
                                    <div className="address-box1">
                                      <div className="small-tt">
                                        {this.state.addressName}
                                      </div>
                                      <div className="pickup-location">
                                        {this.state.fulladdress}
                                      </div>
                                      <div className="btn-line"></div>
                                      <div className="delivery-day">
                                        <div className="icon-right">
                                          <svg
                                            height="16px"
                                            viewBox="0 -46 417.81333 417"
                                            width="16px"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"
                                              fill="#071828"
                                            />
                                          </svg>
                                          <span className="delivery-dt">
                                            Delivered on{" "}
                                            {moment(
                                              this.state.orderdate
                                            ).format("LLLL")}{" "}
                                            by yuvraj kashmiri chand
                                          </span>
                                        </div>
                                      </div>
                                      <div className="circle-box">
                                        <div className="icon-dot-bg1">
                                          <svg
                                            version="1.1"
                                            id="Capa_2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 477.846 477.846"
                                            xmlSpace="preserve"
                                          >
                                            <g>
                                              <g>
                                                <path d="M472.847,226.846l-34.116-34.116L250.998,4.997c-6.664-6.663-17.468-6.663-24.132,0L39.132,192.73L4.999,226.864    c-6.548,6.78-6.361,17.584,0.419,24.132c6.614,6.388,17.099,6.388,23.713,0l4.983-5.018v214.801    c0,9.426,7.641,17.067,17.067,17.067h375.467c9.426,0,17.067-7.641,17.067-17.067V245.978l5,5.001    c6.78,6.548,17.584,6.36,24.132-0.419C479.235,243.946,479.235,233.46,472.847,226.846z M290.115,443.713h-102.4V307.179h102.4    V443.713z M409.581,443.713h-85.333v-153.6c0-9.426-7.641-17.067-17.067-17.067H170.648c-9.426,0-17.067,7.641-17.067,17.067    v153.6H68.248V211.845L238.914,41.178l170.667,170.667V443.713z" />
                                              </g>
                                            </g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                            <g></g>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="p-item-dtl">
                                    <div className="p-total-item">
                                      {" "}
                                      {
                                        this.state.productdetail.length
                                      } ITEM{" "}
                                    </div>
                                    {this.state.productdetail
                                      ? this.state.productdetail.map(
                                          (data: any, index: number) => (
                                            <div
                                              className="p-item-list"
                                              key={index}
                                            >
                                              <div className="p-flex-box">
                                                <div className="p-list-1">
                                                  <h4>{data.productName} x{" "}
                                              {data.quantity}</h4>
                                                  <span className="p-descri-1">
                                                    {/* 9" Inch */}
                                                  </span>
                                                </div>
                                                <div className="p-item-price">
                                                  &#x20B9;{data.sellingPrice}
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        )
                                      : ""}
                                    <div className="p-list-total-rupee">
                                      <div className="p-flex-box">
                                        <div className="p-item-ttl">
                                          Item Total
                                        </div>
                                        <div className="p-item-price">
                                          &#x20B9;{this.state.totalprice}
                                        </div>
                                      </div>
                                      {/* <div className="p-flex-box">
                                        <div className="p-delivery-prtner">
                                          Delivery partner fee
                                        </div>
                                        <div className="p-item-price">
                                          &#x20B9;15.00
                                        </div>
                                      </div>
                                      <div className="p-flex-box">
                                        <div className="p-discount-aply clr-0">
                                          Discount Applied
                                        </div>
                                        <div className="p-item-price clr-0">
                                          -&#x20B9;54.00
                                        </div>
                                      </div> */}
                                    </div>
                                    <div className="p-paid-total">
                                      <div className="p-dis-flx">
                                        <span className="p-paid-viya">
                                          Paid Via Credit/Debit card
                                        </span>
                                        <span className="p-bill-ttl">
                                          BILL TOTAL
                                        </span>
                                        <span className="p-bill-rupee">
                                          &#x20B9;{this.state.totalprice}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <div className="deliver">
                                  <button
                                    type="button"
                                    className="btb-text"
                                    onClick={this.handelCloseOrderModle}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="add-addresses">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Manage Addresses</h3>
                          </div>
                          {this.state.addressarray
                            ? this.state.addressarray.length > 0 &&
                              this.state.addressarray.map(
                                (address: any, index: number) => (
                                  <div className="col-md-6" key={index}>
                                    <div className="addresses">
                                      <img src={profile.bag} alt="" />
                                      <div className="addresses-list">
                                        <h4 className="sub-tt">
                                          {address.addressType}
                                        </h4>
                                        <div className="address-nm">
                                          {address.address}
                                        </div>
                                        <div className="edit-delt-btn">
                                          <button
                                            className="edit-btn"
                                            onClick={() =>
                                              this.modelOpen(address)
                                            }
                                          >
                                            EDIT
                                          </button>
                                          <button
                                            className="edit-btn"
                                            onClick={() =>
                                              this.deleteAddressData(
                                                address.addressID,
                                                "You should be Remove address?",
                                                "Yes, Remove it"
                                              )
                                            }
                                          >
                                            DELETE
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )
                            : ""}
                          <Modal
                            className="modal-dialog-centered"
                            show={this.state.show}
                            onHide={this.handleClose}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Edit Address</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: "auto" }}>
                              <div className="p-box1">
                                <div className="edit-dtle">
                                  <form className="form-1">
                                    <button
                                      type="button"
                                      className="add-location"
                                      onClick={this.getCurrentLocation}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="-fgCFc"
                                      >
                                        <g fill="none" fillRule="evenodd">
                                          <path d="M0 0h16v16H0z"></path>
                                          <path
                                            className=""
                                            fill="#fff"
                                            d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"
                                          ></path>
                                        </g>
                                      </svg>
                                      Use my current location
                                    </button>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            id="from1"
                                            name="name"
                                            className="form-control"
                                            value={
                                              this.state.name
                                                ? this.state.name
                                                : ""
                                            }
                                            onChange={this.addressChange}
                                            required
                                          />
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from1"
                                          >
                                            Name
                                          </label>
                                          <div className="text-danger">
                                            {this.state.nameerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            id="from2"
                                            name="mobilephone"
                                            maxLength={10}
                                            value={
                                              this.state.mobilephone
                                                ? this.state.mobilephone
                                                : ""
                                            }
                                            className="form-control"
                                            onChange={this.addressChange}
                                            required
                                          />
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from2"
                                          >
                                            10-digit mobile number
                                          </label>
                                          <div className="text-danger">
                                            {this.state.mobilephoneerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="number"
                                            id="from3"
                                            name="pincode"
                                            value={
                                              this.state.pincode
                                                ? this.state.pincode
                                                : ""
                                            }
                                            className="form-control"
                                            onChange={this.addressChange}
                                            maxLength={6}
                                            required
                                          />
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from3"
                                          >
                                            Pincode
                                          </label>
                                          <div className="text-danger">
                                            {this.state.pincodeerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            id="from4"
                                            name="landmark"
                                            value={
                                              this.state.landmark
                                                ? this.state.landmark
                                                : ""
                                            }
                                            onChange={this.addressChange}
                                            className="form-control"
                                            required
                                          />
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from4"
                                          >
                                            Landmark
                                          </label>
                                          <div className="text-danger">
                                            {this.state.landmarkerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <textarea
                                            id="from5"
                                            name="address"
                                            value={
                                              this.state.address
                                                ? this.state.address
                                                : ""
                                            }
                                            onChange={this.addressChange}
                                            className="form-control"
                                          ></textarea>
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from5"
                                          >
                                            Address (Area and Street)
                                          </label>
                                          <div className="text-danger">
                                            {this.state.addresserror}
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            id="from6"
                                            name="city"
                                            value={
                                              this.state.city
                                                ? this.state.city
                                                : ""
                                            }
                                            onChange={this.addressChange}
                                            className="form-control"
                                            required
                                          />
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from6"
                                          >
                                            City/District/Town
                                          </label>
                                          <div className="text-danger">
                                            {this.state.cityerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            id="from7"
                                            name="state"
                                            value={
                                              this.state.state
                                                ? this.state.state
                                                : ""
                                            }
                                            onChange={this.addressChange}
                                            className="form-control"
                                            required
                                          />
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from7"
                                          >
                                            State
                                          </label>
                                          <div className="text-danger">
                                            {this.state.stateerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            id="from8"
                                            name="country"
                                            value={
                                              this.state.country
                                                ? this.state.country
                                                : ""
                                            }
                                            onChange={this.addressChange}
                                            className="form-control"
                                            required
                                          />
                                          <label
                                            className="form-control-placeholder"
                                            htmlFor="from8"
                                          >
                                            Country
                                          </label>
                                          <div className="text-danger">
                                            {this.state.countryerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="address-type">
                                          <span className="text-add">
                                            Address Type
                                          </span>
                                          <div className="radio-dis">
                                            <div className="adrss-1">
                                              <label className="rdio-box1">
                                                <span className="b-tt">
                                                  Home{" "}
                                                </span>
                                                <input
                                                  type="radio"
                                                  id="1"
                                                  checked={
                                                    this.state.addresstype ===
                                                    "1"
                                                      ? true
                                                      : false
                                                  }
                                                  onChange={this.changeAddress}
                                                  name="radio"
                                                  disabled={
                                                    this.state.homedisabled ===
                                                    true
                                                      ? true
                                                      : false
                                                  }
                                                />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                            <div className="adrss-1">
                                              <label className="rdio-box1">
                                                <span className="b-tt">
                                                  Work{" "}
                                                </span>
                                                <input
                                                  type="radio"
                                                  id="2"
                                                  checked={
                                                    this.state.addresstype ===
                                                    "2"
                                                      ? true
                                                      : false
                                                  }
                                                  onChange={this.changeAddress}
                                                  name="radio"
                                                  disabled={
                                                    this.state.workdisabled ===
                                                    true
                                                      ? true
                                                      : false
                                                  }
                                                />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                            <div className="adrss-1">
                                              <label className="rdio-box1">
                                                <span className="b-tt">
                                                  Other{" "}
                                                </span>
                                                <input
                                                  type="radio"
                                                  id="3"
                                                  checked={
                                                    this.state.addresstype ===
                                                    "3"
                                                      ? true
                                                      : false
                                                  }
                                                  onChange={this.changeAddress}
                                                  name="radio"
                                                  disabled={
                                                    this.state.otherdisabled ===
                                                    true
                                                      ? true
                                                      : false
                                                  }
                                                />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <div className="deliver">
                                  <button
                                    type="button"
                                    className="save-delivry"
                                    onClick={this.editAddress}
                                  >
                                    Save and Deliver Here
                                  </button>

                                  <button
                                    type="button"
                                    className="btb-text"
                                    onClick={this.handleClose}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="manage-payment">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Wallets</h3>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.paytm} alt="" />
                                <div className="pay-tt">Paytm</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.simple} alt="" />
                                <div className="pay-tt">Simple</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.lazypay} alt="" />
                                <div className="pay-tt">LazyPay</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="kartzocash"
                      role="tabpanel"
                      aria-labelledby="kartzocash-tab"
                    >
                      <div className="kartzo-cash">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="flex-box-trms">
                              <h3 className="dlt-tt">Kartzo Cash</h3>
                              <button className="view-dtl">
                                Terms & Conditions
                              </button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="kartzo-cash1">
                              <div className="kartzo-cash-tt">
                                Your Kartzo Cash Balance
                              </div>
                              <div className="total-cash">R 200</div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="kartzo-cash2">
                              <img src={profile.eligible} alt="" />
                              <div className="eligible-box">
                                <div className="kartzo-eligible-tt">
                                  Sorry, You are not eligible{" "}
                                </div>
                                <div className="kartzo-eligible-small-tt">
                                  But don't worry, you will be eligible once you
                                  start using the Dunzo platform.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="how-it-work">
                              <h3 className="dlt-tt">How it works</h3>
                              <div className="box-how-work">
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.friends} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Share the referral link with your friends
                                  </span>
                                </div>
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.friends} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Your friend clicks on the link or signs up
                                    through the code
                                  </span>
                                </div>
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.wallet} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Your friend gets ₹50 Dunzo Cash on sign up.
                                    You get ₹50 when they complete an order of
                                    ₹100 or more within 7 days. You can earn
                                    upto ₹500 Dunzo Cash.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="support"
                      role="tabpanel"
                      aria-labelledby="support-tab"
                    >
                      <div className="kartzo-support">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Support</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div id="accordion">
                              <div className="card">
                                <div className="card-header" id="heading-2">
                                  <h5 className="mb-0">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="#collapse-1"
                                      aria-expanded="false"
                                      aria-controls="collapse-2"
                                    >
                                      I have a payment related query
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id="collapse-1"
                                  className="collapse"
                                  data-parent="#accordion"
                                  aria-labelledby="heading-2"
                                >
                                  <div className="card-body">
                                    Please let us know how we may help
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-header" id="heading-3">
                                  <h5 className="mb-0">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="#collapse-2"
                                      aria-expanded="false"
                                      aria-controls="collapse-3"
                                    >
                                      I have a promotion or Dunzo cash related
                                      query
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id="collapse-2"
                                  className="collapse"
                                  data-parent="#accordion"
                                  aria-labelledby="heading-3"
                                >
                                  <div className="card-body">
                                    Please let us know how we may help.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
  addressDetails: state.placeOrder.addressdata,
  orderDetails: state.order.orderdata,
  profileData: state.auth.profiledata,
  updateProfileData: state.auth.updateprofiledata,
  getCartDetail: state.product.getcartdetails,
  updateaddress:state.placeOrder.updateaddress,
  deletedata:state.placeOrder.deletedata,
  updateprofiledata:state.auth.updateprofiledata,
  refundData:state.product.refunddata
});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  /** Get Address Data */
  getAddressList: (data: any) =>
    dispatch(placeOrderService.getAddressList(data)),

  /** Update Address */
  updateAddress: (data: any) => dispatch(placeOrderService.updateAddress(data)),

  /** Delete Address */
  deleteAddress: (data: any) => dispatch(placeOrderService.deleteAddress(data)),

  /** Get Order list */
  getOrderList: (data: any) => dispatch(orderService.getOrderList(data)),

  /** Update Profile Data */
  updateProfileData: (data: any) =>
    dispatch(loginService.updateProfileData(data)),

  getProfile: (data: any) => dispatch(loginService.getProfile(data)),

  /** Get Cart */
  getcartData: (data: any) => dispatch(productService.getcartData(data)),

  /** Remove Product */
  removeProductFromCart: (data: any) =>
    dispatch(productService.removeProductFromCart(data)),

  /** Reorder */
  reOrder: (data: any) => dispatch(productService.reOrder(data)),

    /** Reorder */
    cancelOrderData: (data: any) => dispatch(productService.cancelOrderData(data)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
