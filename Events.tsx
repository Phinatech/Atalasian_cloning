import React from 'react'
import styled from "styled-components"
import pic1 from "./Images/work1.png"
import pic2 from "./Images/work2.jpg"

const Events = () => {
  return (
    <Container>
      <Upper>
        <h3>EVENTS</h3>
        <h1>
          Hear from today’s fearless builders and innovators
        </h1>
        <p>Learn more</p>
      </Upper>
        <Box1 src={pic2}/>
        <Box2 src={pic1}/>
        
    </Container>
  );
}

export default Events;

const Container = styled.div`
width:100%;
display:flex;
justify-content:space-evenly;
`
const Upper = styled.div`
  width: 370px;
 

  h3 {
    color: #008da6;
    font-weight: 800;
  }

  h1 {
    color: #42526e;
    font-size:27px;
  }

  p {
    color: #0065ff;
    font-size:14px;
    font-weight:bold;
  }
`;

const Box1 = styled.img`
width:370px;
background-color:black;
/* margin-right:30px; */

`
const Box2 = styled.img`
width:370px;
background-color:indigo;
margin-left:-1px;
`