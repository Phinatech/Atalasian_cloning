import React from 'react'
import styled from "styled-components"
import pics from "../Images/hero_left.png"
import pic2 from "../Images/hero_right.jpg"

const Hero = () => {
  return (
    <Container>
      <First>
        <Text>
          It’s possible <br /> <span>with teamwork</span>
        </Text>
      </First>
      <Second>
        <Bgimg src={pic2} />
      </Second>
    </Container>
  );
}

export default Hero

const Container = styled.div`
width:100%;
/* height:500px; */
display:flex;
background-image:url(${pics});
background-size:contain;
background-position:left;
background-repeat:no-repeat;
justify-content:center;
align-items:center;
`
const Holder = styled.div`

`
const First = styled.div`
margin-left:20px;
`
const Second = styled.div``

const Bgimg = styled.img`
    height:450px
`
const Text = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 1.4;
  color:#4b586f ;

  span {
    margin-left: 50px;
  }
`;