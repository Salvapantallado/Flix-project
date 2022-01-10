import React from "react";

import Primario from "./images/Primario.png";
import Secundario from "./images/Secundario.png";

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
              <img src={Primario} alt="Reproducir" />
              <img src={Secundario} alt="Mi Lista" />
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
              <img src={Primario} alt="Reproducir" />
              <img src={Secundario} alt="Mi Lista" />
            </div>
          </div>
        </div>
      );
    }

}
