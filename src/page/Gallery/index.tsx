import { useEffect, useState } from "react";
import { Col, Form, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import Modals from "../../components/Modal";
import ModalsReport from "../../components/ModalReport";
import { ListBreedType, ListType } from "../../enum/ListTypeCow";
import ContentGallery from "../../feature/ContantGallery";
import { ReportInsert } from "../../models/ReportModel";
import TutorialDataService from "../../services/GalleryService";
import "./gallery.css";

export default function Gallery() {
  const [dataArray, setDataArray] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [typeCow, setTypeCow] = useState("ทั้งหมด");
  const [selectdata, setSelectData] = useState<ReportInsert | undefined>();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    GetDataGallery();
  }, []);

  function GetDataGallery() {
    TutorialDataService.getAllGallery()
      .then((response: any) => {
        setDataArray(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  const doneSubmit = () => {
    setAlert(false);
  };

  const optionSelect = [
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
      {!loading ? (
        <>
          <Modals
            show={alert}
            onHide={() => {
              doneSubmit();
            }}
            title="แจ้งเตือน"
            body="รายงานรูปภาพสำเร็จ"
          />
          :
          <ModalsReport
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
            Modalshow={setModalShow}
            title="แจ้งเตือน"
            body="ยืนยันรายงานรูปภาพ"
            selectData={selectdata}
            setLoading={setLoading}
            alert={setAlert}
          />
          ;
          <div className="form-body">
            <div className="row col-12">
              <div className="form-gallery w-100">
                <div className="form-content-gallery">
                  <div className="form-items">
                    <Tabs
                      defaultActiveKey={ListType.NOSE}
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey={ListType.NOSE} title={ListType.NOSE}>
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <Row>
                                <Col>
                                  <h1 className="text-white mt-3">
                                    {ListType.NOSE}
                                  </h1>
                                </Col>
                                <Col>
                                  <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                      window.open(
                                        "https://api-cow.herokuapp.com/api/download/all",
                                        "_blank"
                                      );
                                    }}
                                  >
                                    Download All Images
                                  </button>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Control
                                      className="btn-primary btn-lg breed"
                                      as="select"
                                      required
                                      onChange={(e) =>
                                        setTypeCow(e.target.value)
                                      }
                                      value={typeCow}
                                    >
                                      <option value="">ทั้งหมด</option>
                                      {optionSelect.map((option, index) => {
                                        return (
                                          <option
                                            value={option.value}
                                            key={index}
                                          >
                                            {option.value}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <div className="row">
                                <ContentGallery
                                  tab={ListType.NOSE}
                                  setModalShow={setModalShow}
                                  type={dataArray}
                                  breed={typeCow}
                                  setSelectData={setSelectData}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        eventKey={ListType.LEFTSIDE}
                        title={ListType.LEFTSIDE}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <Row>
                                <Col>
                                  <h1 className="text-white mt-3">
                                    {ListType.LEFTSIDE}
                                  </h1>
                                </Col>
                                <Col>
                                  <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                      window.open(
                                        "https://api-cow.herokuapp.com/api/download/all",
                                        "_blank"
                                      );
                                    }}
                                  >
                                    Download All Images
                                  </button>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Control
                                      className="btn-primary btn-lg breed"
                                      as="select"
                                      required
                                      onChange={(e) =>
                                        setTypeCow(e.target.value)
                                      }
                                      value={typeCow}
                                    >
                                      <option value="">ทั้งหมด</option>
                                      {optionSelect.map((option, index) => {
                                        return (
                                          <option
                                            value={option.value}
                                            key={index}
                                          >
                                            {option.value}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <div className="row">
                                <ContentGallery
                                  tab={ListType.LEFTSIDE}
                                  setModalShow={setModalShow}
                                  type={dataArray}
                                  breed={typeCow}
                                  setSelectData={setSelectData}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab
                        eventKey={ListType.RIGHTSIDE}
                        title={ListType.RIGHTSIDE}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <Row>
                                <Col>
                                  <h1 className="text-white mt-3">
                                    {ListType.RIGHTSIDE}
                                  </h1>
                                </Col>
                                <Col>
                                  <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                      window.open(
                                        "https://api-cow.herokuapp.com/api/download/all",
                                        "_blank"
                                      );
                                    }}
                                  >
                                    Download All Images
                                  </button>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Control
                                      className="btn-primary btn-lg breed"
                                      as="select"
                                      required
                                      onChange={(e) =>
                                        setTypeCow(e.target.value)
                                      }
                                      value={typeCow}
                                    >
                                      <option value="">ทั้งหมด</option>
                                      {optionSelect.map((option, index) => {
                                        return (
                                          <option
                                            value={option.value}
                                            key={index}
                                          >
                                            {option.value}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <div className="row">
                                <ContentGallery
                                  tab={ListType.RIGHTSIDE}
                                  setModalShow={setModalShow}
                                  type={dataArray}
                                  breed={typeCow}
                                  setSelectData={setSelectData}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey={ListType.HAUNCH} title={ListType.HAUNCH}>
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <Row>
                                <Col>
                                  <h1 className="text-white mt-3">
                                    {ListType.HAUNCH}
                                  </h1>
                                </Col>
                                <Col>
                                  <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                      window.open(
                                        "https://api-cow.herokuapp.com/api/download/all",
                                        "_blank"
                                      );
                                    }}
                                  >
                                    Download All Images
                                  </button>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Control
                                      className="btn-primary btn-lg breed"
                                      as="select"
                                      required
                                      onChange={(e) =>
                                        setTypeCow(e.target.value)
                                      }
                                      value={typeCow}
                                    >
                                      <option value="">ทั้งหมด</option>
                                      {optionSelect.map((option, index) => {
                                        return (
                                          <option
                                            value={option.value}
                                            key={index}
                                          >
                                            {option.value}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <div className="row">
                                <ContentGallery
                                  tab={ListType.HAUNCH}
                                  setModalShow={setModalShow}
                                  type={dataArray}
                                  breed={typeCow}
                                  setSelectData={setSelectData}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey={ListType.STOOL} title={ListType.STOOL}>
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <Row>
                                <Col>
                                  <h1 className="text-white mt-3">
                                    {ListType.STOOL}
                                  </h1>
                                </Col>
                                <Col>
                                  <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                      window.open(
                                        "https://api-cow.herokuapp.com/api/download/all",
                                        "_blank"
                                      );
                                    }}
                                  >
                                    Download All Images
                                  </button>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Control
                                      className="btn-primary btn-lg breed"
                                      as="select"
                                      required
                                      onChange={(e) =>
                                        setTypeCow(e.target.value)
                                      }
                                      value={typeCow}
                                    >
                                      <option value="">ทั้งหมด</option>
                                      {optionSelect.map((option, index) => {
                                        return (
                                          <option
                                            value={option.value}
                                            key={index}
                                          >
                                            {option.value}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <div className="row">
                                <ContentGallery
                                  tab={ListType.STOOL}
                                  setModalShow={setModalShow}
                                  type={dataArray}
                                  breed={typeCow}
                                  setSelectData={setSelectData}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey={ListType.FOOT} title={ListType.FOOT}>
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <Row>
                                <Col>
                                  <h1 className="text-white mt-3">
                                    {ListType.FOOT}
                                  </h1>
                                </Col>
                                <Col>
                                  <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                      window.open(
                                        "https://api-cow.herokuapp.com/api/download/all",
                                        "_blank"
                                      );
                                    }}
                                  >
                                    Download All Images
                                  </button>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Control
                                      className="btn-primary btn-lg breed"
                                      as="select"
                                      required
                                      onChange={(e) =>
                                        setTypeCow(e.target.value)
                                      }
                                      value={typeCow}
                                    >
                                      <option value="">ทั้งหมด</option>
                                      {optionSelect.map((option, index) => {
                                        return (
                                          <option
                                            value={option.value}
                                            key={index}
                                          >
                                            {option.value}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <div className="row">
                                <ContentGallery
                                  tab={ListType.FOOT}
                                  setModalShow={setModalShow}
                                  type={dataArray}
                                  breed={typeCow}
                                  setSelectData={setSelectData}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
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
