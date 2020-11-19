import React from "react";
import "./footer.css";
import { footer } from "../helper/images";
import { Link } from "react-router-dom";
import EventEmitter from "../../../event";
import constant from "../../constant/constant";
import { layoutStateRequest } from "../../../modelController";
import { connect } from "react-redux";
import { commonService } from "../../../redux";
// import ProtectedRoute from 'react-protected-route-component'

class Footer extends React.Component<{getFooterData:any}> {

  /** Footer state */
  footerState : layoutStateRequest = constant.footerPage.state;
  state = {
    isShow: this.footerState.isShow,
    footercitydata:this.footerState.footercitydata,
    footersocialdata:this.footerState.footersocialdata
  };

  /** Constructor */
  constructor(props: any) {
    super(props);
    EventEmitter.subscribe("isShowFooter", (data: any) => {
      this.setState({
        isShow: this.state.isShow = data,
      });
    });
  }

  /** Page Render Call */
  componentDidMount() {
    this.props.getFooterData();
  }

  
  /**
   * 
   *
   * @param nextProps : get updated props value
   */
  componentWillReceiveProps(nextProps: any) {
    console.log("props", nextProps);
    if (nextProps.footerDetail) {
      this.getFooterCityData(nextProps.footerDetail);
    }
  }

/**
 * 
 * @param data : get footer city data 
 */
  getFooterCityData(data:any) {
    this.setState({
      footercitydata:this.state.footercitydata = data
    })
    console.log("footer",this.state.footercitydata);
  }


  /** Render DOM */
  render() {
    if (this.state.isShow === false) {
      return (
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="logo-footer">
                  <img src={footer.logo} alt="3" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <h3 className="tt-1">Kartzo</h3>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                    {/* <a href="#"></a> */}
                  </li>
                  <li>
                    <Link to="/carrers">Jobs</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li>
                    <Link to="/partners">Kartzo for partner</Link>
                  </li>
                  <li>
                    <Link to="/business">Kartzo for business</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h3 className="tt-1">Serviceable Cities</h3>
                {
                  this.state.footercitydata ? (
                    this.state.footercitydata.length > 0 && this.state.footercitydata.map((data:any,index:number) => (
                      <ul key={index}>
                      <li>
                        <Link to={`/${data.name.toLowerCase()}`}>{data.name}</Link>
                      </li>
                    </ul>
                    ))
                  ) : ('')
                }
              </div>

              <div className="col-md-3">
                <h3 className="tt-1">Get in touch</h3>
                <ul>
                  <li>
                    <a href="#">Email</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
    } else {
      return <></>;
    }
  }
}

/**
 * 
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  footerDetail: state.footer.footerdata
});

/**
 * 
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({

  /** Get Footer Data */
  getFooterData: () =>
    dispatch(commonService.getFooterData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
