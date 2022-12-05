import React from 'react'
import styled from "styled-components"
import Boxes3 from './Boxes3';
import pic1 from "./Images/face1.jpg";
import pic2 from "./Images/face2.png";
import pic3 from "./Images/face3.png";

const PassingCard = () => {
  return (
    <Container>
      <Boxes3
        text="Work Life"
        text1=" Real-life advice, inspiration, and stories from the working world
          today."
        text2="Read our blog"
        image={pic1}
        col="#eae6ff"
      />
      <Boxes3
        text="Atlassian Team Playbook"
        text1="Solve common team challenges with these group exercises"
        text2="Check team health"
        image={pic2}
        col="#E6FCFF"
      />
      <Boxes3
        text="The Agile Coach"
        text1="Atlassian's no-nonsense guide to agile development."
        text2="Visit our resources"
        image={pic3}
        col="#DEEBFF"
      />
    </Container>
  );
}

export default PassingCard;

const Container = styled.div`
width:100%;
justify-content:space-evenly;
display:flex;
margin-bottom:30px;
`