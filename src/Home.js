import React, { Component } from 'react';
import axios from "axios";
import './App.scss';
import {Title} from './Title';
import {Description} from './Description';
import {BodyHeader} from './BodyHeader';
import {SearchAPI} from './SearchAPI';
import {ResultPre} from './ResultPre';
import {HelpText} from './HelpText';



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
	}

	componentDidMount() {
		window.scrollTo(0,0);
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
		//will find names containing 'att'
		//var formQuery="https://data.nasa.gov/resource/gh4g-9sfh.json?$where=name like '%25att%25'"
		//case-insensitive		
		//var formQuery="https://data.nasa.gov/resource/gh4g-9sfh.json?$where=upper(name) like '%25ATT%25' " 
		//search for more than 1 substring, case insensitve
		var formQuery="https://data.nasa.gov/resource/gh4g-9sfh.json?$where=UPPER(name)like'%25RAMLAT%25 %25AL%25'"


		//GET /api/id/gh4g-9sfh.json?$query=select%20*%20search%20%27Battle%20Mountain%27%20limit%20100&$$query_timeout_seconds=30&$$row_count=approximate HTTP/1.1
//https://data.nasa.gov/api/id/gh4g-9sfh.json?$query=select%20*%20search%20%27Battle%20Mountain%27%20limit%20100&$$query_timeout_seconds=30&$$row_count=approximate

		//https://data.cityofchicago.org/resource/tt4n-kn4t.json?$where=upper(name)=upper('ABARCA, ANABEL')

		axios.get(formQuery)
			.then(data => {
				//sets states which renders the result in the ResultPre component 
				this.setState({ searchResult: JSON.stringify(data.data, null, 2) });
			}).catch(err =>{
				//handle error
				console.log(err);
			});
	}

	//sends a GET request and fills an example query in whenever one of the example
	//queries are clicked 
	handleExampleQuery(query) {
		//builds query from example query
		var formQuery="https://data.nasa.gov/resource/gh4g-9sfh.json?$where=UPPER(name)like'%25BATTLE%25 %25MOUNTAIN%25'";

		this.setState({
			userInput: query
		});

		axios.get(formQuery)
			.then(data => {
				//sets states which renders the result in the ResultPre component 
				this.setState({ searchResult: JSON.stringify(data.data, null, 2) });
			}).catch(err =>{
				//handle error
				console.log(err);
			});
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

			</div>
		)
	}
}