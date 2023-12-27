import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Restcard from './Restcard';

function AllRest() {
  const [restdata,setrestdata]=useState([])
const base_url = "https://resturant-backend-1wq8.onrender.com/restaurants"
const fetchdata=async()=>{
  const result=await axios.get(base_url).then(data=>setrestdata(data.data))
  // console.log(result.data);
}
console.log(restdata);
useEffect(()=>{
  fetchdata()
},[])
  return (
    <div>
 <Row className='mt-3 '>
 {
    restdata.map(item=>(
<Col sm={12} md={6} lg={4} xl={3} className='mt-3 mb-3'>
<Restcard item={item}/>
</Col>
    ))
   }
 </Row>
    </div>
  )
}

export default AllRest
