import React from "react";
import { search } from "../components/helper/images";
import { getAppName, scrollToTop } from "../utils";
import "./searchcity.css";
import constant from "../constant/constant";
import AppLink from "../home/app-link/app-link";
import Information from "../home/information/information";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { searchcityStateRequest } from "../../modelController";

class SearchCity extends React.Component<{ location: any }> {
  searchcityState: searchcityStateRequest = constant.searchCityPage.state;
  state = {
    slugname: this.searchcityState.slugname,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    EventEmitter.dispatch("isShow", false);
    document.title = constant.searchcity + getAppName();
    const slug = this.props.location.pathname.split("/")[1];
    if (slug) {
      this.setState({
        slugname: slug,
      });
    }
    scrollToTop();
  }

  render() {
    return (
      <>
        <section className="banners-src-city">
          <div className="container-fluid">
            <div className="slider-box">
              <h1>Welcome to {this.state.slugname.toLocaleUpperCase()} </h1>
              <div className="bdr-tt">
                <span className="big"></span>
                <span className="small"></span>
              </div>
              <p>
                Why step out when you can get everything delivered home with the
                tap of a button? Mumbai’s favourite delivery app gets you Food,
                Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat &
                Fish, Health & Wellness, Gifts and Send Packages from one end of
                the city to the other. From your local kirana stores to your
                favourite brands, grocery shopping to your forgotten charger, we
                are always on the move for you. Why worry about your chores,
                when you can get it all Dun!
              </p>
            </div>
          </div>
        </section>

        <section className="want-done">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tt1">What do you want to get done?</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
              </div>
            </div>
            <div className="main-div">
              <div className="row">
                {constant.imagearray.map((img: any, index: number) => (
                  <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                    <Link to="/find-store">
                      <div
                        className="box-1"
                        style={{
                          border: `1px solid ${constant.categoryColor[index].clr}`,
                        }}
                      >
                        <div
                          className="bdr-bottom"
                          style={{
                            background: `${constant.categoryColor[index].bclr}`,
                          }}
                        ></div>
                        <img src={img.src} alt={img.alt} />
                        <div className="tt-1">{img.name}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="bdr-1">
                  <div className="tt-box">
                    <div className="l-box">
                      <img src={search.group1} alt="" />
                      <h3 className="tt-1">Trending grocery stores</h3>
                      <span className="text-1">
                        Discover the best places around your area
                      </span>
                    </div>
                    <div className="btn-1 hide-res-btn">
                      <a href="#">
                        View All <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.brq5otcv} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.aa832a49} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.brq5otcv} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.aa832a49} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row show-res-btn">
                  <div className="col-md-12">
                    <div className="btn-1">
                      <a href="#">
                        View All <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-1 product-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="bdr-1">
                  <div className="tt-box">
                    <div className="l-box">
                      <img src={search.group2} alt="" />
                      <h3 className="tt-1">Trending Fruits & Vegetables</h3>
                      <span className="text-1">
                        Discover the best places around your area
                      </span>
                    </div>
                    <div className="btn-1 hide-res-btn">
                      <a href="#">
                        View All <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.brq5otcv} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.aa832a49} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.brq5otcv} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-4">
                    <a href="">
                      <div className="box-1">
                        <img src={search.aa832a49} alt="" />
                        <div className="box-text">
                          <h4>Godrej Nature's Basket P....</h4>
                          <div className="small-text">Mango Drink, Kulfi</div>
                          <div className="big-text">
                            Veera Desai Area, Andheri West
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="row show-res-btn">
                  <div className="col-md-12">
                    <div className="btn-1">
                      <a href="#">
                        View All <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="location">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tt1">Popular locations in Mumbai</h1>
                <div className="bdr-tt">
                  <span className="big"></span>
                  <span className="small"></span>
                </div>
                <p>If it can fit on a bike, we can get it done</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="location-list">
                  <a href="#">Aarey Jungle</a>
                  <a href="#">Aarey Jungle</a>
                  <a href="#">Aarey Jungle</a>
                  <a href="#">Aarey Jungle</a>
                  <a href="#">Aarey Jungle</a>
                  <a href="#">Aarey Jungle</a>
                  <a href="#">Aarey Jungle</a>
                  <a href="#">Aarey Jungle</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AppLink />
        <Information />
      </>
    );
  }
}

export default SearchCity;
