import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ConfirmationPopup({ showPopup, handleConfirm, heading }) {
  const [show, setShow] = useState(showPopup || false);

  const handleClose = () => {
    handleConfirm();
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this record</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleConfirm}>
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

export default ConfirmationPopup;
