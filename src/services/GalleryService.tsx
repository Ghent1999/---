import { httpClient } from "../http/client";
import GalleryModel from "../models/GalleryModel";

export const GetGallery = async () => {
  return httpClient.get<GalleryModel[]>(`/gallery`).then((res) => res.data);
};
