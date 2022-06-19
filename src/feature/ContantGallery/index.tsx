import GalleryDetailResponse from "../../models/GalleryModel";
import GalleryModel from "../../models/GalleryModel";
import "./contantgallery.css";
import Card from "../../components/CardCow";
interface ContentGalleryProps {
  tab: string;
  type: GalleryModel[];
}
export default function ContentGallery({ tab, type }: ContentGalleryProps) {
  const Projects = () => {
    return (
      <div className="row">
        {type.map((item: GalleryDetailResponse, index: number) => {
          if (item.type === tab) {
            return <Card project={item} key={`card-${index}`} />;
          }
        })}
      </div>
    );
  };

  return (
    <span>
      <Projects />
    </span>
  );
}
