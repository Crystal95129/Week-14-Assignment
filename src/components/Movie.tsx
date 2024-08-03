import { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

interface Props{
    movie: string[];}

const Movie = ({ movie } : Props) => {

  const [reviews, setReviews] = useState([]);

  const addReview = (reviews: any) => {
    setReviews([...reviews, reviews]);
  };

  return (
    <div className="container">
      
      <h2>{movie}</h2>
      <p>{movie}</p>
      <Stars />
      <ReviewList review={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;