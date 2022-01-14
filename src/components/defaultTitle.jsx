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
            <span>Original de</span>
            <span className="more-weight">Liteflix</span>
          </div>

          <div className="movieTitle animate__animated animate__fadeIn">
            <h3>{`${defaultMovie[0].original_title}`}</h3>

            <div className="default-buttons animate__animated animate__fadeInDown">
            <button className="primary-btn">▷ REPRODUCIR</button>
              <button className="secondary-btn">+ MI LISTA</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="liteflix-original animate__animated animate__fadeInLeft">
            <span>Original de</span>
            <span className="more-weight">Liteflix</span>
          </div>

          <div className="movieTitle animate__animated animate__fadeIn">
            <h3>{`${defaultMovie[0].original_title}`}</h3>

            <div className="default-buttons animate__animated animate__fadeInDown">
              <button className="primary-btn">▷ REPRODUCIR</button>
              <button className="secondary-btn">+ MI LISTA</button>
            </div>
          </div>
        </div>
      );
    }

}
