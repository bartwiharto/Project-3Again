import React from 'react';
import './SignOut.css';

import { auth } from '../../firebase';

const SignOut = () =>
  <li

    onClick={auth.doSignOut}
  >
    Sign Out
  </li>

export default SignOut;