/**
 * import CSS Module Hero
 * simpan di object styles
 */
import React, { useEffect, useState } from 'react';
import styles from "./Hero.module.css";

function Hero() {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590');
        const data = await response.json();
        setMovieData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movieData) {
    return <p>Failed to load data.</p>;
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movieData.Title}</h2>
          <h3 className={styles.hero__genre}>
            Genre: {movieData.Genre}
          </h3>
          <p className={styles.hero__description}>
            {movieData.Plot}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movieData.Poster}
            alt={movieData.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
