import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Table, Pagination} from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Fall',
    dataIndex: 'fall',
    key: 'fall'
  },
  {
    title: 'Mass',
    dataIndex: 'mass',
    key: 'mass',
  },
];


export class ResultPre extends Component {

	//a text-box on the home page which renders formatted JSON whenever
	//a git request is sent from the home page form 

	render() {
		return (

			<div id='result-output'>
			 <Table className='result-table' dataSource={this.props.searchResult} columns={columns} />
			</div>
			
	    );
  }
}

/*

			<div className='result-container'>
				<pre id='result-output'>
					{this.props.searchResult}
				</pre>
			</div>


			
*/