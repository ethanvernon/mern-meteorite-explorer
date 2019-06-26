# NASA Meteorite Landing Web Service

### Summary
This project uses HTML, CSS, React.js, Ant Design, axios, Bootstrap, and SASS. It was completed between May 17th and May 25th for acceptance into a pair-programming cohort called Chingu. This web service uses tabulation to help users search and view meteorite landings found in NASA's Meteorite Landing database.

### Landing page
Responsive, full-screen landing page with shooting star animation.
![React Logo w/ Text](http://fromgaming.com/images/meteor-landing-min.png)

### Search bar
Constructs the query string  to send to the API using user's search. Query string is then used in Axios API call.
![React Logo w/ Text](http://fromgaming.com/images/meteor-search-min.png)

```
ormGetData() {

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
```

### Results (tabulation)
Uses Ant Design to handle tabulation of data from the API.
![React Logo w/ Text](http://fromgaming.com/images/meteor-results-tabulation-min.png)

### Responsive design
Uses breakpoints in CSS and mobile fist design process.
![React Logo w/ Text](http://fromgaming.com/portfolio2/static/media/meteor-markup.836714cf.png)

### Animation
In src/Title.js, we use an onScroll event listener to give the effect of a shooting star in the night sky landing page when the user scrolls down the screen.

![React Logo w/ Text](http://fromgaming.com/images/meteor-shooting-star.png)
![React Logo w/ Text](http://fromgaming.com/images/meteor-shooting-star-2-min.png)
