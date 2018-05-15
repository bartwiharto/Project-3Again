import  React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newNoteContent: '',

		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.writeNote = this.writeNote.bind(this);
	}

	//When the user input changes, set the newNoteContent to the value of what's in the input box 
	handleUserInput(e) {
		//to check the changes in console
		// console.log(this);
		this.setState({
			newNoteContent: e.target.value, //value of the User Input
		})
	}

	writeNote(){
		//call method that sets the noteContent for a note to the value of the input
		this.props.addNote(this.state.newNoteContent);
		
		//"" <= this will change the input box back to empty once the click event executed.		
		this.setState({
			newNoteContent:"",
		})
	}

	render() {
		return(

			<div className="formWrapper">
				<input className="noteInput"
					placeholder="Write A New Note" 
					value={this.state.newNoteContent} 
					onChange={this.handleUserInput} />

				<button className="noteButton"
					onClick={this.writeNote}>Add Note</button>
			</div>

		)
	}
}

export default NoteForm;