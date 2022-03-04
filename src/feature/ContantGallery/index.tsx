import GalleryDetailResponse from "../../models/GalleryModel";
import GalleryModel from "../../models/GalleryModel";
interface ContentGalleryProps {
  tab: string;
  type: GalleryModel[];
}

export default function ContentGallery({ tab, type }: ContentGalleryProps) {
  return (
    <>
      {type.map((item: GalleryDetailResponse, index) => {
        if (item.type === tab) {
          return (
            <a
              href={item.image}
              data-toggle="lightbox"
              data-gallery="example-gallery"
              className="col-lg-3 col-md-4 col-6 my-3"
              key={item.id}
            >
              <img src={item.image} className="img-fluid card" />
            </a>
          );
        }
      })}
    </>
  );
}
