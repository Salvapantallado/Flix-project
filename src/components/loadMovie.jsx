import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import Cerrar from "./images/cerrar.png";

const fileTypes = ["JPG", "PNG"];

export default function LoadMovie(props) {
  const { setShowComponent } = props;

  const [file, setFile] = useState([]);
  const [title, setTitle] = useState("");
  const [localMovie, setLocalMovie] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)


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
      setLocalMovie(localTitle)
    }
  };

  const handleClose = () => {
    setShowComponent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
  };


  {if(isSubmitted === false) 
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

                  {title !== "" && file.length !== 0 ? (<div className="buttonBox">
                  <button type="submit">Subir pelicula</button>
                </div>) : (<div className="buttonBox" >
                  <button type="submit" disabled>Subir pelicula</button>
                </div>) }
                  <div className="exitButton">
                    <button onClick={handleClose}>Salir</button>
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
            <img src={Cerrar} onClick={handleClose} />
          </div>
          <div className="boxContainer">
            <div
              className="liteflix"
              style={{
                fontWeight: "100",
                fontSize: "30px",
                marginBottom: "10px",
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
                {title !== "" && file.length !== 0 ? (<div className="buttonBox">
                  <button type="submit">Subir pelicula</button>
                </div>) : (<div className="buttonBox" >
                  <button type="submit" disabled>Subir pelicula</button>
                </div>) }
                
              </div>
            </form>
          </div>
        </div>
      );
    }
  } else if(window.innerWidth <= 875 && isSubmitted === true) {
    return(
      <div className="box" style={{display: "flex"}}>
        <div className="box-container">

      <div className="movieName" style={{zIndex:"3", width: "100%"}}>
        <div className="mobileSpan">
          <span>¡Felicitaciones!</span>
          <br/>
          <br/>
          <span>{localMovie} fue correctamente subida. </span>
        </div>
           <div className="buttonBox">
              <button onClick={handleClose}>Volver</button>
            </div>
                
        </div>
      </div>
           </div>
    )
  } else {
    return(
      <div className="box" style={{display: "flex"}}>
        <div className="box-container">

      <div className="movieName" style={{zIndex:"3", width: "100%"}}>
          <div className="liteflix" style={{margin: "40px"}}>
          <span className="more-weight">Lite</span>
            <span className="less-weight">flix</span>
          </div>
        <div className="mobileSpan">
          <span>¡Felicitaciones!</span>
          <br/>
          <br/>
          <span>{localMovie} fue correctamente subida. </span>
        </div>
           <div className="buttonBox">
              <button onClick={handleClose}>Volver</button>
            </div>
                
        </div>
      </div>
           </div>
    )}
}
}
