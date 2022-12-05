import React from 'react'
import styled from "styled-components"
import pic1 from "./Images/career1.png"
import pic2 from "./Images/career2.png"

const Career = () => {
  return (
    <Container>
      <Img src={pic1} />
      <Text>
        <h3>CAREERS</h3>
        <h1>We can’t do it alone</h1>
        <p>
          We have an ambitious road ahead, and we’re looking for people to join
          our global team to help shape the future of Atlassian.
        </p>
        <button>Join the team</button>
      </Text>
      <Img2 src={pic2} />
    </Container>
  );
}

export default Career;

const Text = styled.div`
  /* width:400px; */
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
    color: #3c5a99;
    margin: 0;
  }

  h1 {
    font-size: 30px;
    color: #253858;
    margin: 0;
  }
  p {
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #0052cc;
    border: 0;
    border-radius: 5px;

    :hover {
      transition: all 350ms;
      cursor: pointer;
      transform: scale(0.9);
      background-color: white;
      color: #0052cc;
      font-weight:bold;
      border: 1px solid #0052cc;
    }
  }
`;
const Img = styled.img`
background-color:white;
width:400px;
`;
const Img2 = styled.img`
background-color:green;
width:400px;
`;
const Container = styled.div`
width:100%;
display:flex;
justify-content:space-between;
`
