import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';

class Movies_my extends Component {
  state = { 
    movies: getMovies()
  } 

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter( (m) => {
      if(m._id !== movie._id) 
       return true
    } );

    this.setState({movies: movies});
  }

  render() { 
    const mov_length = this.state.movies.length;

    if (mov_length === 0 ) return <p>There are no movies in the database.</p>;


    // Every time the state changes the render function is called, so keep that in mind.
    return (
      <React.Fragment>
        <p>Showing {mov_length} movies from the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          
          <tbody>
            { this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={ () => this.handleDelete(movie) } className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
 
export default Movies_my;