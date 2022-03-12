import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';

/**
 * ==========================
 *  SOLUTION
 * ==========================
 */

class Movies extends Component {
  state = { 
    movies: getMovies()
  } 

  handleDelete = (movie) => {
    // in this  eventHandler we have to change state. When condition is true it'll add that item to new array.
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies}); //if key and value in object is same we can just simple pass the values.
  } 

  render() { 
    const { length:count } = this.state.movies;

    if(this.state.movies.length === 0) return <p>There are no movies in the database.</p>

    return (
      <React.Fragment>
        <p>Showing { count } movies in the database.</p>
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
            {this.state.movies.map(movie =>(
              /* when we have to add key, we should add it to the element which is repeating like <tr> in our case.*/
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick = {() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete </button></td>
              </tr>
            ) )};
            
          </tbody>
        </table>
      </React.Fragment>
    )  
  }
}
 
export default Movies;





















/**
 * ==========================
 *  MY ATTEMPT - DIDN'T WORK
 * ==========================
 */
// class Movies  extends Component {

//   state = { 
//     movies: getMovies(),
//     genres: getGenres()
//   }; 
  
//   render() { 

//     return (
//       this.returnMoviesRows()
//     );
//     // return (
    
//       // <div class="container">
//       //   <div class="row">
//       //     <div class="col-4">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>
//       //   </div>

//       //   <div class="row">
//       //     <div class="col-4">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>




//       //   </div>

//       //   <div class="row">
//       //     <div class="col-4">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>
//       //     <div class="col-2">
//       //       One of three columns
//       //     </div>




//       //   </div>
//       // </div>
//     // );
//   }


//   // 
//   returnMoviesRows = () => {
//     let rows;
//     console.log(this.state.genres);
//     console.log(this.state.movies);

//     // try to do this with forEach
//     console.log(this.state.movies.map((movie) => {
//       <div className='row'>
//         <div className='col-4'>
//            {console.log(movie.title)}
//         </div>
//         <div className='col-2'>
//            {this.state.genres.filter(genre => movie._id === genre._id && genre.name)}
//         </div>
//       </div>
//     })); 
//   }
// }
 
// export default Movies;