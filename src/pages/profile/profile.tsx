import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  getAddressListRequest,
  placeorderStateRequest,
  profileStateRequest,
} from "../../modelController";
import { profile } from "../../pages/components/helper/images";
import {
  placeOrderService,
  orderService,
  loginService,
} from "../../redux/index";
import constant from "../constant/constant";
import { getAppName, alertMessage } from "../utils";
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
  }

  /** Page Render Call */
  componentDidMount() {
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
    console.log("props", nextProps);
    if (nextProps.addressDetails) {
      this.setState({
        show: (this.state.show = false),
      });
      this.getAddressDetailsData(nextProps.addressDetails);
    }
    if (nextProps.orderDetails) {
      this.getOrderDetails(nextProps.orderDetails);
    }
    if (nextProps.profileData) {
      this.getProfileData(nextProps.profileData);
    }

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

  /**
   *  @param data : address success response
   */
  getAddressDetailsData(data: any) {
    this.setState({
      addressarray: (this.state.addressarray = data.data),
    });
  }

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
  editAddress() {
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
      this.props.updateAddress(obj);

      setTimeout(() => {
        this.getAddressDetails();
      }, 200);
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
      this.props.deleteAddress(obj);

      setTimeout(() => {
        this.getAddressDetails();
      }, 200);
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
  updateProfile() {
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
      this.props.updateProfileData(formData);

      setTimeout(() => {
        this.getProfile();
      }, 300);
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

  openOrderModel() {
    this.setState({
      showOrder: !this.state.showOrder,
    });
  }

  handelCloseOrderModle() {
    this.setState({
      showOrder: !this.state.showOrder,
    });
  }

  /** Render DOM */
  render() {
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
                          <h3 className="dlt-tt">Past Order</h3>
                          {this.state.orderdata
                            ? this.state.orderdata.length > 0 &&
                              this.state.orderdata.map(
                                (order: any, index: any) =>
                                  order.orderDetails
                                    ? order.orderDetails.map(
                                        (main: any, index1: number) => (
                                          <div
                                            className="order-list1"
                                            key={index1}
                                          >
                                            <div className="dlt-1">
                                              <div className="img-box">
                                                {main &&
                                                main.productImages &&
                                                main.productImages[0]
                                                  .imagePath ? (
                                                  <img
                                                  style={{height:'79px'}}
                                                    src={
                                                      constant.filemerchantpath +
                                                      main.productImages[0]
                                                        .imagePath
                                                    }
                                                    alt=""
                                                  />
                                                ) : (
                                                  <img
                                                    src={profile.food}
                                                    alt=""
                                                  />
                                                )}
                                              </div>
                                              <div className="order-dtl1">
                                                <h4 className="sub-tt">
                                                  {main.merchantName}
                                                </h4>
                                                <div className="address-nm">
                                                  Race Course Road
                                                </div>
                                                <div className="shop-id">
                                                  ORDER # {order.orderNo} |{" "}
                                                  {moment(main.created).format(
                                                    "LLLL"
                                                  )}
                                                </div>
                                                <button
                                                  className="view-dtl"
                                                  onClick={this.openOrderModel}
                                                >
                                                  View Details
                                                </button>
                                              </div>
                                            </div>

                                            <div className="order-food">
                                              <div className="food-nm">
                                                {main.productName}
                                              </div>
                                              <div className="btn-box">
                                                <button className="order-btn">
                                                  REORDER
                                                </button>
                                                <button className="help-btn">
                                                  HELP
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      )
                                    : ""
                              )
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
                              <section className="send-packages">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="main-flex">
                                        <div className="left-box">
                                          <div className="card-item123">
                                            <h1 className="my-cart-item">
                                              Order #8282828282{" "}
                                            </h1>
                                            {/* <p className="mt-3">Your on demand local courier </p> */}
                                          </div>

                                          <div className="add-address">
                                            <div className="bdr-left"></div>
                                            <div className="address-box1">
                                              <div className="small-tt mt-4">
                                                Pizza Studio
                                              </div>
                                              <div className="pickup-location">
                                                Kalawad Road
                                              </div>
                                          
                                              <div className="circle-box">
                                                <div className="icon-dot-bg">
                                                  <svg
                                                    version="1.1"
                                                    id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 319 318"
                                                  >
                                                    <g>
                                                      <path d="M159.8,8.68c82.77,0.05,150.08,67.18,150.01,149.59c-0.07,83.76-67.4,151.54-150.41,151.43   C76.4,309.59,8.27,241.72,8.26,159.11C8.24,75.32,75.43,8.63,159.8,8.68z M124.36,146.18c1.32-1.45,2.09-2.36,2.92-3.21   c5.91-5.93,11.91-11.78,17.74-17.79c4.8-4.94,4.71-11.2,0.01-16.01c-4.79-4.91-11.33-5.14-16.28-0.24   c-13.94,13.8-27.82,27.67-41.63,41.61c-5.01,5.06-5.03,11.59-0.07,16.72c13.46,13.93,27,27.79,40.58,41.59   c4.78,4.86,11.19,4.86,16.04,0.29c5.04-4.75,5.32-11.12,0.45-16.27c-5.83-6.18-11.85-12.19-17.77-18.28   c-0.72-0.75-1.35-1.59-2.43-2.86c2.03,0,3.37,0,4.72,0c30.75-0.01,61.5-0.01,92.24-0.02c6.54,0,11.45-3.41,13.17-9.05   c2.59-8.48-3.71-16.46-13.15-16.47c-30.62-0.04-61.25-0.02-91.87-0.02C127.73,146.18,126.41,146.18,124.36,146.18z" />
                                                    </g>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="line-dot-1">
                                                {" "}
                                              </div>
                                            </div>

                                            <div className="address-box1">
                                              <div className="small-tt">
                                                Home
                                              </div>
                                              <div className="pickup-location">
                                                near bus station
                                              </div>

                                            
                                              <div className="circle-box">
                                                <div className="icon-dot-bg2">
                                                  <svg
                                                    version="1.1"
                                                    id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 319 318"
                                                  >
                                                    <g>
                                                      <path d="M159.8,8.68c82.77,0.05,150.08,67.18,150.01,149.59c-0.07,83.76-67.4,151.54-150.41,151.43   C76.4,309.59,8.27,241.72,8.26,159.11C8.24,75.32,75.43,8.63,159.8,8.68z M124.36,146.18c1.32-1.45,2.09-2.36,2.92-3.21   c5.91-5.93,11.91-11.78,17.74-17.79c4.8-4.94,4.71-11.2,0.01-16.01c-4.79-4.91-11.33-5.14-16.28-0.24   c-13.94,13.8-27.82,27.67-41.63,41.61c-5.01,5.06-5.03,11.59-0.07,16.72c13.46,13.93,27,27.79,40.58,41.59   c4.78,4.86,11.19,4.86,16.04,0.29c5.04-4.75,5.32-11.12,0.45-16.27c-5.83-6.18-11.85-12.19-17.77-18.28   c-0.72-0.75-1.35-1.59-2.43-2.86c2.03,0,3.37,0,4.72,0c30.75-0.01,61.5-0.01,92.24-0.02c6.54,0,11.45-3.41,13.17-9.05   c2.59-8.48-3.71-16.46-13.15-16.47c-30.62-0.04-61.25-0.02-91.87-0.02C127.73,146.18,126.41,146.18,124.36,146.18z" />
                                                    </g>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="line-dot-2">
                                                {" "}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
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
                                <div className="pay-tt">Simpl</div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
