import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ReactCardFlip from "react-card-flip";
import "../feature/ContantGallery/contantgallery.css";
import GalleryDetailResponse from "../models/GalleryModel";
import { ReportInsert } from "../models/ReportModel";
import Modals from "./Modal";

interface DataGalleryProps {
  project: GalleryDetailResponse;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectData: Dispatch<ReportInsert>;
}

export default function Card({
  project,
  setModalShow,
  setSelectData,
}: DataGalleryProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const data: ReportInsert = {
    no: project.no,
    create_at: project.create_at,
    full_name_owner: project.full_name_owner,
    full_name: project.full_name,
    tel: project.tel,
    type: project.type,
    image: project.image,
    breed: project.breed,
    token_gallery: project.id,
  };

  function SelectData() {
    setSelectData(data);
    setModalShow(true);
  }

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
          href="#show"
        >
          <img
            src={project.image}
            className="img-fluid card showmore"
            alt="card show"
          />
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
        <div className="font my-3">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={() => {
              window.open(
                `https://api-cow.herokuapp.com/api/download/${project.no}`,
                "_blank"
              );
            }}
          >
            Download
          </button>
        </div>
        <div className="font">
          <button
            className="btn btn-danger btn-lg btn-block"
            onClick={SelectData}
          >
            รายงานรูปภาพ
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
}
