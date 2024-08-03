import { SetStateAction, useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(-1);

  const handleClick = (newRating: SetStateAction<number>) => {
    setRating(newRating);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((stars) => (
        <span
          key={stars}
          className={rating >= stars ? 'star filled' : 'star'}
          onClick={() => handleClick(stars)}
        />
      ))}
    </div>
  );
};

export default Stars;