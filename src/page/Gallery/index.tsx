import { useEffect, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import ModalsReport from "../../components/ModalReport";
import { ListType } from "../../enum/ListTypeCow";
import ContentGallery from "../../feature/ContantGallery";
import TutorialDataService from "../../services/GalleryService";
import "./gallery.css";

export default function Gallery() {
  const [dataArray, setDataArray] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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

  return (
    <>
      <ModalsReport
        show={modalShow}
        onHide={() => {}}
        title="แจ้งเตือน"
        body="ยืนยันรายงานรูปภาพ"
      />
      ;
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
                    <h1 className="text-white mt-3">{ListType.NOSE}</h1>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-primary btn-lg btn-block"
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
                    <button
                      className="btn btn-primary btn-lg btn-block"
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
                </Row>
                <div className="row">
                  <ContentGallery
                    tab={ListType.NOSE}
                    setModalShow={setModalShow}
                    type={dataArray}
                  />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey={ListType.LEFTSIDE} title={ListType.LEFTSIDE}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Row>
                  <Col>
                    <h1 className="text-white mt-3">{ListType.LEFTSIDE}</h1>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-primary btn-lg btn-block"
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
                </Row>
                <div className="row">
                  <ContentGallery
                    tab={ListType.LEFTSIDE}
                    setModalShow={setModalShow}
                    type={dataArray}
                  />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey={ListType.RIGHTSIDE} title={ListType.RIGHTSIDE}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Row>
                  <Col>
                    <h1 className="text-white mt-3">{ListType.RIGHTSIDE}</h1>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-primary btn-lg btn-block"
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
                </Row>
                <div className="row">
                  <ContentGallery
                    tab={ListType.RIGHTSIDE}
                    setModalShow={setModalShow}
                    type={dataArray}
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
                    <h1 className="text-white mt-3">{ListType.HAUNCH}</h1>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-primary btn-lg btn-block"
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
                </Row>
                <div className="row">
                  <ContentGallery
                    tab={ListType.HAUNCH}
                    setModalShow={setModalShow}
                    type={dataArray}
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
                    <h1 className="text-white mt-3">{ListType.STOOL}</h1>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-primary btn-lg btn-block"
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
                </Row>
                <div className="row">
                  <ContentGallery
                    tab={ListType.STOOL}
                    setModalShow={setModalShow}
                    type={dataArray}
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
                    <h1 className="text-white mt-3">{ListType.FOOT}</h1>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-primary btn-lg btn-block"
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
                </Row>
                <div className="row">
                  <ContentGallery
                    tab={ListType.FOOT}
                    setModalShow={setModalShow}
                    type={dataArray}
                  />
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
