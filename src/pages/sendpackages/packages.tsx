import React from "react";
import ReactDOM from "react-dom";
import MyMapComponent from "../map/map";
import EventEmitter from "../../event";
import constant from "../constant/constant";
import { packageStateRequest } from "../../modelController/packageModel";
import { getAddressListRequest } from "../../modelController";
import { placeOrderService } from "../../redux";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import "./packages.css";
import SelectSearch from "react-select-search";

class Packages extends React.Component<{ getAddressList: any }> {
  /** Package state */
  packagesState: packageStateRequest = constant.packagesPage.state;
  state = {
    lat: this.packagesState.lat,
    long: this.packagesState.long,
    isMarkerShown: this.packagesState.isMarkerShown,
    city: this.packagesState.city,
    cityerror: this.packagesState.cityerror,
    area: this.packagesState.area,
    country: this.packagesState.country,
    countryerror: this.packagesState.countryerror,
    state: this.packagesState.state,
    stateerror: this.packagesState.stateerror,
    pincode: this.packagesState.pincode,
    pincodeerror: this.packagesState.pincodeerror,
    addresserror: this.packagesState.addresserror,
    address: this.packagesState.address,
    name: this.packagesState.name,
    nameerror: this.packagesState.nameerror,
    addresstype: this.packagesState.addresstype,
    addresstypeerror: this.packagesState.addresstypeerror,
    mobileerror: this.packagesState.mobileerror,
    mobile: this.packagesState.mobile,
    landmark: this.packagesState.landmark,
    landmarkerror: this.packagesState.landmarkerror,
    addressarray: this.packagesState.addressarray,
    show: this.packagesState.show,
    showMap: this.packagesState.showMap,
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);

    EventEmitter.subscribe("latlong", (data: any) => {
      this.setState({
        lat: this.state.lat = data.lat().toString(),
        long: this.state.long = data.lng().toString(),
      });
      this.getAddress(this.state.lat, this.state.long);
    });

