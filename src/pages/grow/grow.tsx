import React from "react";
import "./grow.css";
import EventEmitter from "../../event";
import { scrollToTop } from "../utils";

class Grow extends React.Component {
  /** Constructor call */
  constructor(props: any) {
    super(props);
  }

  /** Page Render Call */
  componentDidMount() {
    scrollToTop();
    EventEmitter.dispatch("isShow", false);
    EventEmitter.dispatch("isShowFooter", false);
  }

  /** Render DOM */
  render() {
    return (
      <>
    
    <section className="grow-google-bnr">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="left-box">
                        <h1 className="tt1">Have orders but <br /> don’t have delivery staff? </h1>
                        <div className="bdr-tt">
                            <span className="big"></span>
                            <span className="small"></span>
                        </div>
                        <p>Does your business need on-demand, hyperlocal deliveries?
                            Kartzo for Business is the one-stop solution you’re looking
                            for to reach your customers and expand your business.</p>
                        <div className="btn-1">
                            <a href="#">Sign up for free<i className="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="growgoogle-why-kartzo">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <img className="maxwidth100" src={require('../../assets/images/why-kartzo-img1.png')} alt="" />
                </div>
                <div className="col-md-12 col-lg-6">
                    <h1 className="tt1">Why Kartzo?</h1>
                    <div className="bdr-tt">
                        <span className="big"></span>
                        <span className="small"></span>
                    </div>
                    <p className="tt-text">With Kartzo you get the advantage of...</p>
                    <ul className="listmenu">
                        <li><img src={require('../../assets/images/right-arrow.svg')} alt=""/>Getting the first 3 deliveries free</li>
                        <li><img src={require('../../assets/images/right-arrow.svg')} alt=""/>Step-by-step guidance on growing your business online</li>
                        <li><img src={require('../../assets/images/right-arrow.svg')} alt=""/>Relevant tools to maximize your reach and earnings per order</li>
                        <li><img src={require('../../assets/images/right-arrow.svg')} alt=""/>24/7 Merchant Support in the language of your choice</li>
                    </ul>
                </div>
               
            </div>
        </div>
    </section>
    <section className="growgoogle-signupfee">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="title">Zero sign up fees<br />
                        instant registration</h2>
                        <div className="btn-1">
                            <a href="#">Sign up for free<i className="fas fa-angle-right"></i></a>
                        </div>
                        <span className="small-text">Offer valid till Dec 31st, 2020, T&C Apply</span>
                </div>
            </div>
        </div>
    </section>
    <section className="some-answers">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-7">
                    <h1 className="tt1">Still not sure? Here are some answers for your queries</h1>
                    <div className="bdr-tt">
                        <span className="big"></span>
                        <span className="small"></span>
                    </div>
                    <div className="box-1">
                        <div className="left-content">
                            <span className="list1">01</span>
                        </div>
                        <div className="right-content">
                            <h3 className="small-title">Need a pickup and drop support?</h3>
                            <p>Kartzo delivers on-demand anywhere within your city within an hour.</p>
                        </div>
                    </div>
                    <div className="box-1">
                        <div className="left-content">
                            <span className="list1">02</span>
                        </div>
                        <div className="right-content">
                            <h3 className="small-title">Have orders but don’t have delivery staff?</h3>
                            <p>With more than 11K delivery partners across India, we’ve got you covered with deliveries 24/7 and live tracking dashboards so that you never miss an order.</p>
                        </div>
                    </div>
                    <div className="box-1">
                        <div className="left-content">
                            <span className="list1">03</span>
                        </div>
                        <div className="right-content">
                            <h3 className="small-title">Have a store but not getting orders?</h3>
                            <p>You can list on Kartzo and get access to millions of users instantly by signing up <a href="#">here</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 ">
                    <div className="img-bg">
                        <img src={require('../../assets/images/some-answers.jpg')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="local-businesses">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 title-box-top">
                    <h1 className="tt1">In the last few months, local businesses
                        partnered with Kartzo have experienced</h1>
                    <div className="bdr-tt">
                        <span className="big"></span>
                        <span className="small"></span>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="box1">
                        <img src={require('../../assets/images/fast-deliveries.png')} alt="fast-deliveries"/>
                        <h3 className="sub-title">Super Fast Deliveries</h3>
                        <p>Due to lesser traffic and congestion, delivery partners are able to fulfill orders within 23 mins, on average</p>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="box1">
                        <img src={require('../../assets/images/order-growth.png')} alt="fast-deliveries"/>
                        <h3 className="sub-title">Online Order Growth</h3>
                        <p>Sellers on Kartzo have witnessed 4x increase in average order volumes</p>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="box1">
                        <img src={require('../../assets/images/increase-revenue.png')} alt="fast-deliveries"/>
                        <h3 className="sub-title">Increase in Revenue</h3>
                        <p>Grocery stores listed on Kartzo increased revenues by 150%, on average</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="safety-priority">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                    <img  className="maxwidth100" src={require('../../assets/images/safety-priority.jpg')} alt="" />
                </div>
                <div className="col-md-12 col-lg-7">
                    <h1 className="tt1">Your safety is our
                        top priority</h1>
                    <div className="bdr-tt">
                        <span className="big"></span>
                        <span className="small"></span>
                    </div>
                    <p className="tt-text">We are taking stringent safety measures to ensure that your customers and store staff always experience safe and secure deliveries. With regular temperature and health checks, Kartzo delivery partners always maintain...</p>
                    <ul className="listmenu">
                        <li><img src={require('../../assets/images/social-distancing.png')} alt=""/>Social Distancing at stores</li>
                        <li><img src={require('../../assets/images/zero-contact.png')} alt=""/>Zero-contact-deliveries</li>
                        <li><img src={require('../../assets/images/sanitisation.png')} alt=""/>Sanitisation and hygiene</li>
                    </ul>
                </div>
               
            </div>
        </div>
    </section>
    <section className="join-community">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 title-box-top">
                    <h1 className="tt1">Join our community of over 10,000 merchants</h1>
                    <div className="bdr-tt">
                        <span className="big"></span>
                        <span className="small"></span>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="video-box1">
                        <a href="#">
              
                            <div className="img-box1" style={{backgroundImage: `url(${require('../../assets/images/portrait-smiling-owner-standing-bakery-shop.jpg')})`,backgroundSize:'cover',marginTop:'30px'}}>
                                
                            </div>
                            <img className="play-btn" src={require('../../assets/images/play-btn.png')} alt="play-btn"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="video-box1">
                        <a href="#">
                        <div className="img-box1" style={{backgroundImage: `url(${require('../../assets/images/business-man-owner-company-office.jpg')})`,backgroundSize:'cover',marginTop:'30px'}}>

                            
                            </div>
                            <img className="play-btn" src={require('../../assets/images/play-btn.png')} alt="play-btn"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="video-box1">
                        <a href="#">
                        <div className="img-box1" style={{backgroundImage: `url(${require('../../assets/images/business-woman-bussiness-man-colleagues-working-laptop.jpg')})`,backgroundSize:'cover',marginTop:'30px'}}>
                          
                              
                            </div>
                            <img className="play-btn" src={require('../../assets/images/play-btn.png')} alt="play-btn"/>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section className="more-questions">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <img src={require('../../assets/images/more-questions.png')} alt="" />
                    <h1 className="tt1">Have more questions?</h1>
                    <p>Enter your phone number and<br />
                        email ID and we’ll get in touch.</p>
                    <a className="chat-us" href="#">Chat with Us</a>
                    <hr />
                    <a className="partnership-tt" href="#">A partnership with Grow with Google <span className="arrow">{'>'}</span></a>
                </div>
            </div>
        </div>
    </section>
      </>
    );
  }
}

export default Grow;
