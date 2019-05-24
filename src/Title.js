import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export class Title extends Component {

	render() {
		return (
			<div className='heading'>
				<h1>Meteorite Explorer App</h1>
				<div className='key-solution'>
					<p>Explore meteorite strikes across the globe by searching the Meteorite Landing dataset on the Nasa Open Data Portal</p>
				</div>
			</div>
	    );
  }
}