import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Table} from 'antd';
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


export class ErrorTable extends Component {

	//a text-box on the home page which renders formatted JSON whenever
	//a git request is sent from the home page form 
  constructor(props) {
    super(props);
  }

	render() {
		return (
      <div class="ant-table-wrapper result-table">
      <div class="ant-spin-nested-loading">
      <div class="ant-spin-container">
      <div class="ant-table ant-table-default ant-table-empty ant-table-scroll-position-left">
      <div class="ant-table-content">
      <div class="ant-table-body">
      <table class="">
      <colgroup>
      <col/>
      <col/>
      <col/>
      </colgroup>
      <thead class="ant-table-thead">
      <tr>
      <th class="">
      <span class="ant-table-header-column">
      <div>
      <span class="ant-table-column-title">
      Name</span>
      <span class="ant-table-column-sorter">
      </span>
      </div>
      </span>
      </th>
      <th class="">
      <span class="ant-table-header-column">
      <div>
      <span class="ant-table-column-title">
      Fall</span>
      <span class="ant-table-column-sorter">
      </span>
      </div>
      </span>
      </th>
      <th class="">
      <span class="ant-table-header-column">
      <div>
      <span class="ant-table-column-title">
      Mass</span>
      <span class="ant-table-column-sorter">
      </span>
      </div>
      </span>
      </th>
      </tr>
      </thead>
      <tbody class="ant-table-tbody">
      </tbody>
      </table>
      </div>
      <div class="ant-table-placeholder">
      <div class="ant-empty ant-empty-normal">
      <div class="ant-empty-image">
      <img alt="No Data" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA2NCA0MSIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxlbGxpcHNlIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ii8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgIDxwYXRoIGQ9Ik01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHoiLz4KICAgICAgPHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"/>
      </div>
      <p class="ant-empty-description" style={{wordBreak:'break-word'}}>
      There was an error. Please try again.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>			
    );
  }
}

