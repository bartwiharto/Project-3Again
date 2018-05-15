import React, { Component } from 'react';
import './Songs.css';


class Songs extends Component {
	render() {
		return (
			<form>
					<div className="form-row">
						<div className="col-sm-2"></div>

						<div className="col-sm-4">
							<input className="form-control form-control-sm" placeholder="Song Title" />
						</div>

						<div className="col-sm-4">
							<input className="form-control form-control-sm" placeholder="Artist Name" />
						</div>

						<div className="col-sm-2"></div>

					<br/>

						<div className="col-5"></div>

						<div className="col-2">
							<input className="form-control form-control-sm" placeholder="Year" />
						</div>

						<div className="col-5"></div>

					<br/>
					

						<div className="col-3"></div>

						<div className="col-6">
							<input className="form-control form-control-sm" placeholder="Youtube link" />
						</div>

						<div className="col-3"></div>

					<br/>

						<div className="col-5"></div>

						<button className="btn btn-sm btn-outline-light col-2">Post</button>

						<div className="col-5"></div>

					</div>

			</form>
		)
	}
}

export default Songs;