import React, { Component } from 'react';
import ballet1 from './images/ballet1.jpeg';
import './Landing.css';

class LandingPage extends Component {
		render() {	
			return(
				<div>
					<div id="landDesc">
						See it. Post it.<br />
						Assemble it. Perform it.
					</div>

					<div id="cf">
						<img className="underlay" src={ballet1} width='65%'/>
					</div>
				</div>
		)
	}
}

export default LandingPage;
