import { useEffect, useState } from "react";
// import { Tab, Tabs } from "react-bootstrap";
import { ListType } from "../../enum/ListTypeCow";
import ContentGallery from "../../feature/ContantGallery";
import TutorialDataService from "../../services/GalleryService";
import "./gallery.css";
import Tabs from "./Tabs";
import Tab from "./Tabs/Tab";

export default function Gallery() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const nose: any[] = [];
  const leftside: any[] = [];
  const rightside: any[] = [];
  const haunch: any[] = [];
  const stool: any[] = [];

  function retrieveTutorials() {
    TutorialDataService.getAllGallery()
      .then((response: any) => {
        setDataArray(response.data);
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].typeCow === ListType.NOSE) {
            nose.push(response.data[i]);
          } else if (response.data[i].typeCow === ListType.LEFTSIDE) {
            leftside.push(response.data[i]);
          } else if (response.data[i].typeCow === ListType.RIGHTSIDE) {
            rightside.push(response.data[i]);
          } else if (response.data[i].typeCow === ListType.HAUNCH) {
            haunch.push(response.data[i]);
          } else if (response.data[i].typeCow === ListType.STOOL) {
            stool.push(response.data[i]);
          }
        }
        console.log(dataArray);
        console.log(nose);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  return (
    <>
      <Tabs>
        <Tab title={ListType.NOSE}>
          <ContentGallery tab={ListType.NOSE} type={nose} />
        </Tab>
        <Tab title={ListType.LEFTSIDE}>
          <ContentGallery tab={ListType.NOSE} type={dataArray} />
        </Tab>
        <Tab title={ListType.RIGHTSIDE}>Pear is green</Tab>
        <Tab title={ListType.HAUNCH}>Pear is green</Tab>
        <Tab title={ListType.STOOL}>Pear is green</Tab>
      </Tabs>
      {/* <Tabs
        defaultActiveKey={ListType.NOSE}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey={ListType.NOSE} title={ListType.NOSE}>
          <ContentGallery tab={ListType.NOSE} type={dataArray}/>
        </Tab>
        <Tab eventKey={ListType.LEFTSIDE} title={ListType.LEFTSIDE}>
          <ContentGallery tab={ListType.LEFTSIDE} type={dataArray} />
        </Tab>
        <Tab eventKey={ListType.RIGHTSIDE} title={ListType.RIGHTSIDE}>
          <ContentGallery tab={ListType.RIGHTSIDE} type={dataArray}/>
        </Tab>
        <Tab eventKey={ListType.HAUNCH} title={ListType.HAUNCH}>
          <ContentGallery tab={ListType.HAUNCH} type={dataArray}/>
        </Tab>
        <Tab eventKey={ListType.STOOL} title={ListType.STOOL}>
          <ContentGallery tab={ListType.LEFTSIDE} type={dataArray}/>
        </Tab>
      </Tabs> */}
    </>
  );
}
