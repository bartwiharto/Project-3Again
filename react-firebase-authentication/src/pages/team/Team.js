import React, { Component } from 'react';
import './Team.css';


class Team extends Component {
	render() {
		return (
			<div>
				<form>
						<div className="form-row">
							<div className="col-sm-2"></div>

							<div className="col-sm-4">
								<input className="form-control form-control-sm" placeholder="Team Name" />
							</div>

							<div className="col-sm-4">
								<input className="form-control form-control-sm" placeholder="Competition Name" />
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

				<div id="teamEntry">
					<p>TEAM NAME: Kaba Modern</p>
					<p>COMPETITION: Bodyrock</p>
					<p>YEAR: 2010</p>
					<p>YouTube:</p>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/EVlq2VaTWQU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				
				<form>
					<div id="notes"className="form-group col-sm-7">
					  <label for="comment">Notes:</label>
					  <textarea className="form-control" rows="5" id="comment"></textarea>
					</div>

					<button id="notesBtn" className="btn btn-sm btn-outline-light col-2">Post</button>

				</form>
				</div>

			</div>
		)
	}
}

export default Team;
