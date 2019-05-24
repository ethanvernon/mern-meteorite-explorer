import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, InputGroupAddon, InputGroupText, InputGroup, Label } from 'reactstrap';
import './App.scss';


export class SearchAPI extends Component {

	// initialize our state 

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	//passes changed value from form to Home.js
	handleChange(e) {
		this.props.handleChange(e.target.value);
	}

	//copies a shortened URL to keyboard
	handleClick() {
		this.props.handleClick();
	}

	handleKeyPress(target) {
		if(target.charCode==13){
			this.handleClick();
		}
	}
	
	render() {
		return (
			<div className='search-container'>

				<InputGroup >

					<Input placeholder="Type a search query here" id='home-query' type='text' value={this.props.userInput} onChange={e => this.handleChange(e)} onKeyPress={this.handleKeyPress}/>

					<InputGroupAddon addonType="append">
						<Button color='primary' onClick={this.handleClick}>search</Button>
					</InputGroupAddon>

				</InputGroup>
			</div>	
		);
	}
}