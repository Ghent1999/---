import { httpClient } from "../http/client";
import GalleryModel, {
  GalleryInsert,
  ImageGallery,
} from "../models/GalleryModel";

import ReportModel, { ReportInsert } from "../models/ReportModel";

import GalleryDetailResponse from "../models/GalleryModel";

const getAllGallery = () => {
  return httpClient
    .get<Array<GalleryModel[]>>("/gallery")
    .then((res) => res.data);
};

const getAllGallerySort = () => {
  return httpClient
    .get<Array<GalleryModel[]>>("/gallery/sort/order")
    .then((res) => {
      return res.data;
    });
};

const getLastNo = () => {
  return httpClient
    .get<GalleryDetailResponse[]>("/gallery/sort/lastupdate")
    .then((res) => {
      return res.data[0];
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

const addReport = (data: ReportInsert) => {
  return httpClient.post<ReportInsert>("/report", data);
};

const getAllReport = () => {
  return httpClient
    .get<Array<ReportModel[]>>("/report")
    .then((res) => res.data);
};

const deleteReportByID = (id: string) => {
  return httpClient.delete(`/report/${id}`).then((res) => res.data);
};

const deleteGalleryByID = (id: string) => {
  return httpClient.delete(`/gallery/remove/${id}`).then((res) => res.data);
};

const GalleryService = {
  getAllGallery,
  getAllGallerySort,
  getLastNo,
  addGallery,
  uploadImageGallery,
  getAllReport,
  addReport,
  deleteReportByID,
  deleteGalleryByID,
};
export default GalleryService;
