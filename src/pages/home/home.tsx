import React from "react";
import "./home.css";
import Banner from "./banner/banner";
import Categories from "./categories/categories";
import AppLink from "./app-link/app-link";
import Features from "./features/feature";
import Testimonials from "./testimonials/testimonials";
import Information from "./information/information";
import EventEmitter from "../../event";
import constant from "../constant/constant";
import { getAppName } from "../utils";
import { connect } from "react-redux";
import { productService } from "../../redux/actions";
import { getCartListRequest } from "../../modelController";

class Home extends React.Component<{history:any,getcartData:any}> {
  
  /** Constrctor Call */
  constructor(props: any) {
    super(props);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.home + getAppName();
    EventEmitter.dispatch('isShow', false);
    EventEmitter.dispatch('isShowFooter', false);
    if (localStorage.getItem("token")) {
      this.getCartData();
    }
  }

  /**
   * 
   * @param searchText : search data
   * @param page : page number
   * @param size : per page value display
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
  componentWillReceiveProps(nextProps: any) {
    // console.log("props", nextProps);
    if (nextProps.getCartDetail) {
      this.getCartAllProductData(nextProps.getCartDetail);
    }
  }

  /**
   * 
   * @param data : get total count of cart item
   */
  getCartAllProductData(data: any) {
    localStorage.setItem("cartcount", data.totalcount ? data.totalcount : 0);
    EventEmitter.dispatch('count', data.totalcount ? data.totalcount : 0);
  }

  /** Render DOM */
  render() {
    return (
      <>
        <Banner {...this.props}/>
        <Categories/>
        <AppLink {...this.props}/>
        <Features {...this.props}/>
        <Testimonials {...this.props}/>
        <Information {...this.props}/>
      </>
    );
  }
}

/**
 * 
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  getCartDetail: state.product.getcartdetails
});

/**
 * 
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({

  /** Get cart data */
  getcartData: (data: any) => dispatch(productService.getcartData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
