import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import star from './star.png'; 
import smallStar from './smallStar.png';


export class Title extends Component {

	constructor(props) {
		super(props);

		this.state = {
			left: -170,
			top: 85,
			width: 0,
			height: 0,
			display: null,
			pagination: null,
			opacity: 3
		};

		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	handleScroll(e) {
		let scroll=parseInt(e.target.scrollingElement.scrollTop);
		let speedFactor=1;
		let heightAdjust=0;
		let imageWidth=180;
		let startPos=85;
		let newTop;
		let newLeft;

		if (this.state.width<700) {
			speedFactor=.4;
			heightAdjust=130;
			imageWidth=84;
			startPos=-200;	
			newLeft=(scroll*3.52*speedFactor-170);
			newTop=(scroll*1.5*(speedFactor*2.5)+startPos)+heightAdjust;
		} else {
			newLeft=(scroll*4-170);
			newTop=(scroll*1.5+startPos);
		}
		let newOpacity;
		console.log("left"+this.state.left);
		console.log(this.state.width);

		if (newLeft <= this.state.width*.1) {
			this.state.width < 700 ? newOpacity=5 : newOpacity=3;
		} else if (newLeft>=this.state.width*.1 && newLeft <= this.state.width*.6) {
			newOpacity=8;
		} else if (newLeft>=this.state.width*.6) {			
			this.state.width < 700 ? newOpacity=5 : newOpacity=3;
		}


		if (newLeft+imageWidth >= this.state.width) {
			this.setState({
				display:'none'
			});
		} else {
			this.setState({
				display:null
			});			
		}

		this.setState({
			left: newLeft,
			top: newTop,
			opacity: newOpacity
		});
	}

	render() {
		return (
			<div className='heading' onScroll={e => this.handleScroll(e)}>
				<img src={this.state.width>1000 ? star : smallStar} style={{position:'absolute', zIndex: 0, left:this.state.left, top:this.state.top, opacity:this.state.opacity/10, display:this.state.display}}/>
				<h1>Meteorite Explorer App</h1>
				<div className='key-solution'>
					<p>Explore meteorite strikes across the globe by searching the Meteorite Landing dataset on the Nasa Open Data Portal</p>
				</div>
			</div>
	    );
  }
}