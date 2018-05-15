import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from '../firebase';
import Navigation from './navigation/Navigation';
import LandingPage from './landing/Landing';
import SignUpPage from './signup/SignUp';
import SignInPage from './signin/SignIn';
import HomePage from '../pages/home/Home';
import AccountPage from './Account';
import Footer from './footer/Footer';
import Choreo from '../pages/choreo/Choreo';
import Songs from '../pages/songs/Songs';
import Team from '../pages/team/Team';




import * as routes from '../constants/routes';
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />

            <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
            />

            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />

            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />

            <Route
              exact path={routes.HOME}
              component={() => <HomePage />}
            />

            <Route
              exact path={routes.ACCOUNT}
              component={() => <AccountPage />}
            />

            <Route
              path={routes.CHOREO}
              component={() => <Choreo />}
            />

            <Route
              path={routes.SONGS}
              component={() => <Songs />}
            />

            <Route
              exact path={routes.TEAM}
              component={() => <Team />}
            />



            <Footer />
          </div> 
        </Router>
      </div>  
    );
  }
}



export default App;