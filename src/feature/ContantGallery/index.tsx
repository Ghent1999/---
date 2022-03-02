import { useEffect, useState } from "react";
import GalleryModel from "../../models/GalleryModel";
import TutorialDataService from "../../services/GalleryService";

import axios from "axios";
/* eslint-disable jsx-a11y/alt-text */
interface ContentGalleryProps {
  tab: string;
}


export default function ContentGallery({ tab }: ContentGalleryProps) {
  const [fetchGallery, setFetchGallery] = useState({ data: [] });
  const [dataArray, setDataArray] = useState([]);
  const [noMoreData, setNoMoreData] = useState(false);
  const [loopMutex, setLoopMutex] = useState(true);
  useEffect(() => {
    retrieveTutorials();
  }, []);
  
  const retrieveTutorials = () => {
    TutorialDataService.getAllGallery()
      .then((response: any) => {
        setDataArray(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  

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
      {dataArray.map((data, index) => {
        console.log(data);
        // if (data == tab) {
        //   return (
        //     <div className="col-3 item" key={data.id}>
        //       <a href={data.image} data-lightbox="photos">
        //         <img className="img-fluid" src={data.image} alt="" />
        //       </a>
        //     </div>
        //   );
        // }
      })}
    </>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-12">
    //       <h1 className="text-white mt-3">{tab}</h1>
    //       <div className="row">
    //         <a
    //           href="https://unsplash.it/1200/768.jpg?image=251"
    //           data-toggle="lightbox"
    //           data-gallery="example-gallery"
    //           className="col-lg-3 col-md-4 col-6 my-3"
    //         >
    //           <img
    //             src="https://unsplash.it/600.jpg?image=251"
    //             className="img-fluid card"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
