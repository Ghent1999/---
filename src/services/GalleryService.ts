import { httpClient } from "../http/client";
import GalleryModel from "../models/GalleryModel";

export const GetGallery = async () => {
  return httpClient.get<GalleryModel[]>(`/gallery`).then((res) => res.data);
};

const getAllGallery = () => {
  return httpClient.get<Array<GalleryModel[]>>("/gallery").then((res) => res.data);
};
const get = (id: any) => {
  return httpClient.get<GalleryModel>(`/tutorials/${id}`);
};
const create = (data: GalleryModel) => {
  return httpClient.post<GalleryModel>("/tutorials", data);
};
const update = (id: any, data: GalleryModel) => {
  return httpClient.put<any>(`/tutorials/${id}`, data);
};
const remove = (id: any) => {
  return httpClient.delete<any>(`/tutorials/${id}`);
};
const removeAll = () => {
  return httpClient.delete<any>(`/tutorials`);
};
const findByTitle = (title: string) => {
  return httpClient.get<Array<GalleryModel>>(`/tutorials?title=${title}`);
};
const TutorialService = {
  getAllGallery,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
export default TutorialService;