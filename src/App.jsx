// Lakukan import Hero, Movies, AddMovieForm Component
import React from 'react';
import { useState } from 'react';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';
import Hero from './components/Hero/Hero';
import Movies from './components/Movies/Movies';
import data from './utils/constants/data';
import Layout from './Layout';

/**
 * Buat Component Home
 * Untuk menyimpan Component Hero, Movies dan AddMovieForm
 */
function App() {
/**
 * Mengangkat state movies ke atas (Home): lifting state
 * dari component Movies ke Home
 */
const [movies, setMovies] = useState(data);

// Kirim state sebagai props ke Component Movies dan AddMovieForm
return (
  <Layout>
    <Hero />
    <Movies movies={movies} setMovies={setMovies} />
    <AddMovieForm movies={movies} setMovies={setMovies} />
  </Layout>
);
}

// Lakukan export Home
export default App;