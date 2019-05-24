import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import star from './star.png'; 


export class Title extends Component {

	constructor(props) {
		super(props);

		this.state = {
			left: -170,
			top: 85,
			pagination: null
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e) {
		let scroll=parseInt(e.target.scrollingElement.scrollTop);
		let newLeft;
		let newTop;
		console.log(scroll);
		console.log("left"+this.state.left);
		console.log("top"+this.state.top);

		if (scroll<600) {
			newLeft=scroll*4-170;
			newTop=scroll*1.5+85;
		}

		this.setState({
			left: newLeft,
			top: newTop
		});
	}

	render() {
		return (
			<div className='heading' onScroll={e => this.handleScroll(e)}>
				<img src={star} style={{position:'absolute', zIndex: 0, left:this.state.left, top:this.state.top, opacity:'.6'}}/>
				<h1>Meteorite Explorer App</h1>
				<div className='key-solution'>
					<p>Explore meteorite strikes across the globe by searching the Meteorite Landing dataset on the Nasa Open Data Portal</p>
				</div>
			</div>
	    );
  }
}