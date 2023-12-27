import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Restcard({item}) {
   
  return (
    <div >
     <Link style={{textDecoration:"none"}} to={`/view/${item.id}`}>
     <Card className='p-2' style={{ width: '23em',height:'30rem'}}>
      <Card.Img className='rounded' height={"300px"} variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title className='fw-bolder' >{item.name}</Card.Title>
        <Card.Text className='fw-bold'>
         {item.address} , Near {item.neighborhood}
        </Card.Text>
        <div>
          {/* <p className='text-danger fw-bold'>Cuisine Type:<span className='fw-bold'>{item.cuisine_type}</span> </p> */}
        </div>
        {/* <div style={{textAlign:"justify",fontSize:"small"}} className='text-success fw-bold'>
          <p>Monday : {item.operating_hours.Monday}</p>
          <p>Tuesday : {item.operating_hours.Tuesday}</p>
          <p>Wednesday : {item.operating_hours.Wednesday }</p>
          <p>Thursday : {item.operating_hours.Thursday }</p>
          <p>Friday : {item.operating_hours.Friday }</p>
        </div> */}
        <Button
        
       variant="danger">Visit Now</Button>
      </Card.Body>
    </Card></Link>
    </div>
  )
}

export default Restcard
