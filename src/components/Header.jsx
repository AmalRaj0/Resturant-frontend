import React from 'react'
import '../components/Header.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
            <img
              src='https://cdn-icons-png.flaticon.com/512/8280/8280802.png'
              height='40'
              alt=''
              loading='lazy'
            />
            TasteTraverse
            <span class="loader"></span>
  
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
