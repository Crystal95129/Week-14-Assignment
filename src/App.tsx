
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import ReviewList from "./components/ReviewList";



function App(){

  let movies =["ABC", "DEF", "GHI", "JKL"];
  let reviews =["Good", "Fair", "Ok", "Maybe"];

const handleSelection = (_item:string) =>{
  
};

  return<div>
    
    <MovieList movies={movies} heading="Movie List:" onSelectItem={handleSelection}/>
    <Movie movie={movies} />
    <ReviewList review={reviews} />
    
  </div>


}

export default App;