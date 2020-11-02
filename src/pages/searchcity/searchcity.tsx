import React from "react";
import { search } from "../components/helper/images";
import { getAppName, scrollToTop } from "../utils";
import "./searchcity.css";
import constant from "../constant/constant";
import AppLink from "../home/app-link/app-link";
import Information from "../home/information/information";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { searchcityStateRequest,getCategoryListRequest } from "../../modelController";
import { categoryService } from "../../redux/index";
import { connect } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class SearchCity extends React.Component<{
  location: any;
  getCategoryData: any;
}> {
  /** Search City State */
  searchcityState: searchcityStateRequest = constant.searchCityPage.state;
  state = {
    slugname: this.searchcityState.slugname,
    categorydata: this.searchcityState.categorydata,
    isLoading: this.searchcityState.isLoading,
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.getCategory = this.getCategory.bind(this);
  }

  /** Page Render Call */
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
    this.getCategory();
   
  }

  /**
   * 
   * @param nextProps : get updated props value
   */
  componentWillReceiveProps(nextProps: any) {
    // console.log("componentWillReceiveProps category", nextProps);
    if (nextProps.categoryDetail && nextProps.categoryDetail.length > 0) {
      if (nextProps.categoryDetail) {
        this.setState({
          isLoading: false,
        });
        this.getCategoryResponse(nextProps.categoryDetail);
      }
    }
  }

  /**
   * 
   * @param searchText : search value
   * @param page : page number
   * @param size : per page size
   */
  getCategory(searchText: string = "", page: number = 1, size: number = 10) {
    const obj : getCategoryListRequest = {
      searchText: searchText,
      page: page,
      size: size,
    };
    this.props.getCategoryData(obj);
  }

  /**
   * 
   * @param data : get category response
   */
  getCategoryResponse(data: any) {
    this.setState({
      categorydata: this.state.categorydata = data,
    });
  }

  /** Render DOM */
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

            {this.state.isLoading === false ? (
              <div className="main-div">
                <div className="row">
                  {this.state.categorydata
                    ? this.state.categorydata.length > 0 &&
                      this.state.categorydata.map((c: any, index: number) =>
                        c.parentCategoryId === 0 ? (
                          <div
                            key={index}
                            className="col-sm-6 col-md-4 col-lg-3"
                          >
                            <Link to={{pathname:`/order/${c.slug}`, state:{city:this.state.slugname.toLocaleLowerCase()}}}>
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
                                {c.imagePath ? (
                                  <img
                                    className="category_img"
                                    src={constant.filepath + c.imagePath}
                                    alt={c.category}
                                  />
                                ) : (
                                  ""
                                )}
                                <div className="tt-1">{c.category}</div>
                              </div>
                            </Link>
                          </div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              </div>
            ) : (
              <div className="main-div">
                <div className="row">
                  {[1, 2, 3, 4].map((data: any, index: number) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                      <SkeletonTheme color="#202020" highlightColor="#444">
                        <div className="box-1">
                          <div className="bdr-bottom">
                            <Skeleton count={1} />
                          </div>
                          {/* <img alt="img"className="category_img">
                      <Skeleton count={1} />
                    </img> */}
                        </div>
                      </SkeletonTheme>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

/**
 * 
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  categoryDetail: state.category.category,
});

/**
 * 
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({

  /** Get category data */
  getCategoryData: (data: any) =>
    dispatch(categoryService.getCategoryData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);
