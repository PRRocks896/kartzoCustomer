import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import Users from '../pages/usersmanagment/users/users';

class Main extends React.Component<{ history: any }> {
  render() {
    return (
      <Router>
        {/* <NavBar {...this.props}> */}
        <Switch>
          {/* <Route path='/dashboard' name='Dashboard' render={(props: any) => <Dashboard {...props} />} /> */}

          {/* {
                    this.props.history.location.pathname !== '/' ? (
                      <Route path="*" component={Page404}/>
                    ) : (
                      ""
                    )
                  } */}
          <Redirect from="/" to="/dashboard" />
        </Switch>
        {/* </NavBar> */}
      </Router>
    );
  }
}

export default Main;
