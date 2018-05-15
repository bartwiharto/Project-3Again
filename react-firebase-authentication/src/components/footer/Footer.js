import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
		<div className="footernav">
			<nav id="footerNav" className="navbar fixed-bottom">
				<h6>&copy;Bart W 2018</h6>
			</nav>
		</div>
    );
  }
}

export default Footer;