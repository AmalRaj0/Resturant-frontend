import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Restop({op}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(op);
  return (
    <div>
       <Button variant="secondary" onClick={handleShow}>
        Operating hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body> Monday :{op?.Monday}</Modal.Body>
        <Modal.Body> Tuesday :{op?.Tuesday}</Modal.Body>
        <Modal.Body> Wednesday :{op?.Wednesday}</Modal.Body>
        <Modal.Body> Thursday :{op?.Thursday}</Modal.Body>
        <Modal.Body> Friday :{op?.Friday}</Modal.Body>
        <Modal.Body> Saturday :{op?.Saturday}</Modal.Body>
        <Modal.Body> Sunday :{op?.Sunday}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Restop
