import GalleryDetailResponse from "../../models/GalleryModel";
import GalleryModel from "../../models/GalleryModel";
import "./contantgallery.css";
import Card from "../../components/CardCow";
interface ContentGalleryProps {
  tab: string;
  type: GalleryModel[];
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  breed: string;
}
export default function ContentGallery({
  tab,
  type,
  setModalShow,
  breed,
}: ContentGalleryProps) {
  const Projects = () => {
    return (
      <div className="row">
        {type.map((item: GalleryDetailResponse, index: number) => {
          if (item.type === tab) {
            console.log(item.breed);
            if (item.breed === breed) {
              return (
                <Card
                  project={item}
                  setModalShow={setModalShow}
                  key={`card-${index}`}
                />
              );
            } else if (breed === "ทั้งหมด") {
              return (
                <Card
                  project={item}
                  setModalShow={setModalShow}
                  key={`card-${index}`}
                />
              );
            }
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
