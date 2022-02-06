import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movieList/movielist.component';



class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchValue: ''
    }
  }

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf103a8369add6dd90594a095c18616f&page=1')
    .then(res => res.json())
    .then(data => this.setState({results:data.results}))
    .catch(e => console.log(e))
    
  }

  

  render () {
    const {results} = this.state
    

    
    return !(results.length) ? 
        <div className='loader'>
        <h1>Fetching movies</h1>
        </div>
      
      :
      <div>
          <MovieList results = {results}/>
      </div>
    
  }
    
}

export default App;
