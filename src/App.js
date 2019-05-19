import React, { Component } from 'react';
import {Header} from './Header';
import {Home} from './Home';
import {Documentation} from './Documentation';
import {SignUp} from './SignUp';
import {Log} from './Log';
import {Footer} from './Footer';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

class App extends Component {


	render() {

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Header/>
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/documentation' component={Documentation}></Route>
					</Switch>
					<Footer/>
				</div>
			</Router>
		);
	}
}


export default App;
