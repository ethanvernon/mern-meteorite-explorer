import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export class HelpText extends Component {

	//clickable queries on the home page that can give users examples
	//of how to use the form

	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	//auto-fills the form and submits a GET request
	handleClick(query) {
		this.props.handleClick(query);
	}

	render() {
		return (
			<div id='help-text'>
				<p>need a hint? try <a onClick={e => this.handleClick('Battle Mountain')}><i>Battle Mountain</i></a></p>
			</div>
	    );
  }
}