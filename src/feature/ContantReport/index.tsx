import ReportModel from "../../models/ReportModel";
import ReportResponse from "../../models/ReportModel";
import "./contantreport.css";
import CardReport from "../../components/CardCowReport";
interface ContentReportProps {
  type: ReportModel[];
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  typeCow: string;
  breed: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ContentReport({
  type,
  setModalShow,
  typeCow,
  breed,
  setLoading,
}: ContentReportProps) {
  const Projects = () => {
    return (
      <div className="row">
        {type.map((item: ReportResponse, index: number) => {
          if (item.type === typeCow) {
            if (item.breed === breed) {
              return (
                <CardReport
                  project={item}
                  setModalShow={setModalShow}
                  setLoading={setLoading}
                  key={`card-${index}`}
                />
              );
            } else if (breed === "ทั้งหมด") {
              return (
                <CardReport
                  project={item}
                  setModalShow={setModalShow}
                  setLoading={setLoading}
                  key={`card-${index}`}
                />
              );
            }
          } else if (typeCow === "ทั้งหมด") {
            if (item.breed === breed) {
              return (
                <CardReport
                  project={item}
                  setModalShow={setModalShow}
                  setLoading={setLoading}
                  key={`card-${index}`}
                />
              );
            } else if (breed === "ทั้งหมด") {
              return (
                <CardReport
                  project={item}
                  setModalShow={setModalShow}
                  setLoading={setLoading}
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
