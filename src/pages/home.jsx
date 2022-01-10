import React from "react";
import "./home.css";
import "../styles/navbar.css";
import "../styles/defaultTitle.css";
import "../styles/trendingMovies.css";
import "../styles/loadMovie.css";

import Navbar from "../components/navbar.jsx";
import DefaultMovieTitle from "../components/defaultTitle";
import TrendingMovies from "../components/trendingMovies";

export default function Home(props) {
  const { defaultMovie, popularMovies } = props;
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  if (defaultMovie.length !== 1) {
    return <div className="bg animate__zoomIn"></div>;
  } else if (window.innerWidth <= 875) {
    return (
      <div className="bg animate__zoomIn">
        <img
          src={`${imageUrl}${defaultMovie[0].poster_path}`}
          alt="background"
        />

        <Navbar />

        <DefaultMovieTitle defaultMovie={defaultMovie} />

        <TrendingMovies popularMovies={popularMovies} imageUrl={imageUrl} />
      </div>
    );
  } else {
    return (
      <div className="bg animate__zoomIn">
        <img
          src={`${imageUrl}${defaultMovie[0].backdrop_path}`}
          alt="background"
        />

        <Navbar />

        <DefaultMovieTitle defaultMovie={defaultMovie} />
       
        <TrendingMovies popularMovies={popularMovies} imageUrl={imageUrl} />
      </div>
    );
  }
}
