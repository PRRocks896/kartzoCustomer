import React from "react";
import ReactDOM from "react-dom";
import MyMapComponent from "../map/map";
import MyMapDropComponent from "../dropmap/dropmap";
import EventEmitter from "../../event";
import constant from "../constant/constant";
import {
  packageStateRequest,
  addCartRequest,
  removeCartItemRequest,
} from "../../modelController/index";
import {
  getAddressListRequest,
  getCartListRequest,
} from "../../modelController";
import { placeOrderService, packageService, productService } from "../../redux";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import "./packages.css";
import Geocode from "react-geocode";

class Packages extends React.Component<{
  getAddressList: any;
  searchAddressData: any;
  getcartData: any;
  updateToCart: any;
  removeProductFromCart: any;
  history: any;
}> {
  /** Package state */
  packagesState: packageStateRequest = constant.packagesPage.state;
  state = {
    lat: this.packagesState.lat,
    long: this.packagesState.long,
    lat1: this.packagesState.lat1,
    long1: this.packagesState.long1,
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
    addressdroptype: this.packagesState.addressdroptype,
    addresstypeerror: this.packagesState.addresstypeerror,
    mobileerror: this.packagesState.mobileerror,
    mobile: this.packagesState.mobile,
    landmark: this.packagesState.landmark,
    landmarkerror: this.packagesState.landmarkerror,
    addressarray: this.packagesState.addressarray,
    show: this.packagesState.show,
    showMap: this.packagesState.showMap,
    selectblock: this.packagesState.selectblock,
    selectedaddress: this.packagesState.selectedaddress,
    flat: this.packagesState.flat,
    flaterror: this.packagesState.flaterror,
    reach: this.packagesState.reach,
    reacherror: this.packagesState.reacherror,

    show1: this.packagesState.show1,
    showMap1: this.packagesState.showMap1,
    selectblock1: this.packagesState.selectblock1,
    selectedaddressdrop: this.packagesState.selectedaddressdrop,
    name1: this.packagesState.name1,
    mobile1: this.packagesState.mobile1,
    flat1: this.packagesState.flat1,
    flat1error: this.packagesState.flat1error,
    reach1: this.packagesState.reach1,
    reach1error: this.packagesState.reach1error,
    name1error: this.packagesState.name1error,
    mobile1error: this.packagesState.mobile1error,
    homeerror: this.packagesState.homeerror,
    workerror: this.packagesState.workerror,
    home1error: this.packagesState.home1error,
    work1error: this.packagesState.work1error,
    searchaddress: this.packagesState.searchaddress,
    searchSection: this.packagesState.searchSection,
    cartarray: this.packagesState.cartarray,
    clearcart: this.packagesState.clearcart,
    displaydesc: this.packagesState.displaydesc,
    addressmaintype: this.packagesState.addressmaintype,
    addressmaintype1: this.packagesState.addressmaintype1,
    sameaddress:false
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

    EventEmitter.subscribe("latlongdrop", (data: any) => {
      this.setState({
        lat1: this.state.lat1 = data.lat().toString(),
        long1: this.state.long1 = data.lng().toString(),
      });
      this.getAddressDropMapData(this.state.lat1, this.state.long1);
    });

    this.mapOpen = this.mapOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseMap = this.handleCloseMap.bind(this);
    this.modelOpen = this.modelOpen.bind(this);
    this.addressSelect = this.addressSelect.bind(this);
    this.modelOpenDrop = this.modelOpenDrop.bind(this);
    this.handleCloseMapDrop = this.handleCloseMapDrop.bind(this);
    this.handleCloseDrop = this.handleCloseDrop.bind(this);
    this.mapOpenDrop = this.mapOpenDrop.bind(this);
    this.addressSelectDrop = this.addressSelectDrop.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.continueAddress = this.continueAddress.bind(this);
    this.changeDropAddress = this.changeDropAddress.bind(this);
    this.continueDropAddress = this.continueDropAddress.bind(this);
    this.searchAddress = this.searchAddress.bind(this);
    this.searchAddressDrop = this.searchAddressDrop.bind(this);
    this.addressSearchSelect = this.addressSearchSelect.bind(this);
    this.addressSearchDropSelect = this.addressSearchDropSelect.bind(this);
    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
    this.clearOldCart = this.clearOldCart.bind(this);
    this.handleSameAddress = this.handleSameAddress.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/signin");
    } else {
      EventEmitter.dispatch("isShow", false);
      EventEmitter.dispatch("isShowFooter", true);
      this.getAllAddress();
      // this.getAddress(this.state.lat, this.state.long);
      // this.getAddressDropMapData(this.state.lat, this.state.long);
      if (localStorage.getItem("token")) {
        this.getCartData();
      }
    }
  }

  /**
   *
   * @param searchText : search value
   * @param page : page number
   * @param size : per page size value
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
    if (nextProps.searchAddressDetails) {
      this.getSearchAddressData(nextProps.searchAddressDetails);
    }
    if (nextProps.getCartDetail) {
      this.getCartAllProductData(nextProps.getCartDetail);
    }
  }

  /**
   *
   * @param data : get cart all items
   */
  getCartAllProductData(data: any) {
    this.setState({
      cartarray: this.state.cartarray = data.data,
    });
    localStorage.setItem("cartcount", data.totalcount);
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      this.setState({
        cartarray: this.state.cartarray = data.data,
        displaydesc: false,
      });
    } else {
      this.setState({
        displaydesc: true,
      });
      EventEmitter.dispatch("count", 0);
      localStorage.setItem("cartcount", "0");
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
   * @param data : search address data
   */
  getSearchAddressData(data: any) {
    this.setState({
      searchaddress: this.state.searchaddress = data,
    });
    if (this.state.searchaddress.length > 0) {
      this.setState({
        searchSection: this.state.searchSection = true,
      });
    } else {
      this.setState({
        searchSection: this.state.searchSection = false,
      });
    }
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
                selectedaddress: address ? address.formatted_address : "",
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

  /**
   *
   * @param latitude : latitude
   * @param longitude : longitude
   */
  async getAddressDropMapData(latitude: any, longitude: any) {
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
                selectedaddressdrop: address ? address.formatted_address : "",
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

  /** Model Open */
  modelOpen() {
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      this.setState({
        clearcart: true,
      });
    } else {
      this.setState({ show: !this.state.show });
    }
  }

  /** Model Open */
  modelOpenDrop() {
    console.log("search",this.state.searchSection)
    this.setState({
      show1: !this.state.show1,
    });
    if(this.state.selectedaddress) {
      this.setState({
        searchSection: this.state.searchSection =  false,
      });
    }
  }

  /** Close model */
  handleClose() {
    this.setState({ show: !this.state.show });
  }

  /** Close model */
  handleClearCart() {
    this.setState({ clearcart: !this.state.clearcart });
  }

  /** Close model */
  handleCloseDrop() {
    this.setState({ show1: !this.state.show1 });
  }

  /** Close model */
  handleCloseMapDrop() {
    this.setState({
      showMap1: !this.state.showMap1,
      show1: !this.state.show1,
      searchSection: this.state.searchSection = false,
    });
  }

  /** Close model */
  handleCloseMap() {
    this.setState({
      showMap: !this.state.showMap,
      show: !this.state.show,
      searchSection: this.state.searchSection = false,
    });
  }

  /** Map Open */
  mapOpen() {
    this.setState({
      showMap: this.state.showMap = true,
      show: this.state.show = false,
      falt: this.state.flat = "",
      reach: this.state.reach = "",
      lat: this.state.lat = 22.2856,
      long: this.state.long = 70.7561,
    });
  }

  /** Map Open */
  mapOpenDrop() {
    this.setState({
      showMap1: this.state.showMap1 = true,
      show1: this.state.show1 = false,
      flat1: this.state.flat1 = "",
      reach1: this.state.reach1 = "",
      lat1: this.state.lat1 = 22.2856,
      long1: this.state.long1 = 70.7561,
    });
  }

  /** Address Select */
  addressSelect(data: any) {
    this.setState({
      show: !this.state.show,
      selectblock: this.state.selectblock = true,
      selectedaddress: this.state.selectedaddress = data.address,
      name: this.state.name = data.name,
      mobile: this.state.mobile = data.mobile,
      addressmaintype: data.addressType,
    });
    if(this.state.selectedaddress === this.state.selectedaddressdrop) {
      this.setState({
        sameaddress:true
      })
    } else {
      this.setState({
        sameaddress:false
      })
    }
  }

  /** Address Select */
  addressSelectDrop(data: any) {
    this.setState({
      show1: !this.state.show1,
      selectblock1: this.state.selectblock1 = true,
      selectedaddressdrop: this.state.selectedaddressdrop = data.address,
      name1: this.state.name1 = data.name,
      mobile1: this.state.mobile1 = data.mobile,
      addressmaintype1: data.addressType,
    });
    if(this.state.selectedaddress === this.state.selectedaddressdrop) {
      this.setState({
        sameaddress:true
      })
    } else {
      this.setState({
        sameaddress:false
      })
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
    if (e.target.id === "1") {
      this.setState({
        addresstype: this.state.addresstype = e.target.id,
      });
      let addresslist: any = this.state.addressarray;
      if(addresslist.length > 0) {
      addresslist.map((data: any, index: number) =>
        data.addressType === "Home"
          ? this.setState({
              homeerror: this.state.homeerror =
                "An address is already saved as HOME",
              workerror: this.state.workerror = "",
            })
          : ""
      );
          } else {
            if(this.state.workerror) {
              this.setState({
                workerror: this.state.workerror = ""
              })
            }
          }
    } else if (e.target.id === "2") {
      this.setState({
        addresstype: this.state.addresstype = e.target.id,
      });
      let addresslist: any = this.state.addressarray;
      if(addresslist.length > 0) {
      addresslist.map((data: any, index: number) =>
        data.addressType === "Work"
          ? this.setState({
              homeerror: this.state.homeerror = "",
              workerror: this.state.workerror =
                "An address is already saved as WORK",
            })
          : ""
      );
          } else {
            if(this.state.homeerror) {
              this.setState({
                homeerror: this.state.homeerror = ""
              })
            }
          }
    } else if (e.target.id === "3") {
      this.setState({
        homeerror: this.state.homeerror = "",
        workerror: this.state.workerror = "",
        addresstype: this.state.addresstype = e.target.id,
      });
    }
  }

  /**
   *
   * @param e : change address type (work to home) || (home to work)
   */
  changeDropAddress(e: any) {
    if (e.target.id === "1") {
      this.setState({
        addressdroptype: this.state.addressdroptype = e.target.id,
      });
      let addresslist: any = this.state.addressarray;
      if(addresslist.length > 0) {
      addresslist.map((data: any, index: number) =>
        data.addressType === "Home"
          ? this.setState({
              home1error: this.state.home1error =
                "An address is already saved as HOME",
              work1error: this.state.work1error = "",
            })
          : ""
      );
          } else {

            if(this.state.work1error) {
              this.setState({
                work1error: this.state.work1error = ""
              })
            }
          }
    } else if (e.target.id === "2") {
      this.setState({
        addressdroptype: this.state.addressdroptype = e.target.id,
      });
      let addresslist: any = this.state.addressarray;
      if(addresslist.length > 0) {
        addresslist.map((data: any, index: number) =>
          data.addressType === "Work"
            ? this.setState({
                home1error: this.state.home1error = "",
                work1error: this.state.work1error =
                  "An address is already saved as WORK",
              })
            : ""
        );
      } else {
       
        if(this.state.home1error) {
          this.setState({
            home1error: this.state.home1error = ""
          })
        }
      }
    } else if (e.target.id === "3") {
      this.setState({
        home1error: this.state.home1error = "",
        work1error: this.state.work1error = "",
        addressdroptype: this.state.addressdroptype = e.target.id,
      });
    }
  }

  /** Check Form Data Valid || InValid */
  validate() {
    let nameerror = "";
    let mobileerror = "";
    let flaterror = "";
    let reacherror = "";

    if (!this.state.name) {
      nameerror = "please enter name";
    }

    if (!this.state.flat) {
      flaterror = "please enter flat number";
    }

    if (!this.state.reach) {
      reacherror = "please enter reach address";
    }

    const mobileRegex: any = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!this.state.mobile) {
      mobileerror = "please enter mobile number";
    } else if (!mobileRegex.test(this.state.mobile)) {
      mobileerror = "please enter valid mobile number";
    }

    if (nameerror || mobileerror || flaterror || reacherror) {
      this.setState({
        nameerror,
        mobileerror,
        flaterror,
        reacherror,
      });
      return false;
    }
    return true;
  }

  /** Check Form Data Valid || InValid */
  validateDrop() {
    let name1error = "";
    let mobile1error = "";
    let flat1error = "";
    let reach1error = "";

    if (!this.state.name1) {
      name1error = "please enter name";
    }

    if (!this.state.flat1) {
      flat1error = "please enter flat number";
    }

    if (!this.state.reach1) {
      reach1error = "please enter reach address";
    }

    const mobileRegex: any = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!this.state.mobile1) {
      mobile1error = "please enter mobile number";
    } else if (!mobileRegex.test(this.state.mobile1)) {
      mobile1error = "please enter valid mobile number";
    }

    if (name1error || mobile1error || flat1error || reach1error) {
      this.setState({
        name1error,
        mobile1error,
        flat1error,
        reach1error,
      });
      return false;
    }
    return true;
  }

  /** Continue address */
  continueAddress() {
    if (this.state.addresstype === "1") {
      let addresslist: any = this.state.addressarray;
      addresslist.map((data: any, index: number) =>
        data.addressType === "Home"
          ? this.setState({
              homeerror: this.state.homeerror =
                "An address is already saved as HOME",
              workerror: this.state.workerror = "",
            })
          : ""
      );
    }
   
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        nameerror: "",
        mobileerror: "",
        flaterror: "",
        reacherror: "",
      });
      if (this.state.homeerror === "" && this.state.workerror === "") {
        if (this.state.selectblock === false) {
          console.log("showmap", this.state.showMap);
          this.setState({
            showMap: !this.state.showMap,
            selectblock: !this.state.selectblock,
          });
        } else {
          this.setState({
            showMap: !this.state.showMap,
          });
        }
      }
    }
  }

  /** Continue address */
  continueDropAddress() {
    if (this.state.addressdroptype === "1") {
      let addresslist: any = this.state.addressarray;
      addresslist.map((data: any, index: number) =>
        data.addressType === "Home"
          ? this.setState({
              home1error: this.state.home1error =
                "An address is already saved as HOME",
              work1error: this.state.work1error = "",
            })
          : ""
      );
    }
    if(this.state.addresstype === "1" && this.state.addressdroptype === "1") {
      this.setState({
        home1error: this.state.home1error =
          "An address is already saved as HOME",
          work1error: this.state.work1error = ""
      })
    } 
    if(this.state.addresstype === "2" && this.state.addressdroptype === "2") {
      this.setState({
        work1error: this.state.work1error =
          "An address is already saved as WORK",
          home1error: this.state.home1error = ""
      })
    }
    const isValid = this.validateDrop();
    if (isValid) {
      this.setState({
        name1error: "",
        mobile1error: "",
        flat1error: "",
        reach1error: "",
      });
      if (this.state.home1error === "" && this.state.work1error === "") {
        if (this.state.selectblock1 === false) {
          this.setState({
            showMap1: !this.state.showMap1,
            selectblock1: !this.state.selectblock1,
          });
        } else {
          this.setState({
            showMap1: !this.state.showMap1,
          });
        }
      }
    }
  }

  /**
   *
   * @param e : search pick up address
   */
  searchAddress(e: any) {
    const obj = {
      address: e.target.value,
    };
    this.props.searchAddressData(obj);
  }

  /**
   *
   * @param e : search drop address
   */
  searchAddressDrop(e: any) {
    const obj = {
      address: e.target.value,
    };
    this.props.searchAddressData(obj);
  }

  /**
   *
   * @param data : search address select data
   */
  addressSearchSelect(data: any) {
    Geocode.setApiKey("AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I");
    Geocode.fromAddress(data.main_text).then(
      (response: any) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
          lat: this.state.lat = lat,
          long: this.state.long = lng,
          show: !this.state.show,
          showMap: !this.state.showMap,
        });
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  /**
   *
   * @param data : search address drop select data
   */
  addressSearchDropSelect(data: any) {
    Geocode.setApiKey("AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I");
    Geocode.fromAddress(data.main_text).then(
      (response: any) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
          lat1: this.state.lat1 = lat,
          long1: this.state.long1 = lng,
          show1: !this.state.show1,
          showMap1: !this.state.showMap1,
        });
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  /**
   *
   * @param data : increment quantity in cart product
   */
  incrementQty(data: any) {
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
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
  }

  /**
   *
   * @param data : decrement quantity in cart product
   */
  decrementQty(data: any) {
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
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
  }

  /** Clear old cart */
  clearOldCart() {
    let cartdeletearray = [];
    let temparray: any = this.state.cartarray;
    for (var i = 0; i < temparray.length; i++) {
      cartdeletearray.push(temparray[i].orderCartID);
    }
    const obj: removeCartItemRequest = {
      moduleName: "OrderCart",
      id: cartdeletearray,
    };
    this.props.removeProductFromCart(obj);

    setTimeout(() => {
      this.setState({
        clearcart: false,
        show: true,
        displaydesc: this.state.displaydesc = true,
      });
      this.getCartData();
      localStorage.removeItem("merchantID");
    }, 50);
  }

  /** Clear Cart Model */
  clearCart() {
    return (
      <Modal
        className="modal-dialog-centered d-ct"
        show={this.state.clearcart}
        onHide={this.handleClearCart}
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
                Do you want to clear the cart and raise{" "}
                <strong>a new order?</strong>
              </strong>
            </p>
            <div className="flex-btn">
              <button className="cencel-btn" onClick={this.handleClearCart}>
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

  /** Cart Data Block */
  cartDataBlock() {
    return (
      <div className="place-order">
        <div className="right-box right-box12 order">
          <div className="pay-box">
            <div className="your-card">
              <h3>Your Cart ({localStorage.getItem("cartcount")} Items)</h3>
              <hr />
            </div>
            <div className="market-name"></div>
            {this.state.cartarray
              ? this.state.cartarray.length > 0 &&
                this.state.cartarray.map((cartdata: any, index: any) => (
                  <div className="flex-box" key={index}>
                    <div className="bdr-roud"></div>
                    <div className="item-title ">
                      <h4>{cartdata.productName}</h4>
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
                        onChange={this.addressChange}
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
          <div className="pay-box">
            <div className="flex-box flex-box2">
              <img src="images/edd-note.svg" alt="" />
              <textarea
                value="Any instructions for the delivery partner?"
                onChange={() => console.log("data")}
              >
                Any instructions for the delivery partner?
              </textarea>
            </div>
          </div>
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
                      (sum: number, i: any) => (sum += i.sellingPrice),
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
                      (sum: number, i: any) => (sum += i.sellingPrice),
                      0
                    )
                  : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /** Description Block */
  descriptionBlock() {
    return (
      <div className="right-box">
        <div className="dtl-box">
          <h3 className="title-dtl">Some do’s & Dont’s</h3>
          <div className="discr-box">
            <div className="discr-1">
              <span className="bold-tt">No Purchases - </span>
              <span>
                Delivery partner would not be able to make any purchase
              </span>
            </div>
            <div className="discr-1">
              <span className="bold-tt">Package Weight - </span>
              <span>
                We cannot deliver items that can’t be easily carried on bike
              </span>
            </div>
            <div className="discr-1">
              <span className="bold-tt">No Autos/Cabs - </span>
              <span>
                We will not be able to get something transported via these
              </span>
            </div>
            <div className="discr-1">
              <span className="bold-tt">Restricted/Illegal Item - </span>
              <span>Please don’t hand over any restricted item</span>
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
    );
  }

  /** PickUp Model */
  pickup() {
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
            <div className="map_main">
              <div className="search-data">
                <input
                  type="text"
                  name="searchvalue"
                  className="src-input"
                  placeholder="Enter area, building name"
                  onKeyUp={this.searchAddress}
                />
              </div>
              {/* <SelectSearch
                options={[{ value: "rajkot", name: "Rajkot" }]}
                placeholder="Search for a location"
                search
                // onChange={this.onlocationSelectId}
              /> */}
              <div className="select-map-location">
                <span className="location-img-1">
                  <img
                    src={require("../../assets/images/track-location.svg")}
                  />
                </span>
                <p onClick={this.mapOpen}>Select Location Via Map</p>
              </div>
              {this.state.searchSection === false ? (
                <div className="Map_Address">
                  <span className="map-address-pc">Save Addresses</span>
                  {this.state.addressarray
                    ? this.state.addressarray.length > 0 &&
                      this.state.addressarray.map(
                        (address: any, index: number) => (
                          <div
                            className="mm-1"
                            key={index}
                            onClick={() => this.addressSelect(address)}
                          >
                            {this.state.searchSection === false ? (
                              <img
                                src={require("../../assets/images/home-icon.png")}
                              />
                            ) : (
                              <img
                                src={require("../../assets/images/search.svg")}
                              />
                            )}
                            <div className="add-map">
                              <div className="text-address">
                                {address.addressType}
                              </div>
                              <div className="text-address-1">
                                {address.address}
                              </div>
                            </div>
                          </div>
                        )
                      )
                    : ""}
                </div>
              ) : (
                <div className="Map_Address">
                  <span className="map-address-pc">Search Results</span>
                  {this.state.searchaddress
                    ? this.state.searchaddress.length > 0 &&
                      this.state.searchaddress.map(
                        (address: any, index: number) => (
                          <div
                            className="mm-1"
                            key={index}
                            onClick={() => this.addressSearchSelect(address)}
                          >
                            {this.state.searchSection === false ? (
                              <img
                                src={require("../../assets/images/home-icon.png")}
                              />
                            ) : (
                              <img
                                src={require("../../assets/images/search.svg")}
                              />
                            )}
                            <div className="add-map">
                              <div className="text-address">
                                {address.main_text}
                              </div>
                              <div className="text-address-1">
                                {address.secondary_text}
                              </div>
                            </div>
                          </div>
                        )
                      )
                    : ""}
                </div>
              )}
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
                <MyMapComponent
                  isMarkerShown={true}
                  lat={this.state.lat}
                  long={this.state.long}
                />
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
                            name="flat"
                            value={this.state.flat ? this.state.flat : ""}
                            className="form-control"
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from3"
                          >
                            FLAT,FLOR,BUILDING NAME*
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.flaterror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from4"
                            name="reach"
                            value={this.state.reach ? this.state.reach : ""}
                            onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from4"
                          >
                            HOW TO REACH
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.reacherror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from1"
                            name="name"
                            className="form-control"
                            value={this.state.name ? this.state.name : ""}
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from1"
                          >
                            CONTACT PERSON NAME
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.nameerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from2"
                            name="mobile"
                            maxLength={10}
                            value={this.state.mobile ? this.state.mobile : ""}
                            className="form-control"
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from2"
                          >
                            CONTACT DETAIL
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.mobileerror}
                          </div>
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
                                  checked={
                                    this.state.addresstype === "1"
                                      ? true
                                      : false
                                  }
                                  onChange={this.changeAddress}
                                  name="radio"
                                  // disabled={this.state.homedisabled === true ? true : false}
                                />
                                <span className="checkmark"></span>
                              </label>
                              <div
                                className="text-danger"
                                style={{ fontSize: "10px" }}
                              >
                                {this.state.homeerror}
                              </div>
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
                                  onChange={this.changeAddress}
                                  name="radio"
                                  // disabled={this.state.workdisabled === true ? true : false}
                                />
                                <span className="checkmark"></span>
                              </label>
                              <div
                                className="text-danger"
                                style={{ fontSize: "10px" }}
                              >
                                {this.state.workerror}
                              </div>
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
                                  onChange={this.changeAddress}
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
                    onClick={this.continueAddress}
                  >
                    Continue
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

  /** DropUp Model */
  dropup() {
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          show={this.state.show1}
          onHide={this.handleCloseDrop}
        >
          <Modal.Header closeButton>
            <Modal.Title>Search Drop Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="map_main">
              <div className="search-data">
                <input
                  type="search"
                  name="search"
                  className="src-input"
                  placeholder="Enter area, building name"
                  onKeyUp={this.searchAddressDrop}
                />
              </div>
              <div className="select-map-location">
                <span className="location-img-1">
                  <img
                    src={require("../../assets/images/track-location.svg")}
                  />
                </span>
                <p onClick={this.mapOpenDrop}>Select Location Via Map</p>
              </div>
              {this.state.searchSection === false ? (
                <div className="Map_Address">
                  <span className="map-address-pc">Save Addresses</span>
                  {this.state.addressarray
                    ? this.state.addressarray.length > 0 &&
                      this.state.addressarray.map(
                        (address: any, index: number) => (
                          <div
                            className="mm-1"
                            key={index}
                            onClick={() => this.addressSelectDrop(address)}
                          >
                            <img
                             src={require("../../assets/images/home-icon.png")}
                              
                            />
                            <div className="add-map">
                              <div className="text-address">
                                {address.addressType}
                              </div>
                              <div className="text-address-1">
                                {address.address}
                              </div>
                            </div>
                          </div>
                        )
                      )
                    : ""}
                </div>
              ) : (
                <div className="Map_Address">
                  <span className="map-address-pc">Search Results</span>
                  {this.state.searchaddress
                    ? this.state.searchaddress.length > 0 &&
                      this.state.searchaddress.map(
                        (address: any, index: number) => (
                          <div
                            className="mm-1"
                            key={index}
                            onClick={() =>
                              this.addressSearchDropSelect(address)
                            }
                          >
                            <img
                             src={require("../../assets/images/search.svg")}
                            />
                            <div className="add-map">
                              <div className="text-address">
                                {address.main_text}
                              </div>
                              <div className="text-address-1">
                                {address.secondary_text}
                              </div>
                            </div>
                          </div>
                        )
                      )
                    : ""}
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <div className="main-package">
          <Modal
            className="modal-dialog-centered main-package"
            show={this.state.showMap1}
            onHide={this.handleCloseMapDrop}
          >
            <Modal.Header closeButton>
              <div className="Back-Arrow">
                <i
                  className="fas fa-arrow-circle-left"
                  onClick={this.handleCloseMapDrop}
                ></i>
              </div>
              <Modal.Title>Set Drop Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <MyMapDropComponent
                  isMarkerShown={true}
                  lat={this.state.lat1}
                  long={this.state.long1}
                />
              </div>
              <div className="p-box11">
                <div className="edit-dtle">
                  <form className="form-1">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from31"
                            name="flat1"
                            value={this.state.flat1 ? this.state.flat1 : ""}
                            className="form-control"
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from31"
                          >
                            FLAT,FLOR,BUILDING NAME*
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.flat1error}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from41"
                            name="reach1"
                            value={this.state.reach1 ? this.state.reach1 : ""}
                            onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from41"
                          >
                            HOW TO REACH
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.reach1error}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from111"
                            name="name1"
                            className="form-control"
                            value={this.state.name1 ? this.state.name1 : ""}
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from111"
                          >
                            CONTACT PERSON NAME
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.name1error}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from222"
                            name="mobile1"
                            maxLength={10}
                            value={this.state.mobile1 ? this.state.mobile1 : ""}
                            className="form-control"
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from222"
                          >
                            CONTACT DETAIL
                          </label>
                          <div
                            className="text-danger"
                            style={{ fontSize: "10px" }}
                          >
                            {this.state.mobile1error}
                          </div>
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
                                  checked={
                                    this.state.addressdroptype === "1"
                                      ? true
                                      : false
                                  }
                                  onChange={this.changeDropAddress}
                                  name="radio"
                                  // disabled={this.state.homedisabled === true ? true : false}
                                />
                                <span className="checkmark"></span>
                              </label>
                              <div
                                className="text-danger"
                                style={{ fontSize: "10px" }}
                              >
                                {this.state.home1error}
                              </div>
                            </div>
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Work </span>
                                <input
                                  type="radio"
                                  id="2"
                                  checked={
                                    this.state.addressdroptype === "2"
                                      ? true
                                      : false
                                  }
                                  onChange={this.changeDropAddress}
                                  name="radio"
                                  // disabled={this.state.workdisabled === true ? true : false}
                                />
                                <span className="checkmark"></span>
                              </label>
                              <div
                                className="text-danger"
                                style={{ fontSize: "10px" }}
                              >
                                {this.state.work1error}
                              </div>
                            </div>
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Other </span>
                                <input
                                  type="radio"
                                  id="3"
                                  checked={
                                    this.state.addressdroptype === "3"
                                      ? true
                                      : false
                                  }
                                  onChange={this.changeDropAddress}
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
                    onClick={this.continueDropAddress}
                  >
                    Continue
                  </button>

                  <button
                    type="button"
                    className="btb-text"
                    onClick={this.handleCloseMapDrop}
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

  /** Main Package Form */
  packageForm() {
    return (
      <div className="add-address">
        <div className="bdr-left"></div>
        <div className="address-box1">
          <div className="small-tt">Pickup location</div>
          {this.state.selectblock === false ? (
            <div className="pickup-location" onClick={this.modelOpen}>
              Search pickup location
            </div>
          ) : (
            <>
              <div className="pickup-location" onClick={this.modelOpen}>
                {this.state.selectedaddress ? (
                  <span>
                    <b>{this.state.selectedaddress}</b>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <p
                className="mb-0"
                style={{ cursor: "pointer", fontSize: "14px" }}
                onClick={this.modelOpen}
              >
                <span>
                  <strong>{this.state.name}</strong>
                </span>{" "}
                <span>({this.state.mobile})</span>
              </p>
            </>
          )}
          <div className="btn-line"></div>
          <div className="circle-box">
            { 
            this.state.selectedaddress ? (
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
            ) : ('')
            } 
           
          </div>
          <div className="line-dot-1"> </div>
        </div>

        {/** Clear Cart Model */}
        {this.clearCart()}

        <div
          className="address-box1"
          style={{
            pointerEvents: !this.state.selectedaddress ? "none" : "visible",
          }}
        >
          <div className="small-tt">Drop point</div>
          {this.state.selectblock1 === false ? (
            <div className="pickup-location" onClick={this.modelOpenDrop}>
              Search drop location
            </div>
          ) : (
            <>
              <div className="pickup-location" onClick={this.modelOpenDrop}>
                {this.state.selectedaddressdrop ? (
                  <span>
                    <b>{this.state.selectedaddressdrop}</b>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <p
                className="mb-0"
                style={{ cursor: "pointer", fontSize: "14px" }}
                onClick={this.modelOpenDrop}
              >
                <span>
                  <strong>{this.state.name1}</strong>
                </span>{" "}
                <span>({this.state.mobile1})</span>
              </p>
            </>
          )}

          <div className="btn-line"></div>
          <div className="circle-box">
            { 
            this.state.selectedaddressdrop ? (
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
            ) : ('')
            } 
          </div>
          <div className="line-dot-2"> </div>
      </div>
      </div>
    );
  }

  handleSameAddress() {
    this.setState({
      sameaddress:!this.state.sameaddress
    })
  }

  sameaddress() {
    return(
      <Modal
      className="modal-dialog-centered d-ct"
      show={this.state.sameaddress}
      onHide={this.handleSameAddress}
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="clear-cart">
          <img
            src={require("../../assets/images/location.svg")}
            alt="cart icon"
          />
          <h1>Closeby locations detected</h1>
          <p>
            <strong>
            The pickup and drop addresses are exactly same. Please check the locations{" "}
            </strong>
          </p>
          <div className="flex-btn">
            <button className="cencel-btn" onClick={this.handleSameAddress}>
              Ok
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
    )
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

                    {/** Main Package Form */}
                    {this.packageForm()}

                    {/** Instructions */}
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
                  {this.sameaddress()}
                  {this.state.displaydesc === false
                    ? this.cartDataBlock()
                    : this.descriptionBlock()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** Pick Up Model */}
        {this.pickup()}

        {/** Drop Up Model */}
        {this.dropup()}
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
  searchAddressDetails: state.sendpackage.searchaddressdata,
  getCartDetail: state.product.getcartdetails,
});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  /** Get Address List */
  getAddressList: (data: any) =>
    dispatch(placeOrderService.getAddressList(data)),

  /** Search Address List */
  searchAddressData: (data: any) =>
    dispatch(packageService.searchAddressData(data)),

  getcartData: (data: any) => dispatch(productService.getcartData(data)),

  updateToCart: (data: any, id: any) =>
    dispatch(productService.updateToCart(data, id)),

  /** Remove Product form cart */
  removeProductFromCart: (data: any) =>
    dispatch(productService.removeProductFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
