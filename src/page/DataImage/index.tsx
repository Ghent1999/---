import "./dataImageCss.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../../../node_modules/@restart/ui/esm/Button";
import { ListType } from "../../enum/ListTypeCow";


export default function DataImage() {
  const [selectedImage, setSelectedImage] = useState();
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");
  const [typeCow, setTypeCow] = useState("");

  const imageChange = (e: { target: { files: string | any[] } }) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const submit = () => {
    console.log("fullName", fullName);
    console.log("tel", tel);
    console.log("TypeCow", typeCow);
    console.log("Image", selectedImage);
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
                      <option selected hidden>
                        ลักษณะกายภาพ
                      </option>
                      <option value={ListType.NOSE}>{ListType.NOSE}</option>
                      <option value={ListType.LEFTSIDE}>
                        {ListType.LEFTSIDE}
                      </option>
                      <option value={ListType.RIGHTSIDE}>
                        {ListType.RIGHTSIDE}
                      </option>
                      <option value={ListType.HAUNCH}>{ListType.HAUNCH}</option>
                      <option value={ListType.STOOL}>{ListType.STOOL}</option>
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
