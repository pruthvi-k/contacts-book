import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ConfirmationPopup(props) {
  const [show, setShow] = useState(props.showPopup || false);

  const handleClose = () => {
    props.handleConfirm();
    setShow(false);
  };
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this record</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleConfirm}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<ConfirmationPopup />);
export default ConfirmationPopup;
