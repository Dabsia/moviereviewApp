import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movieList/movielist.component';


// Initially my results state is an empty array
class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchValue: ''
    }
  }

  // Using react life cycle methods, i fetched the data from the API and changed the value of my result state
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf103a8369add6dd90594a095c18616f&page=1')
    .then(res => res.json())
    .then(data => this.setState({results:data.results}))
    .catch(e => console.log(e))
    
  }

  

  render () {
    // Destructured the state 
    const {results} = this.state
    

    // If state is an empty array, show a preloader else show cardlist component
    return !(results.length) ? 
        <div className='loader'>
        <h1>Fetching movies</h1>
        </div>
      
      :
      <div className='middle'>
          <MovieList results = {results}/>
      </div>
    
  }
    
}

export default App;
