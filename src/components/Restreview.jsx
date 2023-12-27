import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
function Restreview({review}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(review);
  return (
      <div>
    <Button variant="secondary" onClick={handleShow}>
        Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>
            {
             review?.map(item=>(
                <ListGroup className='mt-3'>
                <ListGroup.Item>Name: {item.name}</ListGroup.Item>
                <ListGroup.Item>Date :{item.date}</ListGroup.Item>
                <ListGroup.Item> Ratings :{item.rating}/5</ListGroup.Item>
                <ListGroup.Item>Comments : {item.comments}</ListGroup.Item>
              </ListGroup>
             ))   
            }
        </div>
    
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Restreview
