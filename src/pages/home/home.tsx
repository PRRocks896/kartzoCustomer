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

class Home extends React.Component<{history:any,getcartData:any}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    document.title = constant.home + getAppName();
    EventEmitter.dispatch('isShow', false);
    EventEmitter.dispatch('isShowFooter', false);
    if (localStorage.getItem("token")) {
      this.getCartData();
    }
  }

  getCartData(searchText: string = "", page: number = 1, size: number = 20) {
    const obj = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
    };
    this.props.getcartData(obj);
  }

  componentWillReceiveProps(nextProps: any, newState: any) {
    console.log("props", nextProps);
    if (nextProps.getCartDetail) {
      this.getCartAllProductData(nextProps.getCartDetail);
    }
  }

  getCartAllProductData(data: any) {
    localStorage.setItem("cartcount", data.totalcount);
    EventEmitter.dispatch('count', data.totalcount);
  }

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


const mapStateToProps = (state: any) => ({
  getCartDetail: state.product.getcartdetails
});

const mapDispatchToProps = (dispatch: any) => ({
  getcartData: (data: any) => dispatch(productService.getcartData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
