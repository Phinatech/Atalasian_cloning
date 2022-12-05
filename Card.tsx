import React from 'react'
import styled from "styled-components"
import pic1 from "./Images/logobg1.png"
import pic2 from "./Images/cdbg.png"
import pic3 from "./Images/zx.png"




interface cardData{
  image: any
  flex: string
  flex2: string
  flex1: string
  text1:string
  text2:string
  text3:string
  text4:string
  text5:string

}
const Card:React.FC<cardData> = ({image, flex, flex2, flex1,text1,text2,text3,text4,text5}) => {
  return (
    <Container>
      <Right>
        <h1>{text1}</h1>
        <h4>{text2}</h4>

        <Box flex={flex}>
          <Icon src={pic1} />
          <Message>
            <Top>
              <h1>{text3}</h1>
            </Top>
            <Bottom>
              <h5>Content collaboration</h5>
            </Bottom>
          </Message>
        </Box>

        <Box1 flex1={flex1}>
          <Icon src={pic2} />
          <Message>
            <Top>
              <h1>{text4}</h1>
            </Top>
            <Bottom>
              <h5>Content collaboration</h5>
            </Bottom>
          </Message>
        </Box1>

        <Box2 flex2={flex2}>
          <Icon src={pic3} />
          <Message>
            <Top>
              <h1>{text5}</h1>
            </Top>
            <Bottom>
              <h5>Content collaboration</h5>
            </Bottom>
          </Message>
        </Box2>
      </Right>
      <Left>
        <img src={image} alt="" />
      </Left>
    </Container>
  );
}

export default Card;

const Box = styled.div<{flex: string}>`
  width: 23vw;
  height: 15vh;
  display: ${(props)=> props.flex};
  align-items: center;
`
const Box1 = styled.div<{flex1: string}>`
  width: 23vw;
  height: 15vh;
  display: ${(props)=> props.flex1};
  align-items: center;
`
const Box2 = styled.div<{flex2: string}>`
  width: 23vw;
  height: 15vh;
  display: ${(props)=> props.flex2};
  align-items: center;
`
const Icon = styled.img`
  width: 10vw;
  height: 85%;
  background-color: #dfe1e5;
  object-fit: contain;
  margin-right: 30px;

  :hover {
    cursor: pointer;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition:all 350ms ease-in;
    transform:scale(1.09)
  }
`;
const Message = styled.div`
  width: 20vw;
  /* height: 85%; */
  /* background-color: #15ff00; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Top = styled.div`
  width: 100%;

  margin-bottom: 2px;


  h1 {
    margin: 0;

    color: #000;
  }
`;
const Bottom = styled.div`
  /* width: 100%; */
  /* background-color: #fbff00; */

  h5 {
    font-size: 14px;
    margin:0;
    margin-bottom:20px;
    font-weight:400;
  }
`;
const Container = styled.div`
margin-top: 20px;
    width:73vw;
    height:70vh;
    display: flex;
`
const Right = styled.div`
  width: 40%;
  height: 100%;

  h1{
    margin: 0;
    font-weight: 500;
    font-size: 18px;
  }
  h4{
    /* margin: 0; */
    color: #2a2abe;
    font-size: 15px;
    font-weight: 500;
  }
`;

const Left = styled.div`
width: 60%;
height: 100%;

img{
  height: 100%;
  width: 100%;

}`