import React from "react";

export default function DefaultMovieTitle(props) {
  const { defaultMovie } = props;

  
    if (window.innerWidth <= 875) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "auto",
          }}
        >
          <div className="liteflix-original animate__animated animate__fadeInLeft">
          <span className="more-weight">Flixflix</span>
            <span>Original</span>
          </div>

          <div className="movieTitle animate__animated animate__fadeIn">
          <div>
            <h3>{`${defaultMovie[0].original_title}`}</h3>
            </div>

            <div className="default-buttons animate__animated animate__fadeInDown">
            <button className="primary-btn">▷ PLAY</button>
              <button className="secondary-btn">+ MY LIST</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="liteflix-original animate__animated animate__fadeInLeft">
            <span className="more-weight">Flixflix</span>
            <span className="less-weight">Original</span>
          </div>

          <div className="movieTitle animate__animated animate__fadeIn">
            <div>
            <h3>{`${defaultMovie[0].original_title}`}</h3>
            </div>

            <div className="default-buttons animate__animated animate__fadeInDown">
              <button className="primary-btn">▷ PLAY</button>
              <button className="secondary-btn">+ MY LIST</button>
            </div>
          </div>
        </div>
      );
    }

}
