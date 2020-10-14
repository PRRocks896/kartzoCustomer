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

class Home extends React.Component<{history:any}> {
  constructor(props: any) {
    super(props);
 
  }

  componentDidMount() {
    document.title = constant.home + getAppName();
    EventEmitter.dispatch('isShow', false);
    EventEmitter.dispatch('isShowFooter', false);
  }


  render() {
    return (
      <>
        <Banner {...this.props}/>
        <Categories {...this.props}/>
        <AppLink {...this.props}/>
        <Features {...this.props}/>
        <Testimonials {...this.props}/>
        <Information {...this.props}/>
      </>
    );
  }
}

export default Home;
