import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
// import ProtectedRoute from 'react-protected-route-component'

class Layout extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
   console.log("props",this.props.children);
    return (
      <>
        <Header {...this.props}/>
        {this.props.children}
        <Footer {...this.props}/>
      </>
    );
  }
}

export default Layout;
