import React from "react";
import { Link } from "react-router-dom";
import constant from "../../constant/constant";

class Categories extends React.Component {
  constructor(props: any) {
    super(props);
  }

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

              {/* <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box-1 clr2">
                  <div className="bdr-bottom bclr2"></div>
                  <img src={categories.img2} alt="" />
                  <div className="tt-1">Fruits & Vegetables</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box-1 clr3">
                  <div className="bdr-bottom bclr3"></div>
                  <img src={categories.img3} alt="" />
                  <div className="tt-1">Meat & Fish</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box-1 clr4">
                  <div className="bdr-bottom bclr4"></div>
                  <img src={categories.img4} alt="" />
                  <div className="tt-1">Food Delivery</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box-1 clr5">
                  <div className="bdr-bottom bclr5"></div>
                  <img src={categories.img5} alt="" />
                  <div className="tt-1">Medicines</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box-1 clr6">
                  <div className="bdr-bottom bclr6"></div>
                  <img src={categories.img6} alt="" />
                  <div className="tt-1">Pet Supplies</div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box-1 clr7">
                  <div className="bdr-bottom bclr7"></div>
                  <img src={categories.img7} alt="" />
                  <div className="tt-1">Flowers & Gifts </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
