export default interface GalleryModel {
  data: GalleryResponse[];
}

interface GalleryResponse {
  id: string;
  create_at: string;
  fullname: string;
  tel: string;
  typeCow: string;
  image: string;
}
