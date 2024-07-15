import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href="">
           Xavier Ib
        </a>
      </div>
    </MDBFooter>
    );
}