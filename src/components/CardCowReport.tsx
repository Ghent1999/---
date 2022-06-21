import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ReactCardFlip from "react-card-flip";
import "../feature/ContantGallery/contantgallery.css";
import ReportResponse from "../models/ReportModel";
import GalleryService from "../services/GalleryService";
import Modals from "./Modal";

interface DataGalleryReportProps {
  project: ReportResponse;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardReport({
  project,
  setModalShow,
  setLoading,
}: DataGalleryReportProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const cancelReport = async (event: any) => {
    setLoading(true);
    await GalleryService.deleteReportByID(project.token).then((res) => {
      if (res === "ลบสำเร็จ") {
        setLoading(false);
        setModalShow(true);
      }
    });
  };

  const DeleteReport = async (event: any) => {
    setLoading(true);
    await GalleryService.deleteGalleryByID(project.token_gallery).then(
      async (res) => {
        if (res === "ลบสำเร็จ") {
          await GalleryService.deleteReportByID(project.token).then((res) => {
            if (res === "ลบสำเร็จ") {
              setLoading(false);
              setModalShow(true);
            } else {
              setLoading(false);
            }
          });
        } else {
          setLoading(false);
        }
      }
    );
  };

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
          key={project.token}
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
            className="btn btn-danger btn-lg btn-block"
            onClick={DeleteReport}
          >
            ลบรูปภาพ
          </button>
        </div>
        <div className="font">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={cancelReport}
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
}
