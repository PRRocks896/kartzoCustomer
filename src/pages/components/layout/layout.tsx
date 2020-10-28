import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
// import ProtectedRoute from 'react-protected-route-component'

class Layout extends React.Component {
  constructor(props: any) {
    super(props);
  }

  /** Render DOM */
  render() {
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
