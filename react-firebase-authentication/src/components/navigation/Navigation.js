import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


import SignOut from '../signout/SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <nav className="navbar" id="header">
    <h1 id="title">Assemblé</h1>

        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
        Menu <span className="caret"></span>
        </button>

        <ul id="drop" className="dropdown-menu dropdown-menu-right">
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.SONGS}>Songs</Link></li>
            <li><Link to={routes.CHOREO}>Choreographers</Link></li>
            <li><Link to={routes.TEAM}>Teams</Link></li>
            <li><Link to={routes.LANDING}><SignOut /></Link></li>
        </ul>                    
  </nav>

const NavigationNonAuth = () =>
  <nav className="navbar" id="header">
    <div className="col-sm-8">
      <h1 id="title">Assemblé</h1>
    </div>

    <div className="col-sm-2" id="signInlink">
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </div>

    <div className="col-sm-2" id="signUpLink">
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </div>

  </nav>

export default Navigation;