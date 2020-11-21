import React from "react";

class Information extends React.Component {

  /** Constructor call */
  constructor(props: any) {
    super(props);
  }

  /** Render DOM */
  render() {
    return (
      <section className="services-offer">
        <div className="container-fluid">
          <div className="slider-box">
            <h3>You can’t stop time, but you can save it!</h3>
            <p>
              Living in the city, there is never enough time to shop for
              groceries, pick-up supplies, grab food and wade through traffic on
              the way back home. How about we take care of all of the above for
              you? What if we can give you all that time back? Send packages
              across the city and get everything from food, groceries, medicines
              and pet supplies delivered right to your doorstep. From any store
              to your door, just make a list and we’ll make it disappear. Just
              Kartzo It!
            </p>
            <hr />
            <h3>You can’t stop time, but you can save it!</h3>
            <span className="hovr-tt">
              <a href="#">Send Packages in Bangalore</a>
              <span className="line-1">|</span>
            </span>
            <span className="hovr-tt">
              <a href="#">Send Packages in Pune</a>
              <span className="line-1">|</span>
            </span>
            <span className="hovr-tt">
              <a href="#">Send Packages in Gurgaon</a>
              <span className="line-1">|</span>
            </span>
            <span className="hovr-tt">
              <a href="#">Send Packages in Hyderabad</a>
              <span className="line-1">|</span>
            </span>
            <span className="hovr-tt">
              <a href="#">Send Packages in New Delhi</a>
              <span className="line-1">|</span>
            </span>
            <span className="hovr-tt">
              <a href="#">Send Packages in Chennai</a>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Information;
