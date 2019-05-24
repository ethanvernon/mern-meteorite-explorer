import React, { Component } from 'react';
import axios from "axios";
import './App.scss';
import {Title} from './Title';
import {Description} from './Description';
import {BodyHeader} from './BodyHeader';
import {SearchAPI} from './SearchAPI';
import {ResultPre} from './ResultPre';
import {HelpText} from './HelpText';
import {Footer} from './Footer';



export class Home extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
			userInput: "",
			searchResult: null
		};

		this.formGetData = this.formGetData.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleExampleQuery = this.handleExampleQuery.bind(this);
		this.convertUserInputToQuery = this.convertUserInputToQuery.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
		this.formGetData();
	}

	//whenever the home page form SearchAPI.js changes from user input, this function
	//updates this.state.userInput, which is then passed to the component
	handleFormChange(userInput) {
		this.setState({
			userInput: userInput
		});
	}

	//when the search button is clicked, sends a GET request, result to this.state.searchResult, rendered by ResultPre.js
	formGetData() {

		//builds query
		let formQuery="https://data.nasa.gov/resource/gh4g-9sfh.json?$where=UPPER(name)like'"+this.convertUserInputToQuery()+"'";

		axios.get(formQuery)
			.then(data => {
				//sets states which renders the result in the ResultPre component 
				//this.setState({ searchResult: JSON.stringify(data.data, null, 2) });

				this.setState({ searchResult: data.data });
			}).catch(err =>{
				//handle error
				console.log(err);
			});
	}

	//sends a GET request for the example query
	handleExampleQuery(query) {
		//builds query from example query
		var formQuery="https://data.nasa.gov/resource/gh4g-9sfh.json?$where=UPPER(name)like'%25BATTLE%25%25MOUNTAIN%25'";

		this.setState({
			userInput: query
		});

		axios.get(formQuery)
			.then(data => {
				//sets states which renders the result in the ResultPre component 
				this.setState({ searchResult: data.data });
			}).catch(err =>{
				//handle error
				console.log(err);
			});
	}

	//uppercases user input, and surrounds each term with %25
	convertUserInputToQuery() {
		let upperCaseUserInput = this.state.userInput.toUpperCase();
		let upperCaseAndSplitArray = upperCaseUserInput.split(" ");
		let endOfQuery="";

		for (let i=0; i<upperCaseAndSplitArray.length;i++) {
			endOfQuery+=("%25" + upperCaseAndSplitArray[i] + "%25");
		}

		return endOfQuery;
	}

	render() {
		return(
			<div>
				<Title/>

				{//<Description/>
				}

				<BodyHeader/>

				<SearchAPI
					handleChange={this.handleFormChange}
					handleClick={this.formGetData}
					userInput={this.state.userInput}/>

				<HelpText
					handleClick={this.handleExampleQuery}
				/>

				<ResultPre
					searchResult={this.state.searchResult}
				/>

				<Footer/>

			</div>
		)
	}
}