import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ListType } from "../../enum/ListTypeCow";
import ContentGallery from "../../feature/ContantGallery";
import TutorialDataService from "../../services/GalleryService";
import "./gallery.css";

export default function Gallery() {
  const [dataArray, setDataArray] = useState([]);

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
      <Tabs
        defaultActiveKey={ListType.NOSE}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey={ListType.NOSE} title={ListType.NOSE}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white mt-3">{ListType.NOSE}</h1>
                <div className="row">
                  <ContentGallery tab={ListType.NOSE} type={dataArray} />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey={ListType.LEFTSIDE} title={ListType.LEFTSIDE}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white mt-3">{ListType.LEFTSIDE}</h1>
                <div className="row">
                  <ContentGallery tab={ListType.LEFTSIDE} type={dataArray} />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey={ListType.RIGHTSIDE} title={ListType.RIGHTSIDE}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white mt-3">{ListType.RIGHTSIDE}</h1>
                <div className="row">
                  <ContentGallery tab={ListType.RIGHTSIDE} type={dataArray} />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey={ListType.HAUNCH} title={ListType.HAUNCH}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white mt-3">{ListType.HAUNCH}</h1>
                <div className="row">
                  <ContentGallery tab={ListType.HAUNCH} type={dataArray} />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey={ListType.STOOL} title={ListType.STOOL}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-white mt-3">{ListType.STOOL}</h1>
                <div className="row">
                  <ContentGallery tab={ListType.STOOL} type={dataArray} />
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
