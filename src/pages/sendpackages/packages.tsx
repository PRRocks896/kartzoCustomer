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
    showMap: this.packagesState.showMap
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

    /** Close model */
    handleClose() {
      this.setState({ show: !this.state.show });
    }

    /** Close model */
    handleCloseMap() {
      this.setState({ 
        showMap: !this.state.showMap,
        show: !this.state.show
       });
    }

    /** Map Open */
    mapOpen() {
      this.setState({
        showMap:this.state.showMap = true,
        show:this.state.show = false
      })
    }
  

  /** Render DOM */
  render() {
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Search Pickup Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p onClick={this.mapOpen}>Select Location Via Map</p>
          {/* <div style={{ margin: "auto", width: "500px" }}>
          <MyMapComponent isMarkerShown={true} />
        </div> */}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

        <Modal
          className="modal-dialog-centered"
          show={this.state.showMap}
          onHide={this.handleCloseMap}
        >
          <Modal.Header closeButton>
            <Modal.Title>Set Pickup Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div style={{ margin: "auto", width: "500px" }}>
          <MyMapComponent isMarkerShown={true} />
        </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      
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