    this.mapOpen = this.mapOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseMap = this.handleCloseMap.bind(this);
    this.modelOpen = this.modelOpen.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    EventEmitter.dispatch("isShow", false);
    EventEmitter.dispatch("isShowFooter", true);
    this.getAllAddress();
  }

  /**
   * @param searchText : search value
   * @param page : page number
   * @param size : per page display value
   */
  getAllAddress(searchText: string = "", page: number = 1, size: number = 20) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getAddressListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user ? user.userID : 0,
    };
    if (user) {
      this.props.getAddressList(obj);
    }
  }

  /**
   *
   * @param nextProps : get updated props value
   */
  componentWillReceiveProps(nextProps: any) {
    // console.log("props", nextProps);
    if (nextProps.addressDetails) {
      this.getAddressDetailsData(nextProps.addressDetails);
    }
  }

  /**
   *
   * @param data : get address details
   */
  getAddressDetailsData(data: any) {
    this.setState({
      addressarray: this.state.addressarray = data.data,
    });
  }

  /**
   *
   * @param latitude : latitude
   * @param longitude : longitude
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
            console.log("address", address);
            if (address && address.address_components.length > 0) {
              _this.setState({
                // area: address.address_components[1].long_name
                //   .toString()
                //   .toLowerCase(),
                // city: address.address_components[3].long_name
                //   .toString()
                //   .toLowerCase(),
                // state: address.address_components[4].long_name
                //   .toString()
                //   .toLowerCase(),
                // country: address.address_components[5].long_name
                //   .toString()
                //   .toLowerCase(),
                // pincode: address.address_components[6].long_name,
                address: address ? address.formatted_address : "",
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

  modelOpen() {
    this.setState({ show: !this.state.show });
  }

  /** Close model */
  handleClose() {
    this.setState({ show: !this.state.show });
  }

  /** Close model */
  handleCloseMap() {
    this.setState({
      showMap: !this.state.showMap,
      show: !this.state.show,
    });
  }

  /** Map Open */
  mapOpen() {
    this.setState({
      showMap: this.state.showMap = true,
      show: this.state.show = false,
    });
  }

  /** Render DOM */
  render() {
    return (
      <>
        <section className="send-packages">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-flex">
                  <div className="left-box">
                    <div className="card-item123">
                      <h1 className="my-cart-item">Send packages in Mumbai </h1>
                      <p className="mt-3">Your on demand local courier </p>
                    </div>
                    <div className="add-address">
                      <div className="address-box1">
                        <div className="small-tt">Pickup location</div>
                        <div
                          className="pickup-location"
                          onClick={this.modelOpen}
                        >
                          Search pickup location
                        </div>
                        <div className="btn-line"></div>
                        <div className="circle-box"> </div>
                      </div>
                      <div className="address-box1">
                        <div className="small-tt">Drop point</div>
                        <div className="pickup-location">
                          Search drop location
                        </div>
                        <div className="btn-line"></div>
                        <div className="circle-box"> </div>
                      </div>
                    </div>
                    <div className="instructions">
                      <div className="input-box">
                        <img
                          src={require("../../assets/images/input-icon1.svg")}
                          alt=""
                        />
                        <input
                          type="text"
                          name="instructions"
                          className="instructions-box"
                          placeholder="Any instructions for the delivery partner?"
                        />
                      </div>
                      <span className="instructions-tt">
                        By confirming I accept this order doesn’t contain
                        illegal/resticted items, if illegal/restricted items are
                        found by Dunzo Partner, they may report it to the law
                        enforcement authorities.
                        <a href="#" className="tc-text">
                          {" "}
                          Terms and Conditions
                        </a>
                      </span>

                      <button className="confirm-btn">Confirm Order</button>
                    </div>
                  </div>
                  <div className="right-box">
                    <div className="dtl-box">
                      <h3 className="title-dtl">Some do’s & Dont’s</h3>
                      <div className="discr-box">
                        <div className="discr-1">
                          <span className="bold-tt">No Purchases - </span>
                          <span>
                            Delivery partner would not be able to make any
                            purchase
                          </span>
                        </div>
                        <div className="discr-1">
                          <span className="bold-tt">Package Weight - </span>
                          <span>
                            We cannot deliver items that can’t be easily carried
                            on bike
                          </span>
                        </div>
                        <div className="discr-1">
                          <span className="bold-tt">No Autos/Cabs - </span>
                          <span>
                            We will not be able to get something transported via
                            these
                          </span>
                        </div>
                        <div className="discr-1">
                          <span className="bold-tt">
                            Restricted/Illegal Item -{" "}
                          </span>
                          <span>
                            Please don’t hand over any restricted item
                          </span>
                        </div>
                      </div>
                      <div className="deliveryboy-img">
                        <img
                          src={require("../../assets/images/delivery-boy-img.jpg")}
                          alt="deliveryboy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          className="modal-dialog-centered"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Search Pickup Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="map_main">
              <SelectSearch
                options={[{ value: "rajkot", name: "Rajkot" }]}
                placeholder="Search for a location"
                search
                // onChange={this.onlocationSelectId}
              />
              <div className="select-map-location">
                <span className="location-img-1">
                  <img
                    src={require("../../assets/images/track-location.svg")}
                  />
                </span>
                <p onClick={this.mapOpen}>Select Location Via Map</p>
              </div>
              <div className="Map_Address">
                <span className="map-address-pc">Save Addresses</span>
                <div className="mm-1">
                  <img src={require("../../assets/images/home-icon.png")} />
                  <div className="add-map">
                    <div className="text-address">Home</div>
                    <div className="text-address-1">
                      aaaaah hhhhhhhh hhhhh hhhhhhh,360410,rajkot
                    </div>
                  </div>
                </div>
                <div className="mm-1">
                  <img src={require("../../assets/images/home-icon.png")} />
                  <div className="add-map">
                    <div className="text-address">Home</div>
                    <div className="text-address-1">
                      aaaaah hhhhhhhh hhhhh hhhhhhh,360410,rajkot
                    </div>
                  </div>
                </div>
                <div className="mm-1">
                  <img src={require("../../assets/images/home-icon.png")} />
                  <div className="add-map">
                    <div className="text-address">Home</div>
                    <div className="text-address-1">
                      aaaaah hhhhhhhh hhhhh hhhhhhh,360410,rajkot
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <div className="main-package">
          <Modal
            className="modal-dialog-centered main-package"
            show={this.state.showMap}
            onHide={this.handleCloseMap}
          >
            <Modal.Header closeButton>
              <div className="Back-Arrow">
                <i
                  className="fas fa-arrow-circle-left"
                  onClick={this.handleCloseMap}
                ></i>
              </div>
              <Modal.Title>Set Pickup Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <MyMapComponent isMarkerShown={true} />
              </div>
              <div className="p-box11">
                <div className="edit-dtle">
                  <form className="form-1">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from3"
                            name="pincode"
                            // value={
                            //   this.state.pincode
                            //     ? this.state.pincode
                            //     : ""
                            // }
                            className="form-control"
                            // onChange={this.addressChange}
                            maxLength={6}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from3"
                          >
                            FLAT,FLOR,BUILDING NAME*
                          </label>
                          {/* <div className="text-danger">
                                            {this.state.pincodeerror}
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from4"
                            name="landmark"
                            // value={
                            //   this.state.landmark
                            //     ? this.state.landmark
                            //     : ""
                            // }
                            // onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from4"
                          >
                            HOW TO REACH
                          </label>
                          {/* <div className="text-danger">
                                            {this.state.landmarkerror}
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from1"
                            name="name"
                            className="form-control"
                            // value={
                            //   this.state.name
                            //     ? this.state.name
                            //     : ""
                            // }
                            // onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from1"
                          >
                            CONTACT PERSON NAME
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
                            // value={
                            //   this.state.mobilephone
                            //     ? this.state.mobilephone
                            //     : ""
                            // }
                            className="form-control"
                            // onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from2"
                          >
                            CONTACT DETAIL
                          </label>
                          {/* <div className="text-danger">
                                            {this.state.mobilephoneerror}
                                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="address-type">
                          <span className="text-add">Address Type</span>
                          <div className="radio-dis">
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Home </span>
                                <input
                                  type="radio"
                                  id="1"
                                  // checked={
                                  //   this.state.addresstype ===
                                  //   "1"
                                  //     ? true
                                  //     : false
                                  // }
                                  // onChange={this.changeAddress}
                                  name="radio"
                                  // disabled={this.state.homedisabled === true ? true : false}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Work </span>
                                <input
                                  type="radio"
                                  id="2"
                                  checked={
                                    this.state.addresstype === "2"
                                      ? true
                                      : false
                                  }
                                  // onChange={this.changeAddress}
                                  name="radio"
                                  // disabled={this.state.workdisabled === true ? true : false}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Other </span>
                                <input
                                  type="radio"
                                  id="3"
                                  checked={
                                    this.state.addresstype === "3"
                                      ? true
                                      : false
                                  }
                                  // onChange={this.changeAddress}
                                  name="radio"
                                  // disabled={this.state.otherdisabled === true ? true : false}
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
                    // onClick={this.editAddress}
                  >
                    Save and Deliver Here
                  </button>

                  <button
                    type="button"
                    className="btb-text"
                    onClick={this.handleCloseMap}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
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
});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  /** Get Address List */
  getAddressList: (data: any) =>
    dispatch(placeOrderService.getAddressList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
