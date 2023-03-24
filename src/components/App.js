import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    if (event.target.value.length < 5) {
      setCommentError('Comment must be atleast 5 characters');
    } else {
      setCommentError('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input type="range" min="1" max="10" value={rating} onChange={handleRatingChange} />
          <span className="rating">{rating}</span>
        </label>
        <br />
        <label>
          Comment:
          <textarea value={comment} onChange={handleCommentChange} />
          <p className="comment-error">{commentError}</p>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

