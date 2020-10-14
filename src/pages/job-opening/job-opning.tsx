import React from "react";
import constant from "../constant/constant";
import { getAppName } from "../utils";

class JobOpening extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    document.title = constant.job + getAppName();
  }

  render() {
    return (
      <section className="current-job">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="tt1">Current Job Openings</h1>
              <div className="bdr-tt">
                <span className="big"></span>
                <span className="small"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="select-box">
                <div className="select-1">
                  <label htmlFor="cars">Department:</label>
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="select-1">
                  <label htmlFor="cars">Office:</label>
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="box-data">
                <a href="#" className="box-1">
                  <h3>Lead- Fraud Prevention and Control</h3>
                  <p>Bangalore</p>
                </a>
                <a href="#" className="box-1">
                  <h3>Lead- Fraud Prevention and Control</h3>
                  <p>Bangalore</p>
                </a>
                <a href="#" className="box-1">
                  <h3>Lead- Fraud Prevention and Control</h3>
                  <p>Bangalore</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JobOpening;
