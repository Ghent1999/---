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
  // const reportSubmit = async (event: any) => {
  //   // setLoading(true);
  //   const data: ReportInsert = {
  //     no: project.no,
  //     create_at: project.create_at,
  //     full_name_owner: project.full_name_owner,
  //     full_name: project.full_name,
  //     tel: project.tel,
  //     type: project.type,
  //     image: project.image,
  //     breed: project.breed,
  //     token_gallery: project.id,
  //   };
  //   await GalleryService.addReport(data)
  //     .then(() => {
  //       setModalShow(true);
  //       // setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
        <Button onClick={onHide} className="bg-danger">
          ยกเลิก
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
