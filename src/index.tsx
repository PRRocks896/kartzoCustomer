import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import api from "./redux/middleware/api";
import * as serviceWorker from "./serviceWorker";
import Main from "./main";
import Home from "./pages/home/home";
import Layout from "./pages/components/layout/layout";
import About from "./pages/about/about";
import ContactUs from "./pages/contact-us/contact";
import Careers from "./pages/careers/careers";
import JobOpening from "./pages/job-opening/job-opning";
import Partners from "./pages/partners/partner";
import Business from "./pages/business/business";
import SearchCity from "./pages/searchcity/searchcity";
import TrackOrder from "./pages/trackorder/trackorder";
import FindStore from "./pages/find-store/find-store";
import StoreItem from "./pages/store-item/store-item";
import PlaceOrder from "./pages/placeorder/placeorder";
import Login from "./pages/login/login";
import Cart from "./pages/cart/cart";
import Page404 from "./pages/pagenotfound/pagenotfound";
import Profile from "./pages/profile/profile";
const interceptor = require("./intercepter");
const middleware = [thunk, api];
const store = createStore(reducers, applyMiddleware(...middleware));

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      props.location.pathname !== "/admin/" ? (
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      ) : localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/admin/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login}  />
          <Route exact path="/profile" component={Profile}  />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/carrers" component={Careers} />
          <Route exact path="/carrers-job" component={JobOpening} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/search-city" component={SearchCity} />
          <Route exact path="/track-order" component={TrackOrder}  />
          <Route exact path="/find-store" component={FindStore}  />
          <Route exact path="/store-item" component={StoreItem}  />
          <Route exact path="/store/:slug" component={StoreItem}  />
          <Route exact path="/placeorder" component={PlaceOrder}  />
          <Route exact path="/cart" component={Cart}  />
          <Route exact path="/order/:slug" component={FindStore}  />
          <Route exact path="/:slug1" component={SearchCity} />
          <Route exact path="/:slug1/:slug2" component={SearchCity} />
          <Route path="*" component={Page404}/>
            
          {/* <PrivateRoute path="/" name="Home" component={Main} /> */}
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
