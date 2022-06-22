import "./admin.css";
import { useEffect, useState } from "react";
import { Col, Form, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import { ListAdmin, ListBreedType, ListType } from "../../enum/ListTypeCow";
import TutorialDataService from "../../services/GalleryService";
import ContentReport from "../../feature/ContantReport";
import ModalsReport from "../../components/ModalReport";
import Modals from "../../components/Modal";

export default function Admin() {
  const [dataArray, setDataArray] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [typeCow, setTypeCow] = useState("ทั้งหมด");
  const [breedCow, setBreedCow] = useState("ทั้งหมด");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetDataGallery();
  }, []);

  function GetDataGallery() {
    TutorialDataService.getAllReport()
      .then((response: any) => {
        setDataArray(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  const reload = () => window.location.reload();

  const doneSubmit = () => {
    reload();
    setModalShow(false);
  };

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

  return (
    <>
      {!loading ? (
        <>
          <Modals
            show={modalShow}
            onHide={() => {
              doneSubmit();
            }}
            title="แจ้งเตือน"
            body="ลบข้อมูลสำเร็จ"
          />
          <Tabs
            defaultActiveKey={ListAdmin.REPORT}
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey={ListAdmin.REPORT} title={ListAdmin.REPORT}>
              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            className="btn-primary btn-lg breed"
                            as="select"
                            required
                            onChange={(e) => setTypeCow(e.target.value)}
                            value={typeCow}
                          >
                            <option value="ทั้งหมด">ทั้งหมด</option>
                            {optionSelect.map((option, index) => {
                              return (
                                <option value={option.value} key={index}>
                                  {option.value}
                                </option>
                              );
                            })}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Control
                            className="btn-primary btn-lg breed"
                            as="select"
                            required
                            onChange={(e) => setBreedCow(e.target.value)}
                            value={breedCow}
                          >
                            <option value="ทั้งหมด">ทั้งหมด</option>
                            {breedSelect.map((breed, index) => {
                              return (
                                <option value={breed.value} key={index}>
                                  {breed.value}
                                </option>
                              );
                            })}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="row">
                      <ContentReport
                        type={dataArray}
                        setModalShow={setModalShow}
                        typeCow={typeCow}
                        breed={breedCow}
                        setLoading={setLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </>
      ) : (
        <div className="container loading" style={{ height: 400 }}>
          <Spinner animation="border" variant="light" />
        </div>
      )}
    </>
  );
}
