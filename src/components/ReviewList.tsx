
import { Key } from 'react';
import Review from './Review';


const ReviewList = ({ review }) => {
  return (
    <div className="container">
      {review.map((review: any, index: Key | null | undefined) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;