import React from "react";
import {scrollToTop} from '../utils';

class FAQ extends React.Component {
  /** Constructor */
  constructor(props: any) {
    super(props);
  }

  /** Page Render Call */
  componentDidMount() {
    scrollToTop();
  }

  /** Render DOM */
  render() {
    return (
      <>
        <section className="profile-page">
          <div className="container-fluid">
            <div className="col-md-12">
              <div className="flex-tabs">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="support"
                    role="tabpanel"
                    aria-labelledby="support-tab"
                  >
                    <div className="kartzo-support">
                      <div className="row">
                        <div className="col-md-12">
                          <h3 className="dlt-tt">FAQ</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div id="accordion">
                            <div className="card">
                              <div className="card-header" id="heading-2">
                                <h5 className="mb-0">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-1"
                                    aria-expanded="false"
                                    aria-controls="collapse-2"
                                  >
                                  Why we use kartzo?
                                  </a>
                                </h5>
                              </div>
                              <div
                                id="collapse-1"
                                className="collapse"
                                data-parent="#accordion"
                                aria-labelledby="heading-2"
                              >
                                <div className="card-body">
                                  Please let us know how we may help
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="heading-3">
                                <h5 className="mb-0">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-2"
                                    aria-expanded="false"
                                    aria-controls="collapse-3"
                                  >
                                   What is the purpose of kartzo?
                                  </a>
                                </h5>
                              </div>
                              <div
                                id="collapse-2"
                                className="collapse"
                                data-parent="#accordion"
                                aria-labelledby="heading-3"
                              >
                                <div className="card-body">
                                  Please let us know how we may help.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="heading-3">
                                <h5 className="mb-0">
                                  <a
                                    className="collapsed"
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-3"
                                    aria-expanded="false"
                                    aria-controls="collapse-3"
                                  >
                                   Which places in avalibale services?
                                  </a>
                                </h5>
                              </div>
                              <div
                                id="collapse-3"
                                className="collapse"
                                data-parent="#accordion"
                                aria-labelledby="heading-3"
                              >
                                <div className="card-body">
                                  Please let us know how we may help.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FAQ;
