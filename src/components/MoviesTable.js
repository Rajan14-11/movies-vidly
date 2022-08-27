import React from 'react'
import Like from './Like';
import {Link} from "react-router-dom"

function MoviesTable(props) {
   const {newmovies , OnLike , OnDelete , OnSort} = props
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => OnSort("title")} scope="col">
              Title
            </th>
            <th onClick={() => OnSort("genre.name")} scope="col">
              Genre
            </th>
            <th onClick={() => OnSort("numberInStock")} scope="col">
              Stock
            </th>
            <th onClick={() => OnSort("dailyRentalRate")} scope="col">
              Rate
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {newmovies.map((movie) => (
            <tr key={movie._id}>
              <th scope="row">
                <Link to={`/moviesform/${movie._id}`}>{movie.title}</Link>
              </th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like isLike={movie.isLiked} onClick={() => OnLike(movie)} />
              </td>
              <td>
                {" "}
                <button
                  className="btn btn-danger"
                  onClick={() => OnDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MoviesTable