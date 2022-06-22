import "./dataImageCss.css";
import { useState } from "react";
import GalleryService from "../../services/GalleryService";
import { Form, Spinner } from "react-bootstrap";
import Button from "../../../node_modules/@restart/ui/esm/Button";
import { GalleryInsert } from "../../models/GalleryModel";
import { ListBreedType, ListType } from "../../enum/ListTypeCow";
import { format } from "date-fns";
import Modals from "../../components/Modal";
import NavBar from "../../components/NavBar";

export default function DataImage() {
  const [selectedImage, setSelectedImage] = useState<any>();
  const [fullNamePerson, setFullNamePerson] = useState("");
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");
  const [typeCow, setTypeCow] = useState("");
  const [breedCow, setBreedCow] = useState("");
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState<boolean | undefined>(false);

  const imageChange = (e: { target: { files: string | any[] } }) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || captcha === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (
      fullNamePerson !== "" &&
      fullName !== "" &&
      tel !== "" &&
      typeCow !== "" &&
      selectedImage !== undefined &&
      selectedImage !== "" &&
      captcha
    ) {
      var date = new Date();
      var formattedDate = format(date, "d/MM/yyyy HH:mm");
      setLoading(true);
      await GalleryService.getLastNo().then(async (number): Promise<void> => {
        if (number?.no !== undefined) {
          number.no++;
        }
        await GalleryService.uploadImageGallery(selectedImage).then(
          async (url): Promise<void> => {
            const data: GalleryInsert = {
              no: number?.no ?? 1,
              create_at: formattedDate,
              full_name_owner: fullNamePerson,
              full_name: fullName,
              tel: tel,
              type: typeCow,
              image: url.data.link,
              breed: breedCow,
            };
            await GalleryService.addGallery(data)
              .then(() => {
                setModalShow(true);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        );
      });
    }
  };

  const doneSubmit = () => {
    setFullNamePerson("");
    setFullName("");
    setTel("");
    setTypeCow("");
    setBreedCow("");
    setSelectedImage(undefined);
    setValidated(false);
    setModalShow(false);
    setCaptcha(false);
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
    {
      value: ListType.FOOT,
    },
  ];

  const breedSelect = [
    {
      value: ListBreedType.NATIVE,
    },
    {
      value: ListBreedType.BRAHMAN,
    },
    {
      value: ListBreedType.CHAROLAIS,
    },
    {
      value: ListBreedType.SIMMENTAL,
    },
    {
      value: ListBreedType.DRY,
    },
    {
      value: ListBreedType.KAMPHAENGSAEN,
    },
    {
      value: ListBreedType.KABINBURI,
    },
    {
      value: ListBreedType.INDUS,
    },
  ];

  return (
    <>
      <NavBar />
      {!loading ? (
        <>
          <Modals
            show={modalShow}
            onHide={() => {
              doneSubmit();
            }}
            title="แจ้งเตือน"
            body="บันทึกข้อมูลสำเร็จ"
          />
          <div className="form-body">
            <div className="row col-12">
              <div className="form-holder w-100">
                <div className="form-content">
                  <div className="form-items">
                    <h3>เพิ่มรายละเอียดวัว</h3>
                    <p>กรุณากรอกข้อมูลจริง</p>
                    <Form
                      className="requires-validation"
                      noValidate
                      validated={validated}
                    >
                      <div className="col-md-12">
                        <Form.Control
                          type="text"
                          placeholder="กรุณากรอกชื่อเจ้าของวัว"
                          onChange={(e) => setFullNamePerson(e.target.value)}
                          required
                          value={fullNamePerson}
                        />
                        <div className="invalid-feedback ml-6 pl-2">
                          กรุณากรอกชื่อเจ้าของวัว
                        </div>
                      </div>
                      <div className="col-md-12">
                        <Form.Control
                          type="text"
                          placeholder="กรุณากรอกชื่อวัว"
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          value={fullName}
                        />
                        <div className="invalid-feedback ml-6 pl-2">
                          กรุณากรอกชื่อวัว
                        </div>
                      </div>
                      <div className="col-md-12">
                        <Form.Control
                          type="text"
                          placeholder="กรุณากรอกเบอร์โทร"
                          onChange={(e) => setTel(e.target.value)}
                          required
                          value={tel}
                        />
                        <div className="invalid-feedback ml-6 pl-2">
                          กรุณากรอกเบอร์โทร
                        </div>
                      </div>
                      <div className="col-md-12">
                        <Form.Group>
                          <Form.Control
                            as="select"
                            required
                            onChange={(e) => setBreedCow(e.target.value)}
                            value={breedCow}
                          >
                            <option value="">เลือกพันธุ์วัว</option>
                            {breedSelect.map((breed, index) => {
                              return (
                                <option value={breed.value} key={index}>
                                  {breed.value}
                                </option>
                              );
                            })}
                          </Form.Control>
                          <div className="invalid-feedback ml-6 pl-2">
                            กรุณาเลือกพันธุ์วัว
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-12">
                        <Form.Group>
                          <Form.Control
                            as="select"
                            required
                            onChange={(e) => setTypeCow(e.target.value)}
                            value={typeCow}
                          >
                            <option value="">เลือกประเภท</option>
                            {optionSelect.map((option, index) => {
                              return (
                                <option value={option.value} key={index}>
                                  {option.value}
                                </option>
                              );
                            })}
                          </Form.Control>
                          <div className="invalid-feedback ml-6 pl-2">
                            กรุณาเลือกประเภท
                          </div>
                        </Form.Group>
                      </div>
                      <div className="col-md-12">
                        <Form.Control
                          required
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
                        <div className="invalid-feedback ml-6 pl-2">
                          กรุณาอัพโหลดรูปภาพ
                        </div>
                      </div>

                      <div className="captcha mt-3">
                        <div className="spinner">
                          <label>
                            <input
                              type="checkbox"
                              onChange={(e) => setCaptcha(e.target.checked)}
                            />
                            <span className="checkmark">
                              <span>&nbsp;</span>
                            </span>
                          </label>
                        </div>
                        <div className="text">I'm not a robot</div>
                        <div className="logo">
                          <img
                            src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/"
                            alt="captcha"
                          />
                          <p>reCAPTCHA</p>
                          <small>Privacy - Terms</small>
                        </div>
                      </div>

                      <div className="form-button mt-3 text-center">
                        <Button
                          onClick={handleSubmit}
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
      ) : (
        <div className="container loading" style={{ height: 400 }}>
          <Spinner animation="border" variant="light" />
        </div>
      )}
    </>
  );
}
