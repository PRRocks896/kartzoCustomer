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
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={ContactUs} />
          {/* <Route exact path="/admin/" render={(props) => (
                    localStorage.getItem('token') ? (<Redirect to="/" />) : (<AdminLogin {...props}/>)
                )} />
                <Route exact path="/register" render={() => (
                   localStorage.getItem('token') ? (<Redirect to="/" />) : (<Register />)
                )} />
                <Route exact path="/forgot-password" render={() => (
                    localStorage.getItem('token') ? (<Redirect to="/" />) : (<ForgotPassword />)
                )} /> */}
          <PrivateRoute path="/" name="Home" component={Main} />
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
