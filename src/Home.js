import React, { Component } from 'react';
import axios from "axios";
import './App.scss';
import {Title} from './Title';
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
			searchResult: null,
			pagination: {},
			loading: 'search'
		};

		this.formGetData = this.formGetData.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleExampleQuery = this.handleExampleQuery.bind(this);
		this.convertUserInputToQuery = this.convertUserInputToQuery.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
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

		this.setState({
			loading: 'loading...'
		});

		axios.get(formQuery)
			.then(data => {
				//sets states which renders the result in the ResultPre component 
				this.setState({ searchResult: data.data, loading: 'search', pagination: {current: 1}  });
				console.log(this.state.pagination);
			}).catch(err =>{
				//handle error
				console.log(err);
				this.setState({searchResult: 'error', loading: 'search'});
			}).then(data => {
				//sets states which renders the result in the ResultPre component 
				this.setState({ pagination: {}  });
			});
	}

	//sends a GET request for the example query
	handleExampleQuery(query) {
		//builds query from example query
		var formQuery="https://data.nasa.gov/resource/gh4g-9sfh.json?$where=UPPER(name)like'%25BATTLE%25%25MOUNTAIN%25'";

		this.setState({
			userInput: query,
			loading: 'loading...'
		});

		axios.get(formQuery)
			.then(data => {
				//sets states which renders the result in the ResultPre component 
				this.setState({ searchResult: data.data, loading: 'search' });
			}).catch(err =>{
				//handle error
				console.log(err);
				this.setState({searchResult: 'error', loading: 'search'});
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

	handlePagination() {
		console.log(this.state.pagination);
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
					userInput={this.state.userInput}
					loading={this.state.loading}
					handlePagination={this.handlePagination}/>

				<HelpText
					handleClick={this.handleExampleQuery}
				/>

				<ResultPre
					searchResult={this.state.searchResult}
					pagination={this.state.pagination}
				/>

				<Footer/>

			</div>
		)
	}
}