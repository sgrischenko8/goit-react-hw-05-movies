import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import * as API from '../../services/api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function renderReviews() {
      setLoading(true);

      try {
        const data = await API.fetchReviews(movieId);
        const reviews = data.map(el => ({
          id: el.id,
          author: el.author,
          content: el.content,
        }));
        setReviews(reviews);
      } catch (e) {
        console.log(e);
        setError('Something goes bad... Please, try later');
      } finally {
        setLoading(false);
      }
    }
    renderReviews();
  }, [movieId]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <section>
          {isLoading && <Loader />}
          {reviews.length > 0 ? (
            <ul>
              {reviews.map(el => (
                <li key={el.id}>
                  <p>{el.author}:</p>
                  <p>{el.content}:</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any reviews for that movie</p>
          )}
        </section>
      )}
    </>
  );
};

export default Reviews;
