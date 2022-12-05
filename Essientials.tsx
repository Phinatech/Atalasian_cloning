import React from 'react'
import styled from "styled-components"
import lady from "./Images/lady.jpg"

const Essientials = () => {
  return (
    <Container>
      <Div1>
        <h3>TEAM ESSENTIALS</h3>
        <h1>
          Explore resources to unleash <br /> the potential of your team
        </h1>
      </Div1>
      <Div2>
        <Img src={lady} />
        <Bellow>
          <h2>Atlassian Community</h2>
          <p>
            Connect globally and meet locally to get more out of our products.
          </p>
          <Joinbox>
            <p>Search the forum</p>
            <p>Join our community</p>
          </Joinbox>
        </Bellow>
      </Div2>
    </Container>
  );
}

export default Essientials;

const Container = styled.div`
width:100%;
/* height:400px; */
background-color:#ffff;
display:flex;
justify-content:center;
margin-bottom:30px
`
const Div1 = styled.div`
  width: 380px;

  margin-right: 50px;

  h3 {
    font-weight: 800;
    color: #008da6;
  }

  h1 {
    font-size: 27px;
    font-weight: bold;
    color: #42526e;
  }
`;
const Div2 = styled.div`
  width: 59%;
  /* background-color:green; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right:10px;

  :hover {
    /* box-shadow: 0 4px 12px rgb(0 0 0 / 25%); */
    /* transform: scale(0.98); */
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      transition:all 350ms;
  }
`;
const Img = styled.img`
width:100%;
/* height:50px; */
object-fit:contain;
`

const Bellow = styled.div`
  background-color: #ffebe5;
  width: 100%;
  /* height:100px; */
  display: flex;
  /* justify-content:center; */
  align-items: center;
  flex-direction: column;
 
  h2 {
    color: #42526e;
    font-size: 20px;
    margin: 0;
    margin-top: 15px;
  }

  p {
    font-size: 13px;
    
  }
`;

const Joinbox = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-evenly;

  p {
    font-size: 17px;
    color: #0065ff;
  }
`;

