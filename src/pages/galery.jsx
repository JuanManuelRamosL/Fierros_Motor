import React, { useState } from "react";
import "./Galery.css";
import Contact from "../Components/contact";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
    setZoom(1);
    setDragging(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomClick = () => {
    setZoom((prevZoom) => {
      const newZoom = prevZoom === 1 ? 1.5 : 1;
      return newZoom;
    });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="gallery-container">
      <h2 className="titles">Pulido de Ópticas</h2>
      <div className="gallery-section">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_865704-MLA52414685812_112022-O.webp"
          alt="Pulido de Óptica 1"
          className="imgs-servicios"
          onClick={() =>
            handleImageClick(
              "https://http2.mlstatic.com/D_NQ_NP_865704-MLA52414685812_112022-O.webp"
            )
          }
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT548b1vSfeo3Pb02eVe-HH7r9vVLMSCJ1CARi9uV9lUyG90XgTJYYqpQg45Cj7AG2fTsw&usqp=CAU"
          alt="Pulido de Óptica 2"
          className="imgs-servicios"
          onClick={() =>
            handleImageClick(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT548b1vSfeo3Pb02eVe-HH7r9vVLMSCJ1CARi9uV9lUyG90XgTJYYqpQg45Cj7AG2fTsw&usqp=CAU"
            )
          }
        />
        <img
          src="/galery1.jpeg"
          alt="Pulido de Óptica 3"
          className="imgs-servicios"
          onClick={() => handleImageClick("/galery1.jpeg")}
        />
      </div>

      <hr />

      <h2 className="titles">Pulido de Chapa</h2>
      <div className="gallery-section">
        <img
          src="/galery2.jpeg"
          alt="Pulido de Chapa 1"
          className="imgs-servicios"
          onClick={() => handleImageClick("/galery2.jpeg")}
        />
        <img
          src="/galery3.jpeg"
          alt="Pulido de Chapa 2"
          className="imgs-servicios"
          onClick={() => handleImageClick("/galery3.jpeg")}
        />
        <img
          src="https://blog.pinturasmirobriga.com/wp-content/uploads/2018/06/como-pulir-un-coche-forma-casera.jpg"
          alt="Pulido de Chapa 3"
          className="imgs-servicios"
          onClick={() =>
            handleImageClick(
              "https://blog.pinturasmirobriga.com/wp-content/uploads/2018/06/como-pulir-un-coche-forma-casera.jpg"
            )
          }
        />
      </div>

      <hr />
      
      <h2 className="titles">Lavados</h2>
      <div className="gallery-section">
        <div className="card-image">
          <img
            src="/images/lavados/lavado1.jpg"
            alt="Lavado 1"
            className="imgs-servicios"
            onClick={() => handleImageClick("/images/lavados/lavado1.jpg")}
          />
        </div>
        <div className="card-image">
          <img
            src="/images/lavados/lavado2.jpg"
            alt="Lavado 2"
            className="imgs-servicios"
            onClick={() => handleImageClick("/images/lavados/lavado2.jpg")}
          />
        </div>
        <div className="card-image">
          <img
            src="/images/lavados/lavado3.jpg"
            alt="Lavado 3"
            className="imgs-servicios"
            onClick={() => handleImageClick("/images/lavados/lavado3.jpg")}
          />
        </div>
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close-button" onClick={handleCloseClick}>
            <svg
              width="30px"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <img
            src={selectedImage}
            alt="Expanded"
            className={`modal-content ${zoom === 1.5 ? "zoom-out" : ""}`}
            style={{
              transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
            }}
            onClick={handleZoomClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        </div>
      )}

      <Contact />
    </div>
  );
};

export default Gallery;
