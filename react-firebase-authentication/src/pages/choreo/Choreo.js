import React, { Component } from 'react';
import './Choreo.css';


class Choreo extends Component {
	render() {
		return (
			<div>
				<form>
						<div className="form-row">
							<div className="col-sm-2"></div>

							<div className="col-sm-4">
								<input className="form-control form-control-sm" placeholder="Choreographer's name" />
							</div>

							<div className="col-sm-4">
								<input className="form-control form-control-sm" placeholder="Song Name" />
							</div>

							<div className="col-sm-2"></div>

						<br/>

							<div className="col-5"></div>

							<div id="choreoYear" className="col-2">
								<input className="form-control form-control-sm" placeholder="Year" />
							</div>

							<div className="col-5"></div>

						<br/>
						

							<div className="col-3"></div>

							<div id="choreoYTLink" className="col-6">
								<input className="form-control form-control-sm" placeholder="Youtube link" />
							</div>

							<div className="col-3"></div>

						<br/>

							<div className="col-5"></div>

							<button className="btn btn-sm btn-outline-light col-2">Post</button>

							<div className="col-5"></div>

						</div>

				</form>

				<div id="choreoEntry">
					<p>CHOREOGRAPHER'S NAME: Nika Kljun</p>
					<p>SONG NAME: Move Your Body</p>
					<p>YEAR: 2017</p>
					<p>YouTube:</p>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/0K0_KtyVZ9Q?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>

			</div>
		)
	}
}

export default Choreo;
