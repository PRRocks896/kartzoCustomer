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
import { productService, loginService } from "../../redux/actions";
import { getCartListRequest } from "../../modelController";
import { UserAPI } from "../../service";

class Home extends React.Component<{
  history: any;
  getcartData: any;
  getCommonToken: any;
}> {
  /** Constrctor Call */
  constructor(props: any) {
    super(props);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.home + getAppName();
    EventEmitter.dispatch("isShow", false);
    EventEmitter.dispatch("isShowFooter", false);
    if (localStorage.getItem("token")) {
      this.getCartData();
    }
    this.getCommonTokenData();
  }

  async getCommonTokenData() {
    const obj = {
      Id: "2120d758-b8bd-42cd-a265-a3ca30845e2f",
      userName: "b3EB+9LJEVMrXNFQ6ZekiPGVTSAirzq1xcYlUViCxic=",
      Password: "O8QziWH1Sq75LO+lH9Q9AqB/HbgvlglvDYPUXykFRvM=",
      Key: "digitalvicharcommonkartzoapi"
    };

    const GetCommonToken = await UserAPI.getCommonTokenData(obj);
    console.log("getCommondata",GetCommonToken);

    if(GetCommonToken.data.status === 200) {
      localStorage.setItem('adminToken',GetCommonToken.data.token);
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
    const home:any = this.props;
    if (prevProps.getCartDetail !== home.getCartDetail) {
      this.getCartAllProductData(home.getCartDetail);
    }
  }

  /**
   *
   * @param data : get total count of cart item
   */
  getCartAllProductData(data: any) {
    localStorage.setItem("cartcount", data.totalcount ? data.totalcount : 0);
    EventEmitter.dispatch("count", data.totalcount ? data.totalcount : 0);
  }

  /** Render DOM */
  render() {
    return (
      <>
        <Banner {...this.props} />
        <Categories />
        <AppLink />
        <Features {...this.props} />
        <Testimonials {...this.props} />
        <Information {...this.props} />
      </>
    );
  }
}

/**
 *
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  getCartDetail: state.product.getcartdetails,
});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  /** Get cart data */
  getcartData: (data: any) => dispatch(productService.getcartData(data)),

  /** Get cart data */
  getCommonToken: (data: any) => dispatch(loginService.getCommonToken(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
