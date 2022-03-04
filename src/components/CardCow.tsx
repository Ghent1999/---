import React from "react";
import ReactCardFlip from "react-card-flip";
import "../feature/ContantGallery/contantgallery.css";

/* eslint-disable jsx-a11y/alt-text */
export default function Card({ project }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <a
          data-toggle="lightbox"
          data-gallery="example-gallery"
          className="col-lg-3 col-md-4 col-6 my-3"
          key={project.id}
        >
          <img src={project.image} className="img-fluid card showmore" />
        </a>
      </div>
      <div
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <div className="font">ชื่อ : {project.full_name}</div>
        <div className="font">เบอร์โทร : {project.tel}</div>
        <div className="font">วันที่ : {project.create_at}</div>
        <div className="font">ประเภท : {project.type}</div>
      </div>
    </ReactCardFlip>
  );
}
