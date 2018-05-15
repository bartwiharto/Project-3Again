import React, { Component } from 'react';
import './Home.css';


class HomePage extends Component {
	render() {
		return (
			<div className="directoryMenu">

				<a href="/songs" id="songMenu" className="border border-color:white rounded">
					Songs
				</a>
				
				<a href="/choreo" id="choreoMenu" className="border border-color:white rounded">
					Choreo
				</a>
				
				<a href="/team" id="teamMenu" className="border border-color:white rounded">
					Teams
				</a>

			</div>
		)
	}
}

export default HomePage;
