import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import Cerrar from "./images/cerrar.png";

const fileTypes = ["JPG", "PNG"];

export default function LoadMovie(props) {
  const { setShowComponent } = props;

  const [file, setFile] = useState([]);

  const [object, setObject] = useState({
    nombre: "",
    imagen: "",
  } )

  const [title, setTitle] = useState("");
  
  
  const [localMovie, setLocalMovie] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)


  // const handleImageChange = (file) => {
  //   setFile(file);

  //   const reader = new FileReader();

  //   reader.addEventListener("load", () => {
  //     localStorage.setItem("recent-image", reader.result);
  //   });

  //   reader.readAsDataURL(file);
  // };


  const handleImageChange = (file) => {
    setFile(file)
    setObject({ ...object, imagen: file});
    console.log(object, "image");
    console.log(file);
  };

  // const handleTextChange = (title) => {
  //   setTitle(title.target.value);
  //   console.log(title.target.value);
  //   localStorage.setItem("movie-title", title.target.value);
  //   if (title) {
  //     const localTitle = localStorage.getItem("movie-title");
  //     setLocalMovie(localTitle)
  //   }
  // };

  const handleTextChange = (title) => {
    setTitle(title.target.value)
    setObject({...object, nombre: title.target.value})
    console.log(object, "title");
    console.log(title.target.value);
  };


  const handleClose = () => {
    setShowComponent(false);
  };

  const handleRefresh = () => {
    window.location.reload(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr_serialized = JSON.stringify(object);
    localStorage.setItem("Obj", arr_serialized);
    console.log(arr_serialized);
    setIsSubmitted(true)
  };


  if(isSubmitted === false) 
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
                      ? `File name: ${file.name}`
                      : "🔗 Add file"}
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
                  placeholder="Title"
                ></input>

                  {title !== "" && file.length !== 0 ? (<div className="buttonBox">
                  <button type="submit">Upload Movie</button>
                </div>) : (<div className="buttonBox" >
                  <button type="submit" disabled>Upload Movie</button>
                </div>) }
                  <div className="exitButton">
                    <button onClick={handleClose}>Exit</button>
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
            <img src={Cerrar} onClick={handleClose} alt="cerrar" />
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
              Add Movie 
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
                      ? `File name: ${file.name}`
                      : "🔗 Add file or drag-and-drop it here"}
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
                  placeholder="Title"
                ></input>
                {title !== "" && file.length !== 0 ? (<div className="buttonBox">
                  <button type="submit">Upload Movie</button>
                </div>) : (<div className="buttonBox" >
                  <button type="submit" disabled>Upload Movie</button>
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
          <span>Congratulations!</span>
          <br/>
          <br/>
          <span>{localMovie} has been uploaded successfully. </span>
        </div>
           <div className="buttonBox">
              <button onClick={handleRefresh}>Back to Home</button>
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
          <span className="more-weight">Flix</span>
            <span className="less-weight">Flix</span>
          </div>
        <div className="mobileSpan">
          <span>Congratulations!</span>
          <br/>
          <br/>
          <span>{localMovie} has been uploaded successfully. </span>
        </div>
           <div className="buttonBox">
              <button onClick={handleRefresh}>Go back</button>
            </div>
                
        </div>
      </div>
           </div>
    )}

}
