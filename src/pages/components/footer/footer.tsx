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

class Footer extends React.Component<{getFooterData:any,getFooterLinkData:any}> {

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
    // this.props.getFooterData();
    this.props.getFooterLinkData();
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
    if (nextProps.footerLinkDetail) {
      this.getFooterLinksData(nextProps.footerLinkDetail);
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
  }

  /**
 * 
 * @param data : get footer link data 
 */
getFooterLinksData(data:any) {
  this.setState({
    footersocialdata:this.state.footersocialdata = data
  })
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
                  <Link to="/terms">Terms & Conditions</Link>
                  </li>
                  <li>
                  <Link to="/policy">Privacy Policy </Link>
                  </li>
                  <li>
                    <Link to="/partners">Kartzo for partner</Link>
                  </li>
                  <li>
                    <Link to="/business">Kartzo for business</Link>
                  </li>
                  <li>
                    <Link to="/grow">Grow With Google</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h3 className="tt-1">Serviceable Cities</h3>
                {/* <ul>
                    <li><a href="#">Rajkot</a></li>
                    <li><a href="#">Surat</a></li>
                    <li><a href="#">Ahmedabad</a></li>
                    <li><a href="#">Baroda</a></li>
                </ul> */}
                {
                  this.state.footercitydata ? (
                    this.state.footercitydata.length > 0 && this.state.footercitydata.map((data:any,index:number) => (
                      <ul key={index}>
                      <li>
                        <Link to={{pathname: `/${data.name.toLowerCase()}`, state: { cityid: parseInt(data.value) }}}>{data.name}</Link>
                      </li>
                    </ul>
                    ))
                  ) : (
                   ''
                  )
                }
              </div>

              <div className="col-md-3">
                <h3 className="tt-1">Get in touch</h3>
                {
                  this.state.footersocialdata ? (
                    this.state.footersocialdata.length > 0 && this.state.footersocialdata.map((data:any,index:number) => (
                      <ul key={index}>
                        {
                          data.value === "Email"  ? (
                            <li>
                           <a href="mailto:support@dunzo.in">{data.value}</a>
                          </li>
                          ) : (
                            <li>
                            <Link to={`/${data.name}`} target="_blank">{data.value}</Link>
                          </li>
                          )
                        }
                     
                    </ul>
                    ))
                  ) : ('')
                }
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
  footerDetail: state.footer.footerdata,
  footerLinkDetail: state.footer.footerlinkdata
});

/**
 * 
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({

  /** Get Footer Data */
  getFooterData: () =>
    dispatch(commonService.getFooterData()),

    /** Get Footer Link Data */
    getFooterLinkData: () =>
  dispatch(commonService.getFooterLinkData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
