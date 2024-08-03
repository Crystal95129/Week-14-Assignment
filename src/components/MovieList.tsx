import { useState } from "react";


interface Props{
    movies: string[];
    heading: string;
    onSelectItem:(movie: string) => void;
  }

  function MovieList({movies, heading, onSelectItem}: Props) {
  

    const [selectedIndex, setSelectedIndex] = useState(-1);
  
    return (
      <>
      <div className="container">
        <h1>{heading}</h1>
        {movies.length === 0 && <p>No Movies</p>}
        <ul className="list-group">
          {movies.map((movie, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={movie}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(movie);
              }}
            >
              {movie}
            </li>            
          ))}
        </ul>
        </div>
      </>
    );
  }


export default MovieList;