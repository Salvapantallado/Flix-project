import React, { useState } from "react";

import Play from "./images/play.png";
import "../styles/dropdown.css";
import "animate.css";

import Star from "./images/Star.png";
import Arrow from "./images/arrow.png";

export default function TrendingMovies(props) {
  const { popularMovies, imageUrl } = props;
  const [displayArray, setDisplayArray] = React.useState([]);
  const [displayEl, setDisplayEl] = React.useState();

  const delay = (ms) =>
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, ms);
    });

  React.useEffect(() => {
    (async function () {
      for (let el of popularMovies) {
        await delay(300);
        setDisplayEl(el);
      }
      setDisplayEl(undefined);
    })();
  }, [popularMovies]);

  React.useEffect(() => {
    displayEl && setDisplayArray((prev) => [...prev, displayEl]);
  }, [displayEl]);

  const [localImage, setLocalImage] = useState([]);
  const [localTitle, setLocalTitle] = useState("");

  const [active, setActive] = useState("Popular");

  // React.useEffect(() => {
  //   if (localStorage.length !== 0) {
  //     const imgimg = localStorage.getItem("recent-image");
  //     const titletitle = localStorage.getItem("movie-title");
  //     setLocalImage(imgimg);
  //     setLocalTitle(titletitle);
  //   } return
  // }, []);

  React.useEffect(() => {
    if (localStorage.length !== 0) {
  let arr_deserialized = JSON.parse(localStorage.getItem("Obj"));
  console.log(arr_deserialized);
  setLocalImage(arr_deserialized.imagen);
  console.log(localImage);
  setLocalTitle(arr_deserialized.nombre);
  console.log(localTitle);
} return
}, []);


  return (
    <div className="trending-box">
      <div className="trending-list  animate__animated animate__fadeInDown">
        <div className="trending">
          Watch:
          <div>
            <input
              className="dropdown"
              type="checkbox"
              id="dropdown"
              name="dropdown"
            />
            <label className="for-dropdown" htmlFor="dropdown">
              {active}
              <i className="uil uil-arrow-down">
                <img src={Arrow} alt="dropdown" />
              </i>
            </label>
            <div className="section-dropdown">
              <a role="button" onClick={(e) => setActive(e.target.text)}>
                Popular<i className="uil uil-arrow-right"></i>
              </a>
              <a role="button" onClick={(e) => setActive(e.target.text)}>
                My Movies<i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          {active === "Popular" ? (
            displayArray.map((x) => (
              <div
                key={`${x.id}`}
                className="container2 animate__animated animate__fadeIn"
              >
                <img src={`${imageUrl}${x.backdrop_path}`} alt="mini poster" />

                <div className="play-btn">
                  <img src={Play} alt="Reproducir" />
                  <span>{`${x.title}`}</span>
                  <div className="star">
                    <img src={Star} alt="Star Rating"/>
                  </div>
                  <div className="rating">
                    <p>{`${x.vote_average}`}</p>
                  </div>
                  <div className="release">
                    <p>{`${x.release_date.slice(0, 4)}`}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="container2 animate__animated animate__fadeIn">
              <img
                src={localImage}
                style={{ width: "250px", height: "140px" }}
                alt="mini poster"
              />
              <div className="play-btn">
                <img src={Play} alt="Reproducir" />
                <span>{localTitle}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
