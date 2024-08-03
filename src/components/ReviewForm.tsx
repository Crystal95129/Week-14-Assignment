import { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    addReview(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Leave a review"
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;