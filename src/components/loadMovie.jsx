import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import Salir from "./images/Salir.png";
import Subir from "./images/Subir.png";

const fileTypes = ["JPG", "PNG"];

export default function LoadMovie(props) {
  const { setShowComponent } = props;

  const [file, setFile] = useState([]);
  const [title, setTitle] = useState("");

  const handleImageChange = (file) => {
    setFile(file);

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      localStorage.setItem("recent-image", reader.result);
    });

    reader.readAsDataURL(file);
  };

  const handleTextChange = (title) => {
    setTitle(title.target.value);
    console.log(title.target.value);
    localStorage.setItem("movie-title", title.target.value);
    if (title) {
      const localTitle = localStorage.getItem("movie-title");
      console.log(localTitle);
    }
  };

  const handleClose = () => {
    setShowComponent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    console.log(file);
  };

  {
    if (window.innerWidth <= 875) {
      return (
        <div className="box">
          <div className="boxContainer">
            <div
              className="liteflix"
              style={{
                fontWeight: "100",
                fontSize: "20px",
                margin: "100px 0 40px 0",
              }}
            >
              Agregar pelicula
            </div>
            <FileUploader
              handleChange={handleImageChange}
              name="file"
              types={fileTypes}
              style={{ cursor: "pointer" }}
              children={
                <div className="addMovieBox">
                  <span>
                    {file.length !== 0
                      ? `Nombre del archivo: ${file.name}`
                      : "🔗 Agregá un archivo"}
                  </span>
                </div>
              }
            />
            <form onSubmit={handleSubmit}>
              <div className="movieName">
                <input
                  name="title"
                  value={title}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Titulo"
                ></input>

                <div className="buttonBox">
                  <img onClick={handleSubmit} src={Subir} alt="subiendo" />
                  <img onClick={handleClose} src={Salir} alt="saliendo" />
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="box">
          <div className="closeButton">
            <button onClick={handleClose}>X</button>
          </div>
          <div className="boxContainer">
            <div
              className="liteflix"
              style={{
                fontWeight: "100",
                fontSize: "20px",
                marginBottom: "40px",
              }}
            >
              Agregar pelicula
            </div>
            <FileUploader
              handleChange={handleImageChange}
              name="file"
              types={fileTypes}
              style={{ cursor: "pointer" }}
              children={
                <div className="addMovieBox">
                  <span>
                    {file.length !== 0
                      ? `Nombre del archivo: ${file.name}`
                      : "🔗 Agregá un archivo o arrastralo y soltalo aquí"}
                  </span>
                </div>
              }
            />
            <form onSubmit={handleSubmit}>
              <div className="movieName">
                <input
                  name="title"
                  value={title}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Titulo"
                ></input>

                <div className="buttonBox">
                  <img src={Subir} alt="subiendo" />
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
