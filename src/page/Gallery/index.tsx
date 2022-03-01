import { Tab, Tabs } from "react-bootstrap";
import { ListType } from "../../enum/ListTypeCow";
import ContentGallery from "../../feature/ContantGallery";
import "./gallery.css";

export default function Gallery() {
  return (
    <>
      <Tabs
        defaultActiveKey={ListType.NOSE}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey={ListType.NOSE} title={ListType.NOSE}>
          <ContentGallery tab={ListType.NOSE} />
        </Tab>
        <Tab eventKey={ListType.LEFTSIDE} title={ListType.LEFTSIDE}>
          <ContentGallery tab={ListType.LEFTSIDE} />
        </Tab>
        <Tab eventKey={ListType.RIGHTSIDE} title={ListType.RIGHTSIDE}>
          <ContentGallery tab={ListType.RIGHTSIDE} />
        </Tab>
        <Tab eventKey={ListType.HAUNCH} title={ListType.HAUNCH}>
          <ContentGallery tab={ListType.HAUNCH} />
        </Tab>
        <Tab eventKey={ListType.STOOL} title={ListType.STOOL}>
          <ContentGallery tab={ListType.LEFTSIDE} />
        </Tab>
      </Tabs>
    </>
  );
}
