import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { ReactComponent as Glyphicons } from '../../icons/glyphicons.svg';
import Loader from 'components/Loader/Loader';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function renderCast() {
      setLoading(true);

      try {
        const data = await API.fetchCast(movieId);
        const cast = data.map(el => ({
          id: el.id,
          name: el.name,
          character: el.character,
          photo: el.profile_path,
        }));
        setReviews(cast);
      } catch (e) {
        console.log(e);
        setError('Something goes bad... Please, try later');
      } finally {
        setLoading(false);
      }
    }
    renderCast();
  }, []);

  return (
    <>
      <section>
        {isLoading && <Loader />}
        {cast.length === 0 ? (
          <p>We don't have any information about cast for that movie</p>
        ) : (
          <ul>
            {cast.map(el => (
              <li key={el.id}>
                {el.photo ? (
                  <img
                    className={styles.img}
                    width={100}
                    height={150}
                    src={`https://image.tmdb.org/t/p/original${el.photo}`}
                    alt={el.name}
                  />
                ) : (
                  <Glyphicons
                    className={styles.glyphicons}
                    width={100}
                    height={150}
                  />
                )}
                <p>{el.name}</p>
                {el.character && <p>Character: {el.character}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Cast;
