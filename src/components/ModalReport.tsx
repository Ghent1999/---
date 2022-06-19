import { Button, Modal } from "react-bootstrap";

interface ModalsReportProps {
  show: boolean;
  onHide: () => void;
  title: string;
  body: string;
  onConfirm?: () => void;
  confirmText?: string;
}

export default function ModalsReport({
  show,
  onHide,
  title,
  body,
  onConfirm,
  confirmText,
}: ModalsReportProps) {
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
        <Button onClick={onHide} className="bg-success">
          ตกลง
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
