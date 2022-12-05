import React, { useState } from 'react'
import styled from "styled-components"
import vic from "./Images/videoplay.png"
import plays from "./video/video.mp4"

import pic1 from "./Images/kiva5.png"
import pic2 from "./Images/twitter4.jpeg"
import pic3 from "./Images/Redfin1.png"
import pic4 from "./Images/round.jpeg"
import pic5 from "./Images/tangle2.png"

import pic6 from "./Images/cast3.png";

const Video = () => {
    const[show,setShow]= useState<Boolean>(false)

    const Pop =()=>{
        setShow(!show)
    }

    const Closepop = ()=>{
        setShow(!show)
    }
  return (
    <Container>
      <h2>Join the teams that achieve the impossible every day</h2>
      <Playing>
        <img onClick={Pop} src={vic} alt="" />
        <p>Watch a customer story</p>
      </Playing>

      {show ? (
        <VideoBg>
          <Videohold>
            <video src={plays} autoPlay loop ></video>
          </Videohold>
          <Close>
            <p onClick={Closepop}>close</p>
          </Close>
        </VideoBg>
      ) : null}

      <Logos>
        <Picture src={pic1}  />
        <Picture src={pic2}  />
        <Picture src={pic3}  />
        <Picture src={pic4}  />
        <Picture src={pic5}  />
        <Picture src={pic6}  />
      </Logos>
    </Container>
  );
}

export default Video;

const Picture = styled.img`
width:170px;
height:100px;
object-fit:contain;
margin-bottom:80px;
`
const Logos = styled.div`
  width: 100%;
  margin-top:50px;
  /* background-color: #edf4ff; */
  display:flex;
  justify-content:space-around;
`;
const VideoBg = styled.div`
width:100%;
height:100vh;
background-color:#0000007f;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;  
 position:fixed;

`
const Videohold= styled.div`
 width:100%;
height:500px;
/* background-color:yellow;  */
video{
  width:100%;
  height:100%;
}
`
const Close = styled.div`
width:80px;
 height:50px;
/* background-color:green; */
`
const Container = styled.div`
  width: 100;
  /* height: 500px; */
  background-image: linear-gradient(
    180deg,
    rgba(251, 251, 251, 0) 0.05%,
    #deebff 99.95%
  );
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom:70px;

  h2 {
    color: #3c5a99;
    margin:0;
  }
`;
const Playing = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    font-size: 18px;
    color: #0065ff;
    margin-left:10px;
  }
`;

