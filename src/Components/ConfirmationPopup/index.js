import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

function ConfirmationPopup({
  showPopup,
  handleConfirm,
  heading = 'Confrimation Popup',
}) {
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
ConfirmationPopup.propTypes = {
  showPopup: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  heading: PropTypes.string,
};
export default ConfirmationPopup;
