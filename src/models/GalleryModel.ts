export default interface GalleryModel {
  data: GalleryResponse[];
}

interface GalleryResponse {
  id: string;
  no: number;
  create_at: string;
  fullname: string;
  tel: string;
  type: string;
  image: string;
}

export interface GalleryInsert{
  no: number;
  create_at: string;
  full_name: string;
  tel: string;
  type: string;
  image: string;
}

export interface ImageGallery{
  link: string;
}

export default interface GalleryDetailResponse {
  id: string;
  no: number;
  create_at: string;
  full_name: string;
  tel: string;
  type: string;
  image: string;
}

