import React, { useEffect, useState } from "react";
import { getMovies } from "../fakeMovies";
import Pagination from "./Pagination";
import paginate from "../utils/paginate";
import ListGroup from "./ListGroup";
import getGenres from "../fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setselectedGenre] = useState({name:"allGenres"});
  const [genres, setGenres] = useState([]);
  const [sortColumn, setSortColumn] = useState({
    path:'title',order:'asc'
  });

  useEffect(() => {
    const genres = [{_id:'',name:"allGenres"},...getGenres()]
    return () => {
      setGenres(genres);
      setMovies(getMovies());
    };
  }, []);

  const handleDelete = (id) => {
    const newmovies = movies.filter((movie) => movie._id !== id);
    setMovies(newmovies);
  };

  const handleLike = (movie) => {
    const newmovies = [...movies];
    const index = newmovies.indexOf(movie);
    newmovies[index].isLiked = !movies[index].isLiked;
    setMovies(newmovies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onGenreChange = (genre) => {
    setselectedGenre(genre)
    setCurrentPage(1)
  };

 const handleSort = path=>{
  const newsortColumn={...sortColumn}
  if(newsortColumn.path===path)
  newsortColumn.order = (newsortColumn.order==='asc')?'desc':'asc'
  else{
    newsortColumn.path=path;
    newsortColumn.order='asc'
  }
  setSortColumn(newsortColumn)
  }

  const filtered = selectedGenre && selectedGenre._id ? movies.filter(m=>m.genre._id === selectedGenre._id) : movies

  const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])

  const newmovies = paginate(sorted, currentPage, pageSize);

  return (
    <div>
      {newmovies.length !== 0 ? (
        <div
          className="d-flex m-4 justify-content-center"
          style={{ width: "100%" }}
        >
          <ListGroup
            itemsList={genres}
            selectedGenre={selectedGenre}
            onGenreChange={onGenreChange}
          />
          <div className="d-flex flex-column" style={{ width: "70%" }}>
            <p>There are {filtered.length} movies in the list</p>

            <MoviesTable newmovies={newmovies} OnLike={handleLike} OnDelete={handleDelete} OnSort={handleSort} />

            <Pagination
              pageSize={pageSize}
              onPageChange={handlePageChange}
              itemsCount={filtered.length}
              currentPage={currentPage}
            />
          </div>
        </div>
      ) : (
        <p>There are no movies to show</p>
      )}
    </div>
  );
}

export default Movies;
