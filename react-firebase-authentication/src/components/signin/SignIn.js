import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import haiti from '../landing/images/haiti.jpg';
import './SignIn.css';

import { SignUpLink } from '../signup/SignUp';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>

  <div className="SIform">

    Sign In

    <SignInForm history={history} />
<br />
    <SignUpLink />

  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
          <div>
            <img className="haiti" src={haiti} width='65%'/>
          </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Email Address"
            />

    <br />        
    <br />    

            <input
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
              type="password"
              placeholder="Password"
            />

    <br />
    <br />        

            <button disabled={isInvalid} type="submit">
              Sign In
            </button>

            { error && <p>{error.message}</p> }
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};