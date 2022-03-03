import { useEffect, useState } from "react";
import GalleryDetailResponse from "../../models/GalleryModel";
import TutorialDataService from "../../services/GalleryService";

import axios from "axios";
import GalleryModel from "../../models/GalleryModel";
/* eslint-disable jsx-a11y/alt-text */
interface ContentGalleryProps {
  tab: string;
  type: GalleryModel[];
}

export default function ContentGallery({ tab, type }: ContentGalleryProps) {
  return (
    <>
      {type.map((item: GalleryDetailResponse, index) => {
        if (item.typeCow === tab) {
          return (
            // <div className="col-3 item" key={item.id}>
            //   <a href={item.image} data-lightbox="photos">
            //     <img className="img-fluid" src={item.image} alt="" />
            //   </a>
            // </div>

            <div className="row" key={item.id}>
              <a
                href={item.image}
                data-toggle="lightbox"
                data-gallery="example-gallery"
                className="col-lg-3 col-md-4 col-6 my-3"
              >
                <img src={item.image} className="img-fluid card" />
              </a>
            </div>
          );
        }
      })}
    </>
  );
}
