import React, { useState, useEffect, useRef } from "react";

import Menu from "./images/menu.png";
import Notification from "./images/notification.png";
import User from "./images/user.png";
import Link from "./images/Link.png";
import AddMovie from "./images/AddMovie.png";
import LoadMovie from "./loadMovie";

export default function Navbar() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => setShowComponent(!showComponent);

  console.log(showComponent);

  {
    if (window.innerWidth <= 875) {
      return (
        <div className="navbar">
          <div className="animate__animated animate__fadeInLeft">
            <img onClick={handleClick} src={AddMovie} alt="Agregar Pelicula" />
            {showComponent ? (
              <LoadMovie
                showComponent={showComponent}
                setShowComponent={setShowComponent}
              />
            ) : null}
          </div>
          <div className="liteflix animate__animated animate__fadeInDown">
            <span className="more-weight">Lite</span>
            <span className="less-weight">flix</span>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <img src={User} alt="Usuario" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <div className="liteflix animate__animated animate__fadeInDown">
            <span className="more-weight">Lite</span>
            <span className="less-weight">flix</span>
            <div className="addMovie animate__animated animate__fadeInDown">
              <img onClick={handleClick} src={Link} alt="Agregar pelicula" />
              {showComponent ? (
                <LoadMovie
                  showComponent={showComponent}
                  setShowComponent={setShowComponent}
                />
              ) : null}
            </div>
          </div>

          <div className="navbar-icons animate__animated animate__fadeInRight">
            <img src={Menu} alt="dropdown" />
            <img src={Notification} alt="bell" />
            <img src={User} alt="account" />
          </div>
        </div>
      );
    }
  }
}
