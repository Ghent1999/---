import GalleryDetailResponse from "../../models/GalleryModel";
import GalleryModel from "../../models/GalleryModel";
import "./contantgallery.css";
import Card from "../../components/CardCow";
import { Dispatch } from "react";
import { ReportInsert } from "../../models/ReportModel";
interface ContentGalleryProps {
  tab: string;
  type: GalleryModel[];
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  breed: string;
  setSelectData: Dispatch<ReportInsert>;
}
export default function ContentGallery({
  tab,
  type,
  setModalShow,
  breed,
  setSelectData,
}: ContentGalleryProps) {
  const Projects = () => {
    return (
      <div className="row">
        {type.map((item: GalleryDetailResponse, index: number) => {
          if (item.type === tab) {
            if (item.breed === breed) {
              return (
                <Card
                  project={item}
                  setModalShow={setModalShow}
                  setSelectData={setSelectData}
                  key={`card-${index}`}
                />
              );
            } else if (breed === "ทั้งหมด") {
              return (
                <Card
                  project={item}
                  setModalShow={setModalShow}
                  setSelectData={setSelectData}
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
