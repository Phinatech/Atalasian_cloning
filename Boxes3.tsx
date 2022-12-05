import React from 'react'
import styled from "styled-components"


interface Iprops{
    text:string
    text1:string
    text2:string
    image:string
    col:string
}

const Boxes3:React.FC<Iprops> = ({text,text1,text2,image,col}) => {
  return (
    <Container>
      <Upper src={image} />
      <Lower col={col}>
        <h2>{text}</h2>
        <p>
         {text1}
        </p>
        <h4>{text2}</h4>
      </Lower>
    </Container>
  );
}

export default Boxes3;
const Lower = styled.div<{col:string}>`
  width: 100%;
  background-color: ${(props)=> props.col};
  display: flex;
  /* justify-content:center; */
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 22px;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 500;
    color: #173b54;
  }

  p {
    text-align: center;
    margin: 0;
    font-size: 15px;
  }

  h4 {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 16px;
    color: #0065ff;
  }
`;
const Upper = styled.img`
width:100%;
background-color:green;
`
const Container = styled.div`
width:370px;
/* height:450px; */
display:flex;
flex-direction:column;

:hover{
    cursor:pointer;
    transition:all 350ms;
    /* transform:scale(1.09); */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
`;