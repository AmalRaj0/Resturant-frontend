import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';
function ViewRest() {
  const [item, setitem] = useState([])
  // useParams - used to get path parameter from the url
  // const paraid=useParams()
  // console.log(paraid.id);
  // destructuring
  const { id } = useParams()
  console.log(id);
  const base_url = "https://resturant-backend-1wq8.onrender.com/restaurants"
  //API call to get a particular resturant using the path parameter
  const fetchrest = async () => {
    const result = await axios.get(`${base_url}/${id}`).then(data => setitem(data.data))
  
  }
  console.log(setitem);
  console.log(item);
  useEffect(() => {
    fetchrest()
  },[])
  // console.log(item.operating_hours);
  return (
    <div>
      <Row>
        <Col>
          <img height={"600px"} width={"700px"} src={item.photograph} alt="" />
        </Col>
        <Col>
          <div>
            <h3>Resturant Name : {item.name}</h3>
            <p>Address:{item.address}</p>

          </div>
          <div>
          <ListGroup style={{width:"500px"}}>
      <ListGroup.Item>Neighborhood : {item.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine : {item.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><Restop op={item.operating_hours} /></ListGroup.Item>
      <ListGroup.Item><Restreview review={item.reviews}/></ListGroup.Item>
    </ListGroup>
          </div>
      
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest
