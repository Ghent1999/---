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
  const [fetchGallery, setFetchGallery] = useState({ data: [] });
  const [dataArray, setDataArray] = useState([]);
  const [noMoreData, setNoMoreData] = useState(false);
  const [loopMutex, setLoopMutex] = useState(true);
  
  // console.log(type);
  // setDataArray(type);

  // useEffect(() => {
  //   retrieveTutorials();
  // }, []);

  // function retrieveTutorials() {
  //   TutorialDataService.getAllGallery()
  //     .then((response: any) => {
  //       setDataArray(response.data);
  //       // console.log(response.data);
  //     })
  //     .catch((e: Error) => {
  //       console.log(e);
  //     });
  // }

  // const fetchData = async () => {
  //   try {
  //     const { status, data } = await axios.get("/gallery");
  //     if (status === 200) {
  //       if (data.data.length > 0) {
  //         const extendedDataArray = dataArray.concat(data.data);
  //         setDataArray(data.data);
  //         console.log(data);
  //       }
  //     }
  //   } catch (error) {
  //     setLoopMutex(!loopMutex);
  //   }
  //   setLoopMutex(!loopMutex);
  // };

  // const fetchGalleryData = async () => {
  //   const gallery = await GetGallery() as any;
  //   const { status, data } = await GetGallery();
  //   setFetchGallery(gallery);
  //   console.log(gallery);
  // };

  // useEffect(() => {
  //   fetchData()
  //     .then(function (response) {
  //       /* console.log(response.data.factory_capacity); */
  //       setDataArray(response.data.factory_capacity);
  //       setcapacity(response.data.factory_capacity);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {

  //   if (!noMoreData) {
  //     fetchData();
  //   }
  //   // fetchGalleryData();
  // },[loopMutex]);
  return (
    <>
      {type.map((item: GalleryDetailResponse, index) => {
        if (item.typeCow === tab) {
          // console.log(tab);
          return (
            // <div className="col-3 item" key={item.id}>
            //   <a href={item.image} data-lightbox="photos">
            //     <img className="img-fluid" src={item.image} alt="" />
            //   </a>
            // </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white mt-3">{tab}</h1>
                <div className="row">
                  <a
                    href={item.image}
                    data-toggle="lightbox"
                    data-gallery="example-gallery"
                    className="col-lg-3 col-md-4 col-6 my-3"
                  >
                    <img
                      src={item.image}
                      className="img-fluid card"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          );
        }
      })}
    </>
  );
}
