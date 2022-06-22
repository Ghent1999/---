import { Dispatch, SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";
import { ReportInsert } from "../models/ReportModel";
import GalleryService from "../services/GalleryService";

interface ModalsReportProps {
  show: boolean;
  onHide: () => void;
  Modalshow: Dispatch<SetStateAction<boolean>>;
  title: string;
  body: string;
  onConfirm?: () => void;
  confirmText?: string;
  selectData: ReportInsert | any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  alert: Dispatch<SetStateAction<boolean>>;
}

export default function ModalsReport({
  show,
  onHide,
  Modalshow,
  title,
  body,
  onConfirm,
  confirmText,
  selectData,
  setLoading,
  alert,
}: ModalsReportProps) {
  const reportSubmit = async (event: any) => {
    setLoading(true);
    const data: ReportInsert = {
      no: selectData.no,
      create_at: selectData.create_at,
      full_name_owner: selectData.full_name_owner,
      full_name: selectData.full_name,
      tel: selectData.tel,
      type: selectData.type,
      image: selectData.image,
      breed: selectData.breed,
      token_gallery: selectData.token_gallery,
    };
    await GalleryService.addReport(data)
      .then(() => {
        Modalshow(false);
        setLoading(false);
        alert(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-center"
    >
      <Modal.Header className="bg-primary text-white">
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{body}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={reportSubmit} className="bg-success">
          ตกลง
        </Button>
        <Button onClick={onHide} className="bg-danger">
          ยกเลิก
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
