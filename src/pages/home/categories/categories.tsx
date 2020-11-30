import React from "react";
import { Link } from "react-router-dom";
import constant from "../../constant/constant";
import { connect } from "react-redux";
import { categoryService } from "../../../redux/index";
import "./categories.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  categoryStateRequest,
  getCategoryListRequest,
} from "../../../modelController";

class Categories extends React.Component<{ getCategoryData: any }> {

  /** Category Page State */
  categoryPageState: categoryStateRequest = constant.categoryPage.state;
  state = {
    categorydata: this.categoryPageState.categorydata,
    isLoading: this.categoryPageState.isLoading,
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.getCategory = this.getCategory.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
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
   * @param size : per page value display
   */
  getCategory(searchText: string = "", page: number = 1, size: number = 10) {
    const obj: getCategoryListRequest = {
      searchText: searchText,
      page: page,
      size: size,
    };
    this.props.getCategoryData(obj);
  }

  /**
   *
   * @param data : get category data response
   */
  getCategoryResponse(data: any) {
    this.setState({
      categorydata: this.state.categorydata = data,
    });
  }

  /** Render DOM */
  render() {
    return (
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
                        <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                          {c.category === "Pickup & Drop" ? (
                            <Link to="/send-packages">
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
                                { c.imagePath ? (
                                  <img
                                    className="category_img"
                                    src={constant.filepath + c.imagePath}
                                    alt={c.category}
                                  />
                                ) : (
                                  null
                                )}
                                <div className="tt-1">{c.category}</div>
                              </div>
                            </Link>
                          ) : (
                            <Link to={`/order/${c.slug}`}>
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
                                  null
                                )}
                                <div className="tt-1">{c.category}</div>
                              </div>
                            </Link>
                          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
