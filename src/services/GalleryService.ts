import { httpClient } from "../http/client";
import GalleryModel, { GalleryInsert, ImageGallery } from "../models/GalleryModel";
import GalleryDetailResponse from '../models/GalleryModel';


const getAllGallery = () => {
  return httpClient
    .get<Array<GalleryModel[]>>("/gallery")
    .then((res) => res.data);
};

const getAllGallerySort = () => {
  return httpClient
    .get<Array<GalleryModel[]>>("/gallery/sort/order")
    .then((res) => {
      // console.log(res.data);
      return res.data
    });
};

const getLastNo = () => {
  return httpClient
    .get<GalleryDetailResponse[]>("/gallery/sort/lastupdate")
    .then((res) => {
      return res.data[0]
    });
};

const addGallery = (data: GalleryInsert) => {
  return httpClient.post<GalleryInsert>("/gallery", data);
};

const uploadImageGallery = (data: File) => {
  var formData = new FormData();
  formData.append("img", data);

  return httpClient.post<ImageGallery>("/gallery/uploadimage", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const TutorialService = {
  getAllGallery,
  getAllGallerySort,
  getLastNo,
  addGallery,
  uploadImageGallery,
};
export default TutorialService;
