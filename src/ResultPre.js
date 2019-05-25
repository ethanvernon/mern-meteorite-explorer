import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Table} from 'antd';
import {ErrorTable} from './ErrorTable';
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
  constructor(props) {
    super(props);
  }

	render() {
		return (

			<div id='result-output'>
        { this.props.searchResult != 'error' &&
        <Table className='result-table' dataSource={this.props.searchResult} columns={columns} />
        }
        { this.props.searchResult == 'error' &&
          <ErrorTable/>
        }
			</div>
			
	    );
  }
}

