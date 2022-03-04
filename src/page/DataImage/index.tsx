import "./dataImageCss.css";
import { useEffect, useState } from "react";
import TutorialDataService from "../../services/GalleryService";
import { Form } from "react-bootstrap";
import Button from "../../../node_modules/@restart/ui/esm/Button";
import GalleryModel, {
  GalleryInsert,
  ImageGallery,
} from "../../models/GalleryModel";
import { ListType } from "../../enum/ListTypeCow";
import { format } from "date-fns";

export default function DataImage() {
  const [selectedImage, setSelectedImage] = useState<any>();
  const [dataArray, setDataArray] = useState([]);
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");
  const [typeCow, setTypeCow] = useState("");

  const imageChange = (e: { target: { files: string | any[] } }) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const submit = async () => {
    var date = new Date();
    var formattedDate = format(date, "d/MM/yyyy HH:mm");
    await TutorialDataService.getLastNo().then(
      async (number): Promise<void> => {
        number.no++;
        await TutorialDataService.uploadImageGallery(selectedImage).then(
          async (url): Promise<void> => {
            const data: GalleryInsert = {
              no: number.no,
              create_at: formattedDate,
              full_name: fullName,
              tel: tel,
              type: typeCow,
              image: url.data.link,
            };
            await TutorialDataService.addGallery(data)
              .then(() => {
                console.log("ได้ละ");
              })
              .catch((error) => {
                console.log(error);
              });
          }
        );
      }
    );
  };

  const styles = {
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };

  const optionSelect = [
    {
      value: "เลือกประเภท",
    },
    {
      value: ListType.NOSE,
    },
    {
      value: ListType.LEFTSIDE,
    },
    {
      value: ListType.RIGHTSIDE,
    },
    {
      value: ListType.HAUNCH,
    },
    {
      value: ListType.STOOL,
    },
  ];

  return (
    <>
      <div className="form-body">
        <div className="row col-12">
          <div className="form-holder w-100">
            <div className="form-content">
              <div className="form-items">
                <h3>เพิ่มรายละเอียดวัว</h3>
                <p>กรุณากรอกข้อมูลจริง</p>
                <Form className="requires-validation" noValidate>
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Tel : 0987654321"
                      onChange={(e) => setTel(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <Form.Select
                      required
                      onChange={(e) => setTypeCow(e.target.value)}
                    >
                      {optionSelect.map((option, index) => {
                        return (
                          <option value={option.value} key={index}>{option.value}</option>
                        );
                      })}
                    </Form.Select>
                  </div>
                  <div className="col-md-12">
                    <Form.Control
                      accept="image/*"
                      type="file"
                      className="form-control mt-3 rounded"
                      onChange={imageChange as any}
                    />
                    {selectedImage && (
                      <div className="mt-3">
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          style={styles.image}
                          alt="Thumb"
                        />
                      </div>
                    )}
                  </div>

                  <div className="form-button mt-3 text-center">
                    <Button
                      onClick={submit}
                      id="submit"
                      className="btn btn-primary col-6"
                    >
                      Register
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
